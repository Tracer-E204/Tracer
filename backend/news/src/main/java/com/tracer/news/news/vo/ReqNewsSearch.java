package com.tracer.news.news.vo;

import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

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
    private String newsPress;
    @DateTimeFormat
    private LocalDate newsStartDt;
    private LocalDate newsEndDt;
}
