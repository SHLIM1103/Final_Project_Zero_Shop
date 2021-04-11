package kr.shlim.api.security.config;

import kr.shlim.api.security.domain.SecurityProvider;

import org.modelmapper.ModelMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@EnableWebSecurity
@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired private SecurityProvider provider;

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
    @Bean
    public ModelMapper modelMapper() {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // Disable CSRF (cross site request forgery)
        http.csrf().disable();

        // No session will be created or used by spring security
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        // Entry points
        http.authorizeRequests()//
                .antMatchers("/usr/signup").permitAll()//
                .antMatchers("/usr/signin").permitAll()//
                .antMatchers("/usr/find/{name}").permitAll()//
                .antMatchers("/usr/all").permitAll()//
                .antMatchers("/usr/update/profile").permitAll()//
                .antMatchers("/usr/update/password").permitAll()//
                .antMatchers("/usr/delete").permitAll()//
                .antMatchers("/usr/one/{id}").permitAll()//
                .antMatchers("/usr/count").permitAll()//
                .antMatchers("/boards/save").permitAll()//
                .antMatchers("/boards/delete").permitAll()//
                .antMatchers("/boards/delete/{brdNo}").permitAll()//
                .antMatchers("/boards/count").permitAll()//
                .antMatchers("/boards/all").permitAll()//
                .antMatchers("/boards/board-all").permitAll()//
                .antMatchers("/boards/one/{brdNo}").permitAll()//
                .antMatchers("/boards/find/{brdNo}").permitAll()//
                .antMatchers("/boards/exists/{brdNo}").permitAll()//
                .antMatchers("/boards/option/{brdTitle}").permitAll()//
                .antMatchers("/boards/board-number/{brd}").permitAll()//
                .antMatchers("/boards/search").permitAll()//
                .antMatchers("/boards/update/{brdNo}").permitAll()//
                .antMatchers("/reply/save").permitAll()//
                .antMatchers("/reply/delete/{rplNo}").permitAll()//
                .antMatchers("/reply/count").permitAll()//
                .antMatchers("/reply/all").permitAll()//
                .antMatchers("/reply/one/{id}").permitAll()//
                .antMatchers("/reply/find/{id}").permitAll()//
                .antMatchers("/reply/select/{id}").permitAll()//
                .antMatchers("/reply/exists/{id}").permitAll()//
                .antMatchers("/reply/update/{rplNo}").permitAll()//
                .antMatchers("/products/save").permitAll()//
                .antMatchers("/products/delete").permitAll()//
                .antMatchers("/products/delete/{prdNo}").permitAll()//
                .antMatchers("/products/count").permitAll()//
                .antMatchers("/products/all").permitAll()//
                .antMatchers("/products/one/{prdNo}").permitAll()//
                .antMatchers("/products/find/{prdNo}").permitAll()//
                .antMatchers("/products/exists/{prdNo}").permitAll()//
                .antMatchers("/products/product-number/{prdNo}").permitAll()//
                .antMatchers("/products/search/{prdName}").permitAll()//
                .antMatchers("/products/category/{ctgName}").permitAll()//
                .antMatchers("/products/edit/{prdNo}").permitAll()//
                .antMatchers("/payments/save").permitAll()//
                .antMatchers("/payments/delete").permitAll()//
                .antMatchers("/payments/count").permitAll()//
                .antMatchers("/payments/all").permitAll()//
                .antMatchers("/payments/one/{id}").permitAll()//
                .antMatchers("/payments/find/{id}").permitAll()//
                .antMatchers("/payments/exists/{id}").permitAll()//
                .antMatchers("/receivers/save").permitAll()//
                .antMatchers("/receivers/delete").permitAll()//
                .antMatchers("/receivers/count").permitAll()//
                .antMatchers("/receivers/all").permitAll()//
                .antMatchers("/receivers/one/{id}").permitAll()//
                .antMatchers("/receivers/find/{id}").permitAll()//
                .antMatchers("/receivers/exists/{id}").permitAll()//
                .antMatchers("/h2-console/**/**").permitAll()
                // Disallow everything else..
                .anyRequest().authenticated();

        // If a user try to access a resource without having enough permissions
        http.exceptionHandling().accessDeniedPage("/signin");

        // Apply JWT
         http.apply(new SecurityConfig(provider));

        // Optional, if you want to test the API from a browser
         http.httpBasic();
    }
    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring()
                .antMatchers(HttpMethod.OPTIONS, "/**")

                // allow anonymous resource requests
                .antMatchers(
                        "/",
                        "/h2-console/**"
                );
    }
}