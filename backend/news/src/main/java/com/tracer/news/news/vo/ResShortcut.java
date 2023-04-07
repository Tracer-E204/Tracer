package com.tracer.news.news.vo;

import lombok.*;

@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ResShortcut {
    private Long shortcutId;
    private String content1st;
    private String content2nd;
    private String content3rd;

}
