package com.tracer.news.news.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Data
@Getter
@Setter
@EqualsAndHashCode
public class ClusterPageDto {
    private Long totalCount;
    private Integer totalPage;
    private List<NewsIdDto> list;
}
