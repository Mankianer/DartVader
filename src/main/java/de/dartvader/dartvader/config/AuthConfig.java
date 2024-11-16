package de.dartvader.dartvader.config;

import lombok.Getter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.convert.converter.Converter;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;
import org.springframework.security.web.SecurityFilterChain;

import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Stream;

@Configuration
@EnableWebSecurity
public class AuthConfig {
    @Bean
    SecurityFilterChain resourceServerSecurityFilterChain(
            HttpSecurity http,
            Converter<Jwt, AbstractAuthenticationToken> authenticationConverter) throws Exception {
        http.oauth2ResourceServer(resourceServer -> {
            resourceServer.jwt(jwtDecoder -> {
                jwtDecoder.jwtAuthenticationConverter(authenticationConverter);
            });
        });

        http.sessionManagement(sessions -> {
            sessions.sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        }).csrf(csrf -> {
            csrf.disable();
        });

        http.authorizeHttpRequests(requests -> {
            requests.requestMatchers(HttpMethod.OPTIONS).permitAll();
            requests.requestMatchers(HttpMethod.GET ,"/me").authenticated();
            requests.requestMatchers("/public/**").permitAll();
            requests.anyRequest().denyAll();
        });

        return http.build();
    }

    @Bean
    JwtAuthenticationConverter authenticationConverter(
            Converter<Map<String, Object>, Collection<GrantedAuthority>> authoritiesConverter) {
        var authenticationConverter = new JwtAuthenticationConverter();
        authenticationConverter.setJwtGrantedAuthoritiesConverter(jwt -> {
            return authoritiesConverter.convert(jwt.getClaims());
        });
        return authenticationConverter;
    }

    interface AuthoritiesConverter extends Converter<Map<String, Object>, Collection<GrantedAuthority>> {}

    @Bean
    AuthoritiesConverter realmRolesAuthoritiesConverter() {
        return claims -> {
            var realmAccess = Optional.ofNullable((Map<String, Object>) claims.get("realm_access"));
            var roles = realmAccess.flatMap(map -> Optional.ofNullable((List<String>) map.get("roles")));
            return roles.map(List::stream)
                    .orElse(Stream.empty())
                    .map(SimpleGrantedAuthority::new)
                    .map(GrantedAuthority.class::cast)
                    .toList();
        };
    }

    private class SimpleGrantedAuthority implements GrantedAuthority {
        @Getter
        String authority;
        public SimpleGrantedAuthority(String s) {
            this.authority = s;
        }

    }
}


