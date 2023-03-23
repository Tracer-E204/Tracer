package com.tracer.news.news.repository;

import com.tracer.news.news.dto.SearchPressDto;
import com.tracer.news.news.entity.News;
import com.tracer.news.news.mapping.NewsPressMapping;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface NewsRepository extends JpaRepository<News, Long> {
    /** no filter **/
    List<News> findByNewTitleLikeAndNewsContentNotLike(String word1, String word2, Sort sort);
    List<News> findByNewTitleNotLikeAndNewsContentLike(String word1, String word2, Sort sort);
    List<News> findByNewTitleLikeAndNewsContentLike(String word1, String word2, Sort sort);

    /** 신문사 필터 **/
    List<News> findByNewTitleLikeAndNewsContentNotLikeAndNewsPressIn(String word1, String word2, List<String> press, Sort sort);
    List<News> findByNewTitleNotLikeAndNewsContentLikeAndNewsPressIn(String word1, String word2, List<String> press, Sort sort);
    List<News> findByNewTitleLikeAndNewsContentLikeAndNewsPressIn(String word1, String word2, List<String> press, Sort sort);

    /** 날짜 필터 **/
    List<News> findByNewTitleLikeAndNewsContentNotLikeAndNewsDateBetween(String word1, String word2, LocalDate startTime, LocalDate endTime, Sort sort);
    List<News> findByNewTitleNotLikeAndNewsContentLikeAndNewsDateBetween(String word1, String word2, LocalDate startTime, LocalDate endTime, Sort sort);
    List<News> findByNewTitleLikeAndNewsContentLikeAndNewsDateBetween(String word1, String word2, LocalDate startTime, LocalDate endTime, Sort sort);

    List<News> findByNewTitleLikeAndNewsContentNotLikeAndNewsPressInAndNewsDateBetween(String word1, String word2, List<String> press, LocalDate startTime, LocalDate endTime, Sort sort);
    List<News> findByNewTitleNotLikeAndNewsContentLikeAndNewsPressInAndNewsDateBetween(String word1, String word2, List<String> press, LocalDate startTime, LocalDate endTime, Sort sort);
    List<News> findByNewTitleLikeAndNewsContentLikeAndNewsPressInAndNewsDateBetween(String word1, String word2, List<String> press, LocalDate startTime, LocalDate endTime, Sort sort);

    List<NewsPressMapping> findDistinctBy();
}
