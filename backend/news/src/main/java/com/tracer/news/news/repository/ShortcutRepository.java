package com.tracer.news.news.repository;

import com.tracer.news.news.entity.News;
import com.tracer.news.news.entity.Shortcut;
import com.tracer.news.news.mapping.NewsPressMapping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ShortcutRepository extends JpaRepository<Shortcut, Long> {
    Optional<Shortcut> findByNewsNewsId(Long newsId);

}
