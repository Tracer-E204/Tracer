package com.tracer.news.news.vo;

import com.tracer.news.news.dto.SearchPressDto;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.List;

@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ReqNewsSearch {
    private String word;
    private Integer offset;
    private Integer limit;
    private List<SearchPressDto> newsPressList;
    private LocalDate newsStartDt;
    private LocalDate newsEndDt;
}
