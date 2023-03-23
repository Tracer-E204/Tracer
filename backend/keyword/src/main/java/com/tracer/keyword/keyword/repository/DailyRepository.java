package com.tracer.keyword.keyword.repository;

import com.tracer.keyword.keyword.entity.Daily;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface DailyRepository extends JpaRepository<Daily, Long> {
    List<Daily>findByDailyDateGreaterThanEqual(LocalDate dailyDate);
}
