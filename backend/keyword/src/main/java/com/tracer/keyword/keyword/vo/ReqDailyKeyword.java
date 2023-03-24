package com.tracer.keyword.keyword.vo;

import lombok.*;

import java.time.LocalDate;

@Data
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ReqDailyKeyword {
    private LocalDate startDate;
    private LocalDate endDate;
}
