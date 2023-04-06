package com.tracer.timeline.cluster.service;

import com.tracer.timeline.cluster.entity.ClusterNews;
import com.tracer.timeline.cluster.repository.ClusterNewsRepository;
import com.tracer.timeline.cluster.vo.ReqCluster;
import com.tracer.timeline.cluster.vo.ResClusterNews;
import com.tracer.timeline.cluster.vo.ResClusterPage;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
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
    public ResClusterPage clusterNews(ReqCluster reqCluster){
        PageRequest pageRequest = PageRequest.of(reqCluster.getOffset(), reqCluster.getLimit());
        Page<ClusterNews> clusterNews = clusterNewsRepository.findByClusterNewsPKClusterClusterId(reqCluster.getClusterId(), pageRequest);
        List<ResClusterNews> list = clusterNews.toList().stream()
                .map(ResClusterNews::new).collect(Collectors.toList());

        ResClusterPage resClusterPage = new ResClusterPage();
        resClusterPage.setTotalPage(clusterNews.getTotalPages());
        resClusterPage.setTotalCount(clusterNews.getTotalElements());
        resClusterPage.setList(list);

        return resClusterPage;
    }
}
