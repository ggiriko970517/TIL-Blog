package project.goboogie.security.filter;


import io.jsonwebtoken.Claims;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import project.goboogie.security.jwt.JwtTokenProvider;

import java.io.IOException;
import java.util.Collections;

@Slf4j
@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;


    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
        // 특정 경로는 필터를 적용하지 않음
        String path = request.getRequestURI();
        return path.startsWith("/auth/oauth2/callback/");
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
        throws ServletException, IOException {
        String token = resolveToken(request);

        if (token != null) {
            Claims claims = jwtTokenProvider.getClaimsFromToken(token);
            log.info("Parsed Claims: {}", claims);
            String provider = (String) claims.get("provider");
            log.info("provider = {}", provider);
            if (provider == null || provider.trim().isEmpty() || provider.equalsIgnoreCase("null") || provider.equalsIgnoreCase("normal")) {
                log.info("Password-based authentication triggered");
                handlePasswordAuthentication(token);
            } else {
                log.info("OAuth2-based authentication triggered");
                handleOAuthAuthentication(claims);
            }

        }

        // 필터 체인을 계속 진행
        filterChain.doFilter(request, response);
    }

    private void handleOAuthAuthentication(Claims claims) {
        try {
            // Claims에서 필요한 정보 추출
            String oauthProviderId = (String) claims.get("oauthProviderId");
            Integer userId = (Integer) claims.get("userID");
            String email = claims.getSubject(); // Claims의 sub 필드에 저장된 email
            String provider = (String) claims.get("provider");

            log.info("OAuth Authentication - userId: {}, email: {}, provider: {}, oauthProviderId: {}", userId, email, provider, oauthProviderId);

            // oauthProviderId가 없으면 예외 발생
            if (oauthProviderId == null || oauthProviderId.isEmpty()) {
                throw new IllegalArgumentException("OAuth2 Provider ID가 없습니다.");
            }

            // 권한 추가
            var authorities = Collections.singletonList(new SimpleGrantedAuthority("user"));

            // UsernamePasswordAuthenticationToken 사용
            UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userId, null, authorities);

            // SecurityContext에 인증 정보 설정
            SecurityContextHolder.getContext().setAuthentication(authentication);

            log.info("OAuth2-based authentication successful for userId: {}, provider: {}", userId, provider);
        } catch (Exception e) {
            log.error("OAuth Authentication failed: {}", e.getMessage());
        }
    }


    private void handlePasswordAuthentication(String token) {
        try {
            // 토큰으로 인증 시도
            var authentication = new UsernamePasswordAuthenticationToken(null, token);
            var authenticated = authenticationManager.authenticate(authentication);
            SecurityContextHolder.getContext().setAuthentication(authenticated);
        } catch (Exception e) {
            // 인증 실패 시 로그만 남기고 SecurityContext를 설정하지 않음
            logger.warn("JWT Authentication failed: {}", e);
        }
    }

    private String resolveToken(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (bearerToken != null && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        return null;
    }
}
