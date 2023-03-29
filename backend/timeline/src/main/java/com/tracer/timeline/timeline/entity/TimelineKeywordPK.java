package com.tracer.timeline.timeline.entity;

import com.tracer.timeline.cluster.entity.Cluster;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Embeddable
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class TimelineKeywordPK implements Serializable {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "timeline_id")
    private Cluster Timeline;

    @Column(name = "keyword_id")
    private Long keyword_id;
}
