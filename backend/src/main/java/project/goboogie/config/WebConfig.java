package project.goboogie.config;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.nio.file.Paths;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // 프로젝트 루트 경로 가져오기
        String projectRoot = Paths.get("").toAbsolutePath().toString();
        String uploadDir = projectRoot + "/uploads/";

        registry.addResourceHandler("/uploads/**")
            .addResourceLocations("file:" + uploadDir);
    }

    @Bean
    public FilterRegistrationBean<CORSFilter> corsFilter() {
        FilterRegistrationBean<CORSFilter> registrationBean = new FilterRegistrationBean<>();
        registrationBean.setFilter(new CORSFilter());
        registrationBean.addUrlPatterns("/*");
        return registrationBean;
    }
}
