package com.tracer.news.news.controller;

import com.tracer.news.news.dto.CountPerPressDto;
import com.tracer.news.news.service.NewsService;
import com.tracer.news.news.vo.ReqNewsSearch;
import com.tracer.news.news.vo.ResNewsSearch;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/news")
public class NewsController {

    private final NewsService newsService;
    // 뉴스 검색 리스트
    @PostMapping("/search")
    public ResponseEntity<Object> search(@RequestBody ReqNewsSearch reqNewsSearch){
        ResNewsSearch resNewsSearch = newsService.newsSearch(reqNewsSearch);
        return ResponseEntity.status(HttpStatus.OK).body(resNewsSearch);
    }

    @PostMapping("/count")
    public ResponseEntity<Object> count(@RequestBody ReqNewsSearch reqNewsSearch){
        List<CountPerPressDto> countList = newsService.newsCount(reqNewsSearch);
        return ResponseEntity.status(HttpStatus.OK).body(countList);
    }
}
