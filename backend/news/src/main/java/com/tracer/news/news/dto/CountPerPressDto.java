package com.tracer.news.news.dto;

import lombok.*;

@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CountPerPressDto {
    private String newsPress;
    private Long count;
}
