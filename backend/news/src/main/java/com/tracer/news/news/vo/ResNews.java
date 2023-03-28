package com.tracer.news.news.vo;

import lombok.*;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ResNews {
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
