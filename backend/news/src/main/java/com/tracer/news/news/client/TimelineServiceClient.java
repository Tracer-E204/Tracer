package com.tracer.news.news.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "${client.timeline}")
public interface TimelineServiceClient {
    @GetMapping("/timeline/cluster/news/{clusterId}")
    ResponseEntity<Object> clusterNews(@PathVariable("clusterId") Long clusterId);
}
