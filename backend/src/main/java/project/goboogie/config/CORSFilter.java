package project.goboogie.config;

import jakarta.servlet.FilterChain;
import jakarta.servlet.FilterChain;

import jakarta.servlet.FilterConfig;
import jakarta.servlet.Filter;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

public class CORSFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        // 초기화 코드가 필요하면 여기에 추가할 수 있습니다.
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletResponse httpResponse = (HttpServletResponse) response;
        httpResponse.setHeader("Access-Control-Allow-Origin", "*"); // 모든 도메인 허용
        httpResponse.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // 허용되는 HTTP 메서드
        httpResponse.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // 허용되는 HTTP 헤더
        httpResponse.setHeader("Access-Control-Allow-Credentials", "true"); // 자격 증명 허용

        chain.doFilter(request, response);
    }

    @Override
    public void destroy() {
        // 정리 코드가 필요하면 여기에 추가할 수 있습니다.
    }
}
