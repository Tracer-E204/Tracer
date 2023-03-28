package com.tracer.timeline.cluster.entity;

import com.tracer.timeline.timeline.entity.Timeline;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Cluster {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cluster_id")
    private Long clusterId;

    @Column(name = "date")
    private LocalDate date;

    @Column(name = "top_keyword")
    private String topKeyword;

    @OneToMany(mappedBy = "clusterNewsPK.cluster")
    private List<ClusterNews> clusterNews;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "timeline_cluster",
            joinColumns = {@JoinColumn(name = "cluster_id")},
            inverseJoinColumns ={@JoinColumn(name = "timeline_id")}
    )
    private List<Timeline> timelines;

}
