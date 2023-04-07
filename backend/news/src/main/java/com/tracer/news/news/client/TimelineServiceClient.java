package com.tracer.news.news.client;

import com.tracer.news.news.vo.ReqCluster;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@FeignClient(name = "${client.timeline}")
public interface TimelineServiceClient {
    @PostMapping("/api/timeline/cluster/news")
    ResponseEntity<Object> clusterNews(@RequestBody ReqCluster reqCluster);
}
