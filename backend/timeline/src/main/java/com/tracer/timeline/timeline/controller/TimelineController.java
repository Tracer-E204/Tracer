package com.tracer.timeline.timeline.controller;

import com.tracer.timeline.timeline.service.TimelineService;
import com.tracer.timeline.timeline.vo.ResTimeline;
import com.tracer.timeline.timeline.vo.ResTimelineClusterList;
import lombok.RequiredArgsConstructor;
import org.springframework.http.*;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/timeline")
public class TimelineController {

    private final TimelineService timelineService;

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

    @GetMapping("/{timelineId}")
    public ResponseEntity<Object> selectTimeline(@PathVariable Long timelineId){
        ResTimelineClusterList list = timelineService.selectTimeline(timelineId);
        return ResponseEntity.status(HttpStatus.OK).body(list);
    }

    @GetMapping("/news/{newsId}")
    public ResponseEntity<Object> newsTimeline(@PathVariable Long newsId){
        List<ResTimeline> list = timelineService.newsTimeline(newsId);
        return ResponseEntity.status(HttpStatus.OK).body(list);
    }

    @GetMapping("/search/{word}")
    public ResponseEntity<Object> timelineSearch(@PathVariable String word){
        List<ResTimeline> list = timelineService.timelineSearch(word);
        return ResponseEntity.status(HttpStatus.OK).body(list);
    }
}
