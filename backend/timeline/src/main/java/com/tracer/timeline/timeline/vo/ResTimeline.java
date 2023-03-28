package com.tracer.timeline.timeline.vo;

import com.tracer.timeline.timeline.entity.Timeline;
import lombok.*;

@Data
@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class ResTimeline {
    private Long timelineId;
    private String topKeyword;

    public ResTimeline(Timeline timeline){
        this.timelineId = timeline.getTimelineId();
        this.topKeyword = timeline.getTopKeyword();
    }
}
