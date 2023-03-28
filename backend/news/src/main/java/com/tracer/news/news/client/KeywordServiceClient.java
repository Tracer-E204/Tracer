package com.tracer.news.news.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(name = "${client.keyword}")
public interface KeywordServiceClient {
    @GetMapping("/keyword/news")
    ResponseEntity<Object> newsKeyword();
}
