package com.tracer.timeline.cluster.entity;

import lombok.*;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Table(name = "cluster_keyword")
public class ClusterKeyword {
    @EmbeddedId
    private ClusterKeywordPK clusterKeywordPK;
}
