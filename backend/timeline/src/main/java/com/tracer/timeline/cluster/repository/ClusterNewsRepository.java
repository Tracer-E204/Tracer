package com.tracer.timeline.cluster.repository;

import com.tracer.timeline.cluster.entity.ClusterNews;
import com.tracer.timeline.cluster.entity.ClusterNewsPK;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ClusterNewsRepository extends JpaRepository<ClusterNews, ClusterNewsPK> {
    List<ClusterNews> findByClusterNewsPKClusterId(Long clusterId);
}
