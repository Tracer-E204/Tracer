package com.tracer.news.config.redis;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.connection.RedisStandaloneConfiguration;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.GenericJackson2JsonRedisSerializer;
import org.springframework.data.redis.serializer.Jackson2JsonRedisSerializer;
import org.springframework.data.redis.serializer.StringRedisSerializer;

@Configuration
@RequiredArgsConstructor
public class RedisConfig {

    @Value("${spring.redis.host}")
    private String cacheHost;
    @Value("${spring.redis.port}")
    private Integer cachePort;
    @Value("${spring.redis.password}")
    private String cachePassword;

    @Bean
    public Jackson2JsonRedisSerializer newsObjectMapper() {
        ObjectMapper objectMapper = new ObjectMapper()
                .findAndRegisterModules()
                .enable(SerializationFeature.INDENT_OUTPUT)
                .disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS)
                .configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)
                .registerModules(new JavaTimeModule());
        Jackson2JsonRedisSerializer serializer = new Jackson2JsonRedisSerializer<>(RedisWord.class);
        serializer.setObjectMapper(objectMapper);
        return serializer;
    }

    @Bean
    public RedisConnectionFactory redisCacheConnectionFactory() {
        RedisStandaloneConfiguration redisStandaloneConfiguration = new RedisStandaloneConfiguration();
        redisStandaloneConfiguration.setHostName(cacheHost);
        redisStandaloneConfiguration.setPort(cachePort);
        redisStandaloneConfiguration.setPassword(cachePassword);
        return new LettuceConnectionFactory(redisStandaloneConfiguration);
    }

    @Bean
    public RedisTemplate<?, ?> getRedisTemplate() {
        RedisTemplate<byte[], byte[]> redisSessionTemplate = new RedisTemplate<>();
        redisSessionTemplate.setKeySerializer(new StringRedisSerializer());
        redisSessionTemplate.setValueSerializer(newsObjectMapper());
        redisSessionTemplate.setHashKeySerializer(new StringRedisSerializer());
        redisSessionTemplate.setHashValueSerializer(newsObjectMapper());
        redisSessionTemplate.setConnectionFactory(redisCacheConnectionFactory());
        return redisSessionTemplate;
    }
}