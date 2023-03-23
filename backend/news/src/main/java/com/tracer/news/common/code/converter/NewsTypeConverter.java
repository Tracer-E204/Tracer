package com.tracer.news.common.code.converter;

import com.tracer.news.common.code.NewsType;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import java.util.stream.Stream;

@Converter(autoApply = true)
public class NewsTypeConverter implements AttributeConverter<NewsType, Integer> {

    @Override
    public Integer convertToDatabaseColumn(NewsType newsType) {
        if(newsType == null){
            return null;
        }
        return newsType.getCode();
    }

    @Override
    public NewsType convertToEntityAttribute(Integer code) {
        if(code == null){
            return null;
        }
        return Stream.of(NewsType.values())
                .filter(c -> c.getCode()==code)
                .findFirst()
                .orElseThrow(IllegalArgumentException::new);
    }
}
