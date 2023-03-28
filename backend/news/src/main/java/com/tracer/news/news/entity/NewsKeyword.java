package com.tracer.news.news.entity;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Entity
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@DynamicUpdate
@DynamicInsert
@Table(name = "news_keyword")
public class NewsKeyword {

    @EmbeddedId
    private NewsKeywordPK newsKeywordPK;
}
