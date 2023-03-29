package com.tracer.timeline.timeline.controller;

import com.tracer.timeline.timeline.service.TimelineService;
import com.tracer.timeline.timeline.vo.ResTimeline;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/timeline")
public class TimelineController {

    private final TimelineService timelineService;

    @GetMapping("/{newsId}")
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
