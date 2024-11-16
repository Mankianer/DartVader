package de.dartvader.dartvader.config;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/public/auth")
public class PublicAuthEndpoint {

    @GetMapping("/config")
    public String getConfig() {
        return "Demo config";
    }
}
