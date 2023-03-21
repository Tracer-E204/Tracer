package com.tracer.news.news.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/")
public class NewsController {

    @GetMapping("/")
    public ResponseEntity<Object> test(){
        return ResponseEntity.status(HttpStatus.OK).body("hello news test");
    }
}
