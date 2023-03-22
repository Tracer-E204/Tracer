package com.tracer.news.news.controller;

import com.tracer.news.news.service.NewsService;
import com.tracer.news.news.vo.ReqNewsSearch;
import com.tracer.news.news.vo.ResNewsSearch;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/news")
public class NewsController {

    private final NewsService newsService;
    // 뉴스 검색 리스트
    @GetMapping("/search")
    public ResponseEntity<Object> search(ReqNewsSearch reqNewsSearch){
        ResNewsSearch resNewsSearch = newsService.newsSearch(reqNewsSearch);
        return ResponseEntity.status(HttpStatus.OK).body(resNewsSearch);
    }
}
