package com.tracer.news.news.service;

import com.tracer.news.news.dto.CountPerPressDto;
import com.tracer.news.news.dto.NewsListDto;
import com.tracer.news.news.entity.News;
import com.tracer.news.news.mapping.NewsPressMapping;
import com.tracer.news.news.repository.NewsRepository;
import com.tracer.news.news.vo.ReqNewsSearch;
import com.tracer.news.news.vo.ResNewsSearch;
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

    @Transactional
    public ResNewsSearch newsSearch(ReqNewsSearch reqNewsSearch) {
        ResNewsSearch resNewsSearch = new ResNewsSearch();

        StringBuilder sb = new StringBuilder();

//        PageRequest pageRequest =PageRequest.of(reqNewsSearch.getOffset(), reqNewsSearch.getLimit(), Sort.by("newsDate","newsTime").descending());
        Sort sort = Sort.by(
                Sort.Order.desc("newsDate"),
                Sort.Order.desc("newsTime")
        );
        List<News> newsTitleAndNewsContentPage = null;
        List<News> newsTitlePage = null;
        List<News> newsContentPage = null;

        if(reqNewsSearch.getNewsStartDt() == null && reqNewsSearch.getNewsEndDt() == null){
            sb.append("+");
            sb.append(reqNewsSearch.getWord());
            sb.append("*");
            newsTitleAndNewsContentPage =
                    newsRepository.findByNewTitleLikeAndNewsContentLike(sb.toString(), sb.toString());
            newsTitlePage =
                    newsRepository.findByNewTitleLikeAndNewsContentNotLike(sb.toString(), sb.toString());
            newsContentPage =
                    newsRepository.findByNewTitleNotLikeAndNewsContentLike(sb.toString(), sb.toString());
        }else if(reqNewsSearch.getNewsStartDt() != null && reqNewsSearch.getNewsEndDt() != null){
            sb.append("%");
            sb.append(reqNewsSearch.getWord());
            sb.append("%");
            newsTitleAndNewsContentPage =
                    newsRepository.findByNewTitleLikeAndNewsContentLikeAndNewsDateBetween(sb.toString(), sb.toString(), reqNewsSearch.getNewsStartDt(), reqNewsSearch.getNewsEndDt(), sort);
            newsTitlePage =
                    newsRepository.findByNewTitleLikeAndNewsContentNotLikeAndNewsDateBetween(sb.toString(), sb.toString(), reqNewsSearch.getNewsStartDt(), reqNewsSearch.getNewsEndDt(), sort);
            newsContentPage =
                    newsRepository.findByNewTitleNotLikeAndNewsContentLikeAndNewsDateBetween(sb.toString(), sb.toString(), reqNewsSearch.getNewsStartDt(), reqNewsSearch.getNewsEndDt(), sort);
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

        List<NewsListDto> list = null;
        Long totalCount = 0L;
        if(reqNewsSearch.getNewsPressList() != null){
            List<String> press = reqNewsSearch.getNewsPressList().stream().map(p -> p.getNewsPress()).collect(Collectors.toList());
            totalCount = newsList.stream().filter(n -> press.contains(n.getNewsPress())).count();
            list = newsList.stream()
                    .filter(n -> press.contains(n.getNewsPress()))
                    .limit(reqNewsSearch.getLimit())
                    .skip(reqNewsSearch.getOffset() * reqNewsSearch.getLimit())
                    .collect(Collectors.toList());
        }else{
            totalCount = newsList.stream().count();
            list = newsList.stream()
                    .limit(reqNewsSearch.getLimit())
                    .skip(reqNewsSearch.getOffset() * reqNewsSearch.getLimit())
                    .collect(Collectors.toList());
        }


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
        List<News> newsTitleAndNewsContentPage = null;
        List<News> newsTitlePage = null;
        List<News> newsContentPage = null;

        if(reqNewsSearch.getNewsStartDt() == null && reqNewsSearch.getNewsEndDt() == null){
            sb.append("+");
            sb.append(reqNewsSearch.getWord());
            sb.append("*");
            newsTitleAndNewsContentPage =
                    newsRepository.findByNewTitleLikeAndNewsContentLike(sb.toString(), sb.toString());
            newsTitlePage =
                    newsRepository.findByNewTitleLikeAndNewsContentNotLike(sb.toString(), sb.toString());
            newsContentPage =
                    newsRepository.findByNewTitleNotLikeAndNewsContentLike(sb.toString(), sb.toString());
        }else if(reqNewsSearch.getNewsStartDt() != null && reqNewsSearch.getNewsEndDt() != null){
            sb.append("%");
            sb.append(reqNewsSearch.getWord());
            sb.append("%");
            newsTitleAndNewsContentPage =
                    newsRepository.findByNewTitleLikeAndNewsContentLikeAndNewsDateBetween(sb.toString(), sb.toString(), reqNewsSearch.getNewsStartDt(), reqNewsSearch.getNewsEndDt(), sort);
            newsTitlePage =
                    newsRepository.findByNewTitleLikeAndNewsContentNotLikeAndNewsDateBetween(sb.toString(), sb.toString(), reqNewsSearch.getNewsStartDt(), reqNewsSearch.getNewsEndDt(), sort);
            newsContentPage =
                    newsRepository.findByNewTitleNotLikeAndNewsContentLikeAndNewsDateBetween(sb.toString(), sb.toString(), reqNewsSearch.getNewsStartDt(), reqNewsSearch.getNewsEndDt(), sort);
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
        List<NewsPressMapping> pressList = newsRepository.findDistinctBy();

        List<CountPerPressDto> countPerPressList = pressList.stream()
                .map(p -> new CountPerPressDto(p.getNewsPress(), newsList.stream().filter(n -> n.getNewsPress().equals(p.getNewsPress())).count()))
                .sorted(Comparator.comparing(CountPerPressDto::getCount).reversed())
                .collect(Collectors.toList());

        return countPerPressList;
    }
}
