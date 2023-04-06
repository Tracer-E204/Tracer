package com.tracer.timeline.cluster.vo;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Data
@Getter
@Setter
@EqualsAndHashCode
public class ResClusterPage {
    private Long totalCount;
    private Integer totalPage;
    private List<ResClusterNews> list;
}
