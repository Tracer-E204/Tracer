package com.tracer.timeline.timeline.entity;

import com.tracer.timeline.cluster.entity.Cluster;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Timeline {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "timeline_id")
    private Long timelineId;

    @Column(name = "top_keyword")
    private String topKeyword;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "timeline_cluster",
            joinColumns = {@JoinColumn(name = "timeline_id")},
            inverseJoinColumns ={@JoinColumn(name = "cluster_id")}
    )
    private List<Cluster> clusters;
}
