package com.tracer.news.news.repository;

import com.tracer.news.news.entity.NewsKeyword;
import com.tracer.news.news.entity.NewsKeywordPK;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface NewsKeywordRepository extends JpaRepository<NewsKeyword, NewsKeywordPK> {

    List<NewsKeyword> findByNewsKeywordPKKeywordId(Long keywordId);
    Optional<NewsKeyword> findTop1ByNewsKeywordPKKeywordId(Long keywordId);
}
