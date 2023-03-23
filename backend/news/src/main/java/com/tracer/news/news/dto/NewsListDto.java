package com.tracer.news.news.dto;

import lombok.*;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class NewsListDto {
    private Long newsId;
    private String newsTitle;
    private String newsContent;
    private String newsSource;
    private String newsReporter;
    private String newsPress;
    private String newsThumbnail;
    private LocalDate newsDate;
    private LocalTime newsTime;
    private String newsType;
    private Integer newsTypeCode;
}
