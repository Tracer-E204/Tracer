package com.tracer.keyword.keyword.vo;

import lombok.*;

@Data
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ResDailyKeyword {
    private String keyword;
    private Integer count;
}
