package com.tracer.news.news;

import com.tracer.news.news.mapping.NewsPressMapping;
import com.tracer.news.news.repository.NewsRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
public class NewsTests {
    @Autowired
    NewsRepository newsRepository;

    @Test
    void pressTest(){
        List<NewsPressMapping> list = newsRepository.findDistinctBy();
        list.stream().forEach(p -> System.out.println(p.getNewsPress()));
    }
}
