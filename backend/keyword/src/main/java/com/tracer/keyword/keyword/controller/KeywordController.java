package com.tracer.keyword.keyword.controller;

import com.tracer.keyword.keyword.service.DailyService;
import com.tracer.keyword.keyword.vo.ReqDailyKeyword;
import com.tracer.keyword.keyword.vo.ResDailyKeyword;
import com.tracer.keyword.keyword.vo.ResNewsKeyword;
import lombok.RequiredArgsConstructor;
import org.springframework.http.*;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/keyword")
public class KeywordController {

    private final DailyService dailyService;

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

    @GetMapping("/daily")
    public ResponseEntity<Object> dailyKeyword(@RequestParam("type") Integer type){
        List<ResDailyKeyword> list = dailyService.dailyKeyword(type);
        return ResponseEntity.status(HttpStatus.OK).body(list);
    }

    @PostMapping("/daily/select")
    public ResponseEntity<Object> dailySelectKeyword(ReqDailyKeyword reqDailyKeyword){
        List<ResDailyKeyword> list = dailyService.dailySelectKeyword(reqDailyKeyword);
        return ResponseEntity.status(HttpStatus.OK).body(list);
    }

    @GetMapping("/news")
    public ResponseEntity<Object> newsKeyword(){
        List<ResNewsKeyword> list = dailyService.newsKeywords();
        return ResponseEntity.status(HttpStatus.OK).body(list);
    }
}
