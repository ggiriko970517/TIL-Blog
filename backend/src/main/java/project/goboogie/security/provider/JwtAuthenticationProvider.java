package project.goboogie.security.provider;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import project.goboogie.security.jwt.JwtTokenProvider;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Component
@RequiredArgsConstructor
public class JwtAuthenticationProvider implements AuthenticationProvider {

    private final JwtTokenProvider jwtTokenProvider;
    private final UserDetailsService userDetailsService;

    @Override
    public Authentication authenticate(Authentication authentication) {
        String token = (String) authentication.getCredentials();

        // JWT 유효성 검사
        if (jwtTokenProvider.validateToken(token)) {
            String email = jwtTokenProvider.getUserID(token);
            UserDetails userDetails = userDetailsService.loadUserByUsername(email);
            // ROLE_ 접두사 추가
            List<GrantedAuthority> updatedAuthorities = userDetails.getAuthorities().stream()
                    .map(auth -> new SimpleGrantedAuthority("ROLE_" + auth.getAuthority()))
                    .collect(Collectors.toList());

            return new UsernamePasswordAuthenticationToken(userDetails, token, updatedAuthorities);
        }

        return null;
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication);
    }
}