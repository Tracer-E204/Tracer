package com.tracer.keyword.keyword.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/keyword")
public class KeywordController {
    @GetMapping("/")
    public ResponseEntity<Object> test(){
        return ResponseEntity.status(HttpStatus.OK).body("hello keyword");
    }
}
