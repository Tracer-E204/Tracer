package com.tracer.keyword.keyword.service;

import com.tracer.keyword.keyword.entity.Daily;
import com.tracer.keyword.keyword.repository.DailyRepository;
import com.tracer.keyword.keyword.vo.ReqDailyKeyword;
import com.tracer.keyword.keyword.vo.ResDailyKeyword;
import com.tracer.keyword.keyword.vo.ResNewsKeyword;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
public class DailyService {
    private static final Logger LOGGER = LoggerFactory.getLogger(DailyService.class);
    private final DailyRepository dailyRepository;

    @Transactional
    public List<ResDailyKeyword> dailyKeyword(Integer type){
        List<ResDailyKeyword> list = new ArrayList<>();
        LocalDate date = LocalDate.now().minusDays(1);
        // 일주일전
        if(type == 1){
            date = date.minusWeeks(1);
        }else if(type == 2){ // 한달전
            date = date.minusMonths(1);
        }

        List<Daily> dailies = dailyRepository.findByDailyDateGreaterThanEqual(date);

        Map<String, Integer> map = new HashMap<>();
        dailies.stream()
                .forEach(d -> {
                    Integer count = map.get(d.getKeyword().getKeyword());
                   if(count == null){
                       map.put(d.getKeyword().getKeyword(), d.getCount());
                   }else{
                       map.put(d.getKeyword().getKeyword(), count + d.getCount());
                   }
                });

        map.forEach((keyword, count) -> {
            list.add(
                    ResDailyKeyword.builder()
                            .keyword(keyword)
                            .count(count)
                            .build()
            );
        });

        return list;
    }

    @Transactional
    public List<ResDailyKeyword> dailySelectKeyword(ReqDailyKeyword reqDailyKeyword){
        List<ResDailyKeyword> list = new ArrayList<>();
        List<Daily> dailies = dailyRepository.findByDailyDateBetween(reqDailyKeyword.getStartDate(), reqDailyKeyword.getEndDate());

        Map<String, Integer> map = new HashMap<>();
        dailies.stream()
                .forEach(d -> {
                    Integer count = map.get(d.getKeyword().getKeyword());
                    if(count == null){
                        map.put(d.getKeyword().getKeyword(), d.getCount());
                    }else{
                        map.put(d.getKeyword().getKeyword(), count + d.getCount());
                    }
                });

        map.forEach((keyword, count) -> {
            list.add(
                    ResDailyKeyword.builder()
                            .keyword(keyword)
                            .count(count)
                            .build()
            );
        });

        return list;
    }

    @Transactional
    public List<ResNewsKeyword> newsKeywords(){
        List<Daily> dailies = dailyRepository.findTop12ByDailyDateOrderByCountDesc(LocalDate.now().minusDays(1));
        List<ResNewsKeyword> list = dailies.stream().map(d->new ResNewsKeyword(d.getKeyword().getKeywordId())).collect(Collectors.toList());
        return list;
    }
}
