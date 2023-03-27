package com.tracer.news.news.client;

import org.springframework.cloud.openfeign.FeignClient;

@FeignClient(name = "keyword")
public interface KeywordServiceClient {
    
}
