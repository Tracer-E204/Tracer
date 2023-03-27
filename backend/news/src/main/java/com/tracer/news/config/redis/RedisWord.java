package com.tracer.news.config.redis;

import com.tracer.news.news.entity.News;
import lombok.*;

import javax.persistence.Id;
import java.io.Serializable;
import java.util.List;

@Data
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RedisWord implements Serializable {
    @Id
    private String word;
    private List<News> news;
}
