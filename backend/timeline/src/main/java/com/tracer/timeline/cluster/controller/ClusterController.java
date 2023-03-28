package com.tracer.timeline.cluster.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/timeline")
public class ClusterController {
    @GetMapping("/cluster")
    public ResponseEntity<Object> test(){
        return ResponseEntity.status(HttpStatus.OK).body("hello cluster");
    }
}
