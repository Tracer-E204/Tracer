package com.tracer.timeline.timeline.repository;

import com.tracer.timeline.timeline.entity.Timeline;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TimelineRepository extends JpaRepository<Timeline, Long> {

    @Query(nativeQuery = true,
    value = "select * from timeline" +
            " where match(top_keyword) against( ? in boolean mode)")
    List<Timeline> findByWord(String word);
}
