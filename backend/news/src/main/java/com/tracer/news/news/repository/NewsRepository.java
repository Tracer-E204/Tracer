package com.tracer.news.news.repository;

import com.tracer.news.news.entity.News;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;

@Repository
public interface NewsRepository extends JpaRepository<News, Long> {
    /** no filter **/
    Page<News> findByNewTitleLikeAndNewsContentNotLike(String word1, String word2, PageRequest pageRequest);
    Page<News> findByNewTitleNotLikeAndNewsContentLike(String word1, String word2, PageRequest pageRequest);
    Page<News> findByNewTitleLikeAndNewsContentLike(String word1, String word2, PageRequest pageRequest);

    /** 신문사 필터 **/
    Page<News> findByNewTitleLikeAndNewsContentNotLikeAndNewsPressEquals(String word1, String word2, String press,PageRequest pageRequest);
    Page<News> findByNewTitleNotLikeAndNewsContentLikeAndNewsPressEquals(String word1, String word2, String press, PageRequest pageRequest);
    Page<News> findByNewTitleLikeAndNewsContentLikeAndNewsPressEquals(String word1, String word2, String press, PageRequest pageRequest);

    /** 날짜 필터 **/
    Page<News> findByNewTitleLikeAndNewsContentNotLikeAndNewsDateBetween(String word1, String word2, LocalDate startTime, LocalDate endTime, PageRequest pageRequest);
    Page<News> findByNewTitleNotLikeAndNewsContentLikeAndNewsDateBetween(String word1, String word2, LocalDate startTime, LocalDate endTime, PageRequest pageRequest);
    Page<News> findByNewTitleLikeAndNewsContentLikeAndNewsDateBetween(String word1, String word2, LocalDate startTime, LocalDate endTime, PageRequest pageRequest);

    Page<News> findByNewTitleLikeAndNewsContentNotLikeAndNewsPressEqualsAndNewsDateBetween(String word1, String word2, String press, LocalDate startTime, LocalDate endTime, PageRequest pageRequest);
    Page<News> findByNewTitleNotLikeAndNewsContentLikeAndNewsPressEqualsAndNewsDateBetween(String word1, String word2, String press, LocalDate startTime, LocalDate endTime, PageRequest pageRequest);
    Page<News> findByNewTitleLikeAndNewsContentLikeAndNewsPressEqualsAndNewsDateBetween(String word1, String word2, String press, LocalDate startTime, LocalDate endTime, PageRequest pageRequest);
}
