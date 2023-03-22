package com.tracer.news.news.service;

import com.tracer.news.news.dto.NewsList;
import com.tracer.news.news.entity.News;
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
import java.util.List;

@Service
@RequiredArgsConstructor
public class NewsService {

    private static final Logger LOGGER = LoggerFactory.getLogger(NewsService.class);
    private final NewsRepository newsRepository;

    @Transactional
    public ResNewsSearch newsSearch(ReqNewsSearch reqNewsSearch) {
        ResNewsSearch resNewsSearch = new ResNewsSearch();

        StringBuilder sb = new StringBuilder();
        sb.append("%");
        sb.append(reqNewsSearch.getWord());
        sb.append("%");
        PageRequest pageRequest =PageRequest.of(reqNewsSearch.getOffset(), reqNewsSearch.getLimit(), Sort.by("newsDate","newsTime").descending());

        Page<News> newsTitleAndNewsContentPage = null;
        Page<News> newsTitlePage = null;
        Page<News> newsContentPage = null;

        if(reqNewsSearch.getNewsPress() == null && reqNewsSearch.getNewsStartDt() == null && reqNewsSearch.getNewsEndDt() == null){
            newsTitleAndNewsContentPage =
                    newsRepository.findByNewTitleLikeAndNewsContentLike(sb.toString(), sb.toString(), pageRequest);
            newsTitlePage =
                    newsRepository.findByNewTitleLikeAndNewsContentNotLike(sb.toString(), sb.toString(), pageRequest);
            newsContentPage =
                    newsRepository.findByNewTitleNotLikeAndNewsContentLike(sb.toString(), sb.toString(), pageRequest);
        }else if(reqNewsSearch.getNewsPress() != null && reqNewsSearch.getNewsStartDt() == null && reqNewsSearch.getNewsEndDt() == null){
            newsTitleAndNewsContentPage =
                    newsRepository.findByNewTitleLikeAndNewsContentLikeAndNewsPressEquals(sb.toString(), sb.toString(), reqNewsSearch.getNewsPress(), pageRequest);
            newsTitlePage =
                    newsRepository.findByNewTitleLikeAndNewsContentLikeAndNewsPressEquals(sb.toString(), sb.toString(), reqNewsSearch.getNewsPress(), pageRequest);
            newsContentPage =
                    newsRepository.findByNewTitleLikeAndNewsContentNotLikeAndNewsPressEquals(sb.toString(), sb.toString(), reqNewsSearch.getNewsPress(), pageRequest);
        }else if(reqNewsSearch.getNewsPress() == null && reqNewsSearch.getNewsStartDt() != null && reqNewsSearch.getNewsEndDt() != null){
            newsTitleAndNewsContentPage =
                    newsRepository.findByNewTitleLikeAndNewsContentLikeAndNewsDateBetween(sb.toString(), sb.toString(), reqNewsSearch.getNewsStartDt(), reqNewsSearch.getNewsEndDt(), pageRequest);
            newsTitlePage =
                    newsRepository.findByNewTitleLikeAndNewsContentNotLikeAndNewsDateBetween(sb.toString(), sb.toString(), reqNewsSearch.getNewsStartDt(), reqNewsSearch.getNewsEndDt(), pageRequest);
            newsContentPage =
                    newsRepository.findByNewTitleNotLikeAndNewsContentLikeAndNewsDateBetween(sb.toString(), sb.toString(), reqNewsSearch.getNewsStartDt(), reqNewsSearch.getNewsEndDt(), pageRequest);
        }else if(reqNewsSearch.getNewsPress() != null && reqNewsSearch.getNewsStartDt() != null && reqNewsSearch.getNewsEndDt() != null){
            newsTitleAndNewsContentPage =
                    newsRepository.findByNewTitleLikeAndNewsContentLikeAndNewsPressEqualsAndNewsDateBetween(sb.toString(), sb.toString(), reqNewsSearch.getNewsPress(), reqNewsSearch.getNewsStartDt(), reqNewsSearch.getNewsEndDt(), pageRequest);
            newsTitlePage =
                    newsRepository.findByNewTitleLikeAndNewsContentNotLikeAndNewsPressEqualsAndNewsDateBetween(sb.toString(), sb.toString(), reqNewsSearch.getNewsPress(), reqNewsSearch.getNewsStartDt(), reqNewsSearch.getNewsEndDt(), pageRequest);
            newsContentPage =
                    newsRepository.findByNewTitleNotLikeAndNewsContentLikeAndNewsPressEqualsAndNewsDateBetween(sb.toString(), sb.toString(), reqNewsSearch.getNewsPress(), reqNewsSearch.getNewsStartDt(), reqNewsSearch.getNewsEndDt(), pageRequest);
        }




        List<NewsList> newsList = new ArrayList<>();
        for (News n:
                newsTitleAndNewsContentPage.toList()) {
            newsList.add(
                    NewsList.builder()
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
                newsTitlePage.toList()) {
            newsList.add(
                    NewsList.builder()
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
                newsContentPage.toList()) {
            newsList.add(
                    NewsList.builder()
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
        Long totalCount = newsTitleAndNewsContentPage.getTotalElements() + newsTitlePage.getTotalElements() + newsContentPage.getTotalElements();
        Integer totalPage = 0;
        if(reqNewsSearch.getLimit() != null && reqNewsSearch.getLimit() != 0){
            totalPage= totalCount%reqNewsSearch.getLimit() == 0 ? (int)(totalCount/reqNewsSearch.getLimit()) : (int)(totalCount/ reqNewsSearch.getLimit()) + 1;
        }

        resNewsSearch.setList(newsList);
        resNewsSearch.setTotalPage(totalPage);
        resNewsSearch.setTotalCount(totalCount);

        return resNewsSearch;
    }
}
