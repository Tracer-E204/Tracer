package com.tracer.timeline.cluster.controller;

import com.tracer.timeline.cluster.service.ClusterService;
import com.tracer.timeline.cluster.vo.ReqCluster;
import com.tracer.timeline.cluster.vo.ResClusterNews;
import com.tracer.timeline.cluster.vo.ResClusterPage;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/timeline/cluster")
public class ClusterController {

    private final ClusterService clusterService;

    @PostMapping("/news")
    public ResponseEntity<Object> clusterNews(@RequestBody ReqCluster reqCluster){
        ResClusterPage list = clusterService.clusterNews(reqCluster);
        return ResponseEntity.status(HttpStatus.OK).body(list);
    }
}
