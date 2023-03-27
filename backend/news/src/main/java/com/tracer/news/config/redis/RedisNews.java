package com.tracer.news.config.redis;

import com.tracer.news.common.code.NewsType;
import com.tracer.news.news.entity.News;
import lombok.*;
import org.springframework.data.redis.core.RedisHash;
import org.springframework.data.redis.core.TimeToLive;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

@Data
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RedisNews implements Serializable {
    @Id
    private Long newsId;

    private String newsContent;

    private String newTitle;

    private String newsSource;

    private LocalDate newsDate;

    private LocalTime newsTime;

    private String newsReporter;

    private NewsType newsType;

    private String newsPress;
    private String newsThumbnail;
    @TimeToLive(unit = TimeUnit.MICROSECONDS)
    Long expiration;

}
