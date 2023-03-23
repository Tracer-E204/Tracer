package com.tracer.news.news.vo;

import com.tracer.news.news.dto.CountPerPressDto;
import com.tracer.news.news.dto.NewsListDto;
import lombok.*;

import java.util.List;

@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ResNewsSearch {
    private Long totalCount;
    private Integer totalPage;

    private List<NewsListDto> list;
}
