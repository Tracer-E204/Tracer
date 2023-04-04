package com.tracer.news.config.redis;

import com.tracer.news.news.entity.News;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.ListOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.stereotype.Service;

import javax.inject.Qualifier;
import java.time.Duration;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RedisService {
    private final RedisTemplate redisTemplate;

    private final Long expiration = 1000L*60L*20L;

    // 키-벨류 설정
    public void setValues(String word, List<News> news){
        ListOperations<String, RedisWord> values = redisTemplate.opsForList();

        RedisWord redisWord = new RedisWord();
        redisWord.setWord(word);
        redisWord.setNews(news);
//        values.set(name, age);
//        for (News n:
//             news) {
//            RedisNews redisNews = RedisNews.builder()
//                    .newsId(n.getNewsId())
//                    .newsSource(n.getNewsSource())
//                    .expiration(expiration)
//                    .newsContent(n.getNewsContent())
//                    .newsReporter(n.getNewsReporter())
//                    .newsThumbnail(n.getNewsThumbnail())
//                    .newsTime(n.getNewsTime())
//                    .newsType(n.getNewsType())
//                    .newsDate(n.getNewsDate())
//                    .newsPress(n.getNewsPress())
//                    .newTitle(n.getNewTitle())
//                    .build();
//            values.rightPush(type, redisNews); // 넣은지 확인
//        }
        values.rightPush(word, redisWord);
        redisTemplate.expire(word, Duration.ofMillis(expiration));
    }

    // 키값으로 벨류 가져오기
    public List<News> getValues(String word, Integer type){
        ListOperations<String, RedisWord> values = redisTemplate.opsForList();
        if(values.index(word, type) == null) return null;
        return values.index(word, type).getNews();
    }

    // 키 체크
    public boolean checkKeys(String word){
        return redisTemplate.hasKey(word);
    }

    // 키-벨류 삭제
    public void delValues(String word) {
        redisTemplate.delete(word);
    }

//    public List<News> toNews(List<RedisNews> redisNews){
//        List<News> news = redisNews.stream()
//                .map(n -> News.builder()
//                        .newsId(n.getNewsId())
//                        .newsSource(n.getNewsSource())
//                        .newsContent(n.getNewsContent())
//                        .newsReporter(n.getNewsReporter())
//                        .newsThumbnail(n.getNewsThumbnail())
//                        .newsTime(n.getNewsTime())
//                        .newsType(n.getNewsType())
//                        .newsDate(n.getNewsDate())
//                        .newsPress(n.getNewsPress())
//                        .newTitle(n.getNewTitle())
//                        .build()).collect(Collectors.toList());
//        return news;
//    }
}

