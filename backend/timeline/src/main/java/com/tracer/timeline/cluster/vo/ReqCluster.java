package com.tracer.timeline.cluster.vo;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
@EqualsAndHashCode
public class ReqCluster {
    private Integer offset;
    private Integer limit;
    private Long clusterId;

}
