package com.jeorgius.back.config;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.util.ResourceUtils;

@Configuration
@ComponentScan(basePackages = "com.jeorgius.back")
@EnableJpaRepositories(basePackages = "com.jeorgius.back")
@EntityScan(basePackages = "com.jeorgius.back")
//@PropertySource(ResourceUtils.CLASSPATH_URL_PREFIX + "database.properties")
public class Cfg {
}
