package de.dartvader.dartvader.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/public/auth")
public class PublicAuthEndpoint {

    private final AuthConfig authConfig;

    public PublicAuthEndpoint(@Value("${public.auth.config.authority}") String authority,
                              @Value("${public.auth.config.client-id}") String clientId,
                              @Value("${public.auth.config.scope}") String scope,
                              @Value("${public.auth.config.responseType}") String responseType) {
        authConfig = new AuthConfig(authority, clientId, scope, responseType);
    }

    @GetMapping("/config")
    public AuthConfig getConfig() {
        return authConfig;
    }

    public record AuthConfig(String authority, String clientId, String scope, String responseType) {}
}
