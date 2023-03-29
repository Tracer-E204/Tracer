package com.tracer.timeline.timeline.entity;

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
@Table(name = "timeline_keyword")
public class TimelineKeyword {
    @EmbeddedId
    private TimelineKeywordPK clusterKeywordPK;
}
