package com.tracer.timeline.cluster.service;

import com.tracer.timeline.cluster.entity.ClusterNews;
import com.tracer.timeline.cluster.repository.ClusterNewsRepository;
import com.tracer.timeline.cluster.vo.ResClusterNews;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
public class ClusterService {
    private static final Logger LOGGER = LoggerFactory.getLogger(ClusterService.class);
    private final ClusterNewsRepository clusterNewsRepository;

    @Transactional
    public List<ResClusterNews> clusterNews(Long clusterId){
        List<ClusterNews> clusterNews = clusterNewsRepository.findByClusterNewsPKClusterId(clusterId);
        List<ResClusterNews> list = clusterNews.stream()
                .map(ResClusterNews::new).collect(Collectors.toList());
        return list;
    }
}
