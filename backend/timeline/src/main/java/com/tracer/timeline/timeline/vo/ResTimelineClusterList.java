package com.tracer.timeline.timeline.vo;

import com.tracer.timeline.cluster.dto.ClusterDto;
import lombok.*;

import java.util.List;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ResTimelineClusterList {
    private Long totalCount;
    private String timelineKeyword;
    private List<ClusterDto> clusters;

}
