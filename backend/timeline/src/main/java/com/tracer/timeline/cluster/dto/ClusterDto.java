package com.tracer.timeline.cluster.dto;

import com.tracer.timeline.cluster.entity.Cluster;
import lombok.*;

import java.time.LocalDate;

@Data
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ClusterDto {
    private Long clusterId;
    private String clusterKeyword;
    private LocalDate date;
    private Long newsCount;

    public ClusterDto(Cluster cluster){
        this.clusterId = cluster.getClusterId();
        this.clusterKeyword = cluster.getTopKeyword();
        this.date = cluster.getDate();
        this.newsCount = cluster.getClusterNews().stream().count();
    }
}
