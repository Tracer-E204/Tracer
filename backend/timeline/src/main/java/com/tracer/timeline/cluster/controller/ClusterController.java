package com.tracer.timeline.cluster.controller;

import com.tracer.timeline.cluster.service.ClusterService;
import com.tracer.timeline.cluster.vo.ResClusterNews;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/timeline/cluster")
public class ClusterController {

    private final ClusterService clusterService;

    @GetMapping("/news/{clusterId}")
    public ResponseEntity<Object> clusterNews(@PathVariable Long clusterId){
        List<ResClusterNews> list = clusterService.clusterNews(clusterId);
        return ResponseEntity.status(HttpStatus.OK).body(list);
    }
}
