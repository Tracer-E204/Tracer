package com.tracer.news.news.controller;

import com.tracer.news.news.dto.CountPerPressDto;
import com.tracer.news.news.service.NewsService;
import com.tracer.news.news.vo.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.*;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/news")
public class NewsController {

    private final NewsService newsService;
    // 뉴스 검색 리스트

    @GetMapping("/shutdown")
    public ResponseEntity<String> actuator(HttpServletRequest request) {
        String url = request.getServerName() + ":" + request.getServerPort();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        HttpEntity<MultiValueMap<String, String>> req = new HttpEntity<>(headers);
        RestTemplate rt = new RestTemplate();
        ResponseEntity<String> res = rt.exchange("http://"+ url + "/actuator/shutdown", HttpMethod.POST,req,String.class);
//        ResponseEntity<String> res = rt.exchange("http://"+ url + "/actuator", HttpMethod.GET,null,String.class);
        return res;
    }

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

    @GetMapping("/shortcut/{newsId}")
    public ResponseEntity<Object> shortcut(@PathVariable Long newsId){
        ResShortcut resShortcut = newsService.shortcut(newsId);
        return ResponseEntity.status(HttpStatus.OK).body(resShortcut);
    }

    @GetMapping("/daily")
    public ResponseEntity<Object> dailyNews(){
        List<ResNews> list = newsService.dailyNews();
        return ResponseEntity.status(HttpStatus.OK).body(list);
    }

    @PostMapping("/cluster")
    public ResponseEntity<Object> clusterNews(@RequestBody ReqCluster reqCluster){
        ResNewsSearch list = newsService.clusterNews(reqCluster);
        return ResponseEntity.status(HttpStatus.OK).body(list);
    }

}
