package com.tracer.timeline.cluster.vo;

import com.tracer.timeline.cluster.entity.ClusterNews;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
@EqualsAndHashCode
public class ResClusterNews {
    private Long newsId;

    public ResClusterNews(ClusterNews clusterNews){
        this.newsId = clusterNews.getClusterNewsPK().getNewsId();
    }
}
