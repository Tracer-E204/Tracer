package com.tracer.news.news.entity;

import com.tracer.news.common.code.NewsType;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.web.bind.annotation.GetMapping;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@DynamicUpdate
@DynamicInsert
public class News {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "news_id")
    private Long newsId;

    @Column(name = "news_content")
    private String newsContent;

    @Column(name = "news_title")
    private String newTitle;

    @Column(name = "news_source")
    private String newsSource;

    @Column(name = "news_date")
    private LocalDate newsDate;

    @Column(name = "news_time")
    private LocalTime newsTime;

    @Column(name = "news_reporter")
    private String newsReporter;

    @Column(name = "news_type")
    private NewsType newsType;

    @Column(name = "news_press")
    private String newsPress;

    @Column(name = "news_thumbnail")
    private String newsThumbnail;
}
