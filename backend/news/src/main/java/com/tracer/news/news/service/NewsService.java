package com.tracer.news.news.service;

import com.tracer.news.config.redis.RedisNews;
import com.tracer.news.config.redis.RedisService;
import com.tracer.news.news.dto.CountPerPressDto;
import com.tracer.news.news.dto.NewsListDto;
import com.tracer.news.news.entity.News;
import com.tracer.news.news.entity.Shortcut;
import com.tracer.news.news.mapping.NewsPressMapping;
import com.tracer.news.news.repository.NewsRepository;
import com.tracer.news.news.repository.ShortcutRepository;
import com.tracer.news.news.vo.ReqNewsSearch;
import com.tracer.news.news.vo.ResNewsSearch;
import com.tracer.news.news.vo.ResShortcut;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class NewsService {

    private static final Logger LOGGER = LoggerFactory.getLogger(NewsService.class);
    private final NewsRepository newsRepository;
    private final ShortcutRepository shortcutRepository;
    private final RedisService redisService;

    @Transactional
    public ResNewsSearch newsSearch(ReqNewsSearch reqNewsSearch) {
        ResNewsSearch resNewsSearch = new ResNewsSearch();


//        PageRequest pageRequest =PageRequest.of(reqNewsSearch.getOffset(), reqNewsSearch.getLimit(), Sort.by("newsDate","newsTime").descending());
        Sort sort = Sort.by(
                Sort.Order.desc("newsDate"),
                Sort.Order.desc("newsTime")
        );
        List<News> newsTitleAndNewsContentPage = null;
        List<News> newsTitlePage = null;
        List<News> newsContentPage = null;

        if(!redisService.checkKeys(reqNewsSearch.getWord())){
            StringBuilder sb = new StringBuilder();
            sb.append("+");
            sb.append(reqNewsSearch.getWord());
            sb.append("*");
            newsTitleAndNewsContentPage =
                    newsRepository.findByNewTitleLikeAndNewsContentLike(sb.toString(), sb.toString());
            redisService.setValues(reqNewsSearch.getWord(), newsTitleAndNewsContentPage);
            LOGGER.info("Title, Content : {}", "Input Redis");
            newsTitlePage =
                    newsRepository.findByNewTitleLikeAndNewsContentNotLike(sb.toString(), sb.toString());
            redisService.setValues(reqNewsSearch.getWord(), newsTitlePage);
            LOGGER.info("Title : {}", "Input Redis");
            newsContentPage =
                    newsRepository.findByNewTitleNotLikeAndNewsContentLike(sb.toString(), sb.toString());
            redisService.setValues(reqNewsSearch.getWord(), newsContentPage);
            LOGGER.info("Content : {}", "Input Redis");
        }else{
            LOGGER.info("ALREADY IN REDIS : {}", "OK");
            newsTitleAndNewsContentPage = redisService.getValues(reqNewsSearch.getWord(), 0);
            newsTitlePage = redisService.getValues(reqNewsSearch.getWord(), 1);
            newsContentPage = redisService.getValues(reqNewsSearch.getWord(), 2);
        }
        if(reqNewsSearch.getType() == 1){
            newsContentPage.clear();
        }else if(reqNewsSearch.getType() == 2){
            newsTitlePage.clear();
        }

        if(reqNewsSearch.getNewsStartDt() != null && reqNewsSearch.getNewsEndDt() != null){
            newsTitleAndNewsContentPage = newsTitleAndNewsContentPage.stream()
                    .filter(news ->
                            news.getNewsDate().isAfter(reqNewsSearch.getNewsStartDt())
                                    && news.getNewsDate().isBefore(reqNewsSearch.getNewsEndDt()))
                    .sorted(Comparator.comparing(News::getNewsDate).reversed())
                    .sorted(Comparator.comparing(News::getNewsTime).reversed())
                    .collect(Collectors.toList());

            newsTitlePage = newsTitlePage.stream()
                    .filter(news ->
                            news.getNewsDate().isAfter(reqNewsSearch.getNewsStartDt())
                                    && news.getNewsDate().isBefore(reqNewsSearch.getNewsEndDt()))
                    .sorted(Comparator.comparing(News::getNewsDate).reversed())
                    .sorted(Comparator.comparing(News::getNewsTime).reversed())
                    .collect(Collectors.toList());

            newsContentPage = newsContentPage.stream()
                    .filter(news ->
                            news.getNewsDate().isAfter(reqNewsSearch.getNewsStartDt())
                                    && news.getNewsDate().isBefore(reqNewsSearch.getNewsEndDt()))
                    .sorted(Comparator.comparing(News::getNewsDate).reversed())
                    .sorted(Comparator.comparing(News::getNewsTime).reversed())
                    .collect(Collectors.toList());
        }

        if(reqNewsSearch.getNewsPressList()!=null){
            List<String> press = reqNewsSearch.getNewsPressList().stream().map(p -> p.getNewsPress()).collect(Collectors.toList());
            newsTitleAndNewsContentPage = newsTitleAndNewsContentPage.stream()
                    .filter(news -> press.contains(news.getNewsPress()))
                    .collect(Collectors.toList());
            newsTitlePage = newsTitlePage.stream()
                    .filter(news -> press.contains(news.getNewsPress()))
                    .collect(Collectors.toList());
            newsContentPage = newsContentPage.stream()
                    .filter(news -> press.contains(news.getNewsPress()))
                    .collect(Collectors.toList());
        }

        List<NewsListDto> newsList = new ArrayList<>();
        for (News n:
                newsTitleAndNewsContentPage) {
            newsList.add(
                    NewsListDto.builder()
                            .newsId(n.getNewsId())
                            .newsTitle(n.getNewTitle())
                            .newsContent(n.getNewsContent())
                            .newsSource(n.getNewsSource())
                            .newsReporter(n.getNewsReporter())
                            .newsPress(n.getNewsPress())
                            .newsThumbnail(n.getNewsThumbnail())
                            .newsDate(n.getNewsDate())
                            .newsTime(n.getNewsTime())
                            .newsType(n.getNewsType().name())
                            .newsTypeCode(n.getNewsType().getCode())
                            .build()
            );
        }

        for (News n:
                newsTitlePage) {
            newsList.add(
                    NewsListDto.builder()
                            .newsId(n.getNewsId())
                            .newsTitle(n.getNewTitle())
                            .newsContent(n.getNewsContent())
                            .newsSource(n.getNewsSource())
                            .newsReporter(n.getNewsReporter())
                            .newsPress(n.getNewsPress())
                            .newsThumbnail(n.getNewsThumbnail())
                            .newsDate(n.getNewsDate())
                            .newsTime(n.getNewsTime())
                            .newsType(n.getNewsType().name())
                            .newsTypeCode(n.getNewsType().getCode())
                            .build()
            );
        }

        for (News n:
                newsContentPage) {
            newsList.add(
                    NewsListDto.builder()
                            .newsId(n.getNewsId())
                            .newsTitle(n.getNewTitle())
                            .newsContent(n.getNewsContent())
                            .newsSource(n.getNewsSource())
                            .newsReporter(n.getNewsReporter())
                            .newsPress(n.getNewsPress())
                            .newsThumbnail(n.getNewsThumbnail())
                            .newsDate(n.getNewsDate())
                            .newsTime(n.getNewsTime())
                            .newsType(n.getNewsType().name())
                            .newsTypeCode(n.getNewsType().getCode())
                            .build()
            );
        }

//        List<RedisNews> rn = redisService.getValues(reqNewsSearch.getWord());
//        for (RedisNews r:
//             rn) {
//            LOGGER.info("id : {}",r.getNewsId());
//        }

        Long totalCount = newsList.stream().count();
        List<NewsListDto> list = newsList.stream()
                .limit(reqNewsSearch.getLimit())
                .skip(reqNewsSearch.getOffset() * reqNewsSearch.getLimit())
                .collect(Collectors.toList());


        Integer totalPage = 0;
        if(reqNewsSearch.getLimit() != null && reqNewsSearch.getLimit() != 0){
            totalPage = totalCount%reqNewsSearch.getLimit() == 0 ? (int)(totalCount/reqNewsSearch.getLimit()) : (int)(totalCount/ reqNewsSearch.getLimit()) + 1;
        }

        resNewsSearch.setList(list);
        resNewsSearch.setTotalPage(totalPage);
        resNewsSearch.setTotalCount(totalCount);

        return resNewsSearch;
    }

    @Transactional
    public List<CountPerPressDto> newsCount(ReqNewsSearch reqNewsSearch) {
        ResNewsSearch resNewsSearch = new ResNewsSearch();

        StringBuilder sb = new StringBuilder();

//        PageRequest pageRequest =PageRequest.of(reqNewsSearch.getOffset(), reqNewsSearch.getLimit(), Sort.by("newsDate","newsTime").descending());
        Sort sort = Sort.by(
                Sort.Order.desc("newsDate"),
                Sort.Order.desc("newsTime")
        );
        if(!redisService.checkKeys(reqNewsSearch.getWord())){
            LOGGER.info("Error : {}", "NO REDIS");
            return null;
        }

        List<News> newsTitleAndNewsContentPage = redisService.getValues(reqNewsSearch.getWord(), 0);
        List<News> newsTitlePage = redisService.getValues(reqNewsSearch.getWord(), 1);
        List<News> newsContentPage = redisService.getValues(reqNewsSearch.getWord(), 2);

        if(reqNewsSearch.getType() == 1){
            newsContentPage.clear();
        }else if(reqNewsSearch.getType() == 2){
            newsTitlePage.clear();
        }

        if(reqNewsSearch.getNewsStartDt() != null && reqNewsSearch.getNewsEndDt() != null){
            newsTitleAndNewsContentPage = newsTitleAndNewsContentPage.stream()
                    .filter(news ->
                            news.getNewsDate().isAfter(reqNewsSearch.getNewsStartDt())
                                    && news.getNewsDate().isBefore(reqNewsSearch.getNewsEndDt()))
                    .sorted(Comparator.comparing(News::getNewsDate).reversed())
                    .sorted(Comparator.comparing(News::getNewsTime).reversed())
                    .collect(Collectors.toList());

            newsTitlePage = newsTitlePage.stream()
                    .filter(news ->
                            news.getNewsDate().isAfter(reqNewsSearch.getNewsStartDt())
                                    && news.getNewsDate().isBefore(reqNewsSearch.getNewsEndDt()))
                    .sorted(Comparator.comparing(News::getNewsDate).reversed())
                    .sorted(Comparator.comparing(News::getNewsTime).reversed())
                    .collect(Collectors.toList());

            newsContentPage = newsContentPage.stream()
                    .filter(news ->
                            news.getNewsDate().isAfter(reqNewsSearch.getNewsStartDt())
                                    && news.getNewsDate().isBefore(reqNewsSearch.getNewsEndDt()))
                    .sorted(Comparator.comparing(News::getNewsDate).reversed())
                    .sorted(Comparator.comparing(News::getNewsTime).reversed())
                    .collect(Collectors.toList());
        }

        List<News> newsList = new ArrayList<>();
        newsList.addAll(newsTitleAndNewsContentPage);
        newsList.addAll(newsTitlePage);
        newsList.addAll(newsContentPage);

        List<NewsPressMapping> pressList = newsRepository.findDistinctBy();

        List<CountPerPressDto> countPerPressList = pressList.stream()
                .map(p -> new CountPerPressDto(p.getNewsPress(), newsList.stream().filter(n -> n.getNewsPress().equals(p.getNewsPress())).count()))
                .sorted(Comparator.comparing(CountPerPressDto::getCount).reversed())
                .collect(Collectors.toList());

        return countPerPressList;
    }

    @Transactional
    public ResShortcut shortcut(Long newsId){
        Shortcut shortcut = shortcutRepository.findByNewsNewsId(newsId);
        ResShortcut resShortcut = ResShortcut.builder()
                .shortcutId(shortcut.getShortcutId())
                .content1st(shortcut.getContent1st())
                .content2nd(shortcut.getContent2nd())
                .content3rd(shortcut.getContent3rd())
                .build();
        return resShortcut;
    }
}
