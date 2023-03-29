package com.tracer.timeline.timeline.service;

import com.tracer.timeline.cluster.entity.ClusterNews;
import com.tracer.timeline.cluster.repository.ClusterNewsRepository;
import com.tracer.timeline.cluster.service.ClusterService;
import com.tracer.timeline.timeline.entity.Timeline;
import com.tracer.timeline.timeline.repository.TimelineRepository;
import com.tracer.timeline.timeline.vo.ResTimeline;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TimelineService {

    private static final Logger LOGGER = LoggerFactory.getLogger(ClusterService.class);
    private final ClusterNewsRepository clusterNewsRepository;
    private final TimelineRepository timelineRepository;

    @Transactional
    public List<ResTimeline> newsTimeline(Long newsId){
        List<ClusterNews> clusterNews = clusterNewsRepository.findByClusterNewsPKNewsId(newsId);
        List<ResTimeline> resTimelines = new ArrayList<>();
        clusterNews.stream()
                .forEach( c -> {
                    resTimelines.addAll(
                            c.getClusterNewsPK().getCluster().getTimelines().stream()
                            .map(t -> ResTimeline.builder()
                                    .timelineId(t.getTimelineId())
                                    .topKeyword(t.getTopKeyword())
                                    .build()).collect(Collectors.toList())
                    );
                });
        List<ResTimeline> list = resTimelines.stream().distinct().collect(Collectors.toList());

        return list;
    }

    @Transactional
    public List<ResTimeline> timelineSearch(String word){
        StringBuilder sb = new StringBuilder();
        sb.append("+").append(word).append("*");
        List<Timeline> timelines = timelineRepository.findByWord(sb.toString());
        List<ResTimeline> list = timelines.stream()
                .map(ResTimeline::new).collect(Collectors.toList());

        return list;
    }
}
