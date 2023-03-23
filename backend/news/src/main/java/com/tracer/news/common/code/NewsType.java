package com.tracer.news.common.code;

import java.util.Arrays;

public enum NewsType {
    사회(0), 경제(1), 국제(2), IT(3), 문화(4);

    private int code;

    private NewsType(int code){
        this.code = code;
    }

    public int getCode(){
        return code;
    }

    public static NewsType of(int code){
        return Arrays.stream(values())
                .filter(value -> value.getCode()==code)
                .findFirst()
                .orElse(null);
    }
}
