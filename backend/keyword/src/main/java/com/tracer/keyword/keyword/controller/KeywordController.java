package com.tracer.keyword.keyword.controller;

import com.tracer.keyword.keyword.service.DailyService;
import com.tracer.keyword.keyword.vo.ResDailyKeyword;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/keyword")
public class KeywordController {

    private final DailyService dailyService;
    @GetMapping("/daily")
    public ResponseEntity<Object> dailyKeyword(@RequestParam("type") Integer type){
        List<ResDailyKeyword> list = dailyService.dailyKeyword(type);
        return ResponseEntity.status(HttpStatus.OK).body(list);
    }
}
