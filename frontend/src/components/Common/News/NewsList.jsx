import React from 'react';
import NewsItem from './NewsItem';
import styles from './NewsList.module.scss';

// 카테고리를 props로 받아옴
export default function NewsList() {
  const articles = [
    {
      page: 43,
      title: 'USA AUSTRALIA UK SUBMARINE DEAL',
      html: '<div class="article_view" data-tiara-action-name="본문이미지확대_클릭" data-tiara-layer="article_body" data-translation-body="true">\n<section dmcf-sid="3Ge764lfFm">\n<p dmcf-pid="0k7vF1o53r" dmcf-ptype="general">epa10521524 Sailors stand guard on the Arleigh Burke-class destroyer USS Sterett (DDG-104) and the Los Angeles-class submarine USS Charlotte (SSN-766) as US President Joe Biden, United Kingdom Prime Minister Rishi Sunak and Australian Prime Minister Anthony Albanese hold a press conference at the Naval Base Point Miramar in San Diego, California, USA, 13 March 2023. The three leaders announced that Australia will purchase nuclear-powered attack submarines from the U.S. EPA/ETIENNE LAURENT</p>\n<figure class="figure_frm origin_fig" dmcf-pid="pAUl1ZnXpw" dmcf-ptype="figure">\n<p class="link_figure"><img class="thumb_g_article" data-org-src="https://t1.daumcdn.net/news/202303/14/yonhap/20230314083254912biot.jpg" data-org-width="500" dmcf-mid="FrNfidXezs" dmcf-mtype="image" height="auto" src="https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/14/yonhap/20230314083254912biot.jpg" width="658"/></p>\n</figure>\n<p dmcf-pid="UcuSt5LZ0D" dmcf-ptype="general">▶제보는 카톡 okjebo</p>\n</section>\n</div>',
      content:
        'epa10521524 Sailors stand guard on the Arleigh Burke-class destroyer USS Sterett (DDG-104) and the Los Angeles-class submarine USS Charlotte (SSN-766) as US President Joe Biden, United Kingdom Prime Minister Rishi Sunak and Australian Prime Minister Anthony Albanese hold a press conference at the Naval Base Point Miramar in San Diego, California, USA, 13 March 2023. The three leaders announced that Australia will purchase nuclear-powered attack submarines from the U.S. EPA/ETIENNE LAURENT▶제보는 카톡 okjebo',
      press: '연합뉴스',
      time: '08:32',
      reporter: '4EL ',
      type: 2,
    },
    {
      page: 43,
      title: 'USA AUSTRALIA UK SUBMARINE DEAL',
      html: '<div class="article_view" data-tiara-action-name="본문이미지확대_클릭" data-tiara-layer="article_body" data-translation-body="true">\n<section dmcf-sid="3Ge764lfFm">\n<p dmcf-pid="0k7vF1o53r" dmcf-ptype="general">epa10521524 Sailors stand guard on the Arleigh Burke-class destroyer USS Sterett (DDG-104) and the Los Angeles-class submarine USS Charlotte (SSN-766) as US President Joe Biden, United Kingdom Prime Minister Rishi Sunak and Australian Prime Minister Anthony Albanese hold a press conference at the Naval Base Point Miramar in San Diego, California, USA, 13 March 2023. The three leaders announced that Australia will purchase nuclear-powered attack submarines from the U.S. EPA/ETIENNE LAURENT</p>\n<figure class="figure_frm origin_fig" dmcf-pid="pAUl1ZnXpw" dmcf-ptype="figure">\n<p class="link_figure"><img class="thumb_g_article" data-org-src="https://t1.daumcdn.net/news/202303/14/yonhap/20230314083254912biot.jpg" data-org-width="500" dmcf-mid="FrNfidXezs" dmcf-mtype="image" height="auto" src="https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/14/yonhap/20230314083254912biot.jpg" width="658"/></p>\n</figure>\n<p dmcf-pid="UcuSt5LZ0D" dmcf-ptype="general">▶제보는 카톡 okjebo</p>\n</section>\n</div>',
      content:
        'epa10521524 Sailors stand guard on the Arleigh Burke-class destroyer USS Sterett (DDG-104) and the Los Angeles-class submarine USS Charlotte (SSN-766) as US President Joe Biden, United Kingdom Prime Minister Rishi Sunak and Australian Prime Minister Anthony Albanese hold a press conference at the Naval Base Point Miramar in San Diego, California, USA, 13 March 2023. The three leaders announced that Australia will purchase nuclear-powered attack submarines from the U.S. EPA/ETIENNE LAURENT▶제보는 카톡 okjebo',
      press: '연합뉴스',
      time: '08:32',
      reporter: '3EL ',
      type: 2,
    },
    {
      page: 43,
      title: 'USA AUSTRALIA UK SUBMARINE DEAL',
      html: '<div class="article_view" data-tiara-action-name="본문이미지확대_클릭" data-tiara-layer="article_body" data-translation-body="true">\n<section dmcf-sid="3Ge764lfFm">\n<p dmcf-pid="0k7vF1o53r" dmcf-ptype="general">epa10521524 Sailors stand guard on the Arleigh Burke-class destroyer USS Sterett (DDG-104) and the Los Angeles-class submarine USS Charlotte (SSN-766) as US President Joe Biden, United Kingdom Prime Minister Rishi Sunak and Australian Prime Minister Anthony Albanese hold a press conference at the Naval Base Point Miramar in San Diego, California, USA, 13 March 2023. The three leaders announced that Australia will purchase nuclear-powered attack submarines from the U.S. EPA/ETIENNE LAURENT</p>\n<figure class="figure_frm origin_fig" dmcf-pid="pAUl1ZnXpw" dmcf-ptype="figure">\n<p class="link_figure"><img class="thumb_g_article" data-org-src="https://t1.daumcdn.net/news/202303/14/yonhap/20230314083254912biot.jpg" data-org-width="500" dmcf-mid="FrNfidXezs" dmcf-mtype="image" height="auto" src="https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/14/yonhap/20230314083254912biot.jpg" width="658"/></p>\n</figure>\n<p dmcf-pid="UcuSt5LZ0D" dmcf-ptype="general">▶제보는 카톡 okjebo</p>\n</section>\n</div>',
      content:
        'epa10521524 Sailors stand guard on the Arleigh Burke-class destroyer USS Sterett (DDG-104) and the Los Angeles-class submarine USS Charlotte (SSN-766) as US President Joe Biden, United Kingdom Prime Minister Rishi Sunak and Australian Prime Minister Anthony Albanese hold a press conference at the Naval Base Point Miramar in San Diego, California, USA, 13 March 2023. The three leaders announced that Australia will purchase nuclear-powered attack submarines from the U.S. EPA/ETIENNE LAURENT▶제보는 카톡 okjebo',
      press: '연합뉴스',
      time: '08:32',
      reporter: '2EL ',
      type: 2,
    },
    {
      page: 43,
      title: 'USA AUSTRALIA UK SUBMARINE DEAL',
      html: '<div class="article_view" data-tiara-action-name="본문이미지확대_클릭" data-tiara-layer="article_body" data-translation-body="true">\n<section dmcf-sid="3Ge764lfFm">\n<p dmcf-pid="0k7vF1o53r" dmcf-ptype="general">epa10521524 Sailors stand guard on the Arleigh Burke-class destroyer USS Sterett (DDG-104) and the Los Angeles-class submarine USS Charlotte (SSN-766) as US President Joe Biden, United Kingdom Prime Minister Rishi Sunak and Australian Prime Minister Anthony Albanese hold a press conference at the Naval Base Point Miramar in San Diego, California, USA, 13 March 2023. The three leaders announced that Australia will purchase nuclear-powered attack submarines from the U.S. EPA/ETIENNE LAURENT</p>\n<figure class="figure_frm origin_fig" dmcf-pid="pAUl1ZnXpw" dmcf-ptype="figure">\n<p class="link_figure"><img class="thumb_g_article" data-org-src="https://t1.daumcdn.net/news/202303/14/yonhap/20230314083254912biot.jpg" data-org-width="500" dmcf-mid="FrNfidXezs" dmcf-mtype="image" height="auto" src="https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/14/yonhap/20230314083254912biot.jpg" width="658"/></p>\n</figure>\n<p dmcf-pid="UcuSt5LZ0D" dmcf-ptype="general">▶제보는 카톡 okjebo</p>\n</section>\n</div>',
      content:
        'epa10521524 Sailors stand guard on the Arleigh Burke-class destroyer USS Sterett (DDG-104) and the Los Angeles-class submarine USS Charlotte (SSN-766) as US President Joe Biden, United Kingdom Prime Minister Rishi Sunak and Australian Prime Minister Anthony Albanese hold a press conference at the Naval Base Point Miramar in San Diego, California, USA, 13 March 2023. The three leaders announced that Australia will purchase nuclear-powered attack submarines from the U.S. EPA/ETIENNE LAURENT▶제보는 카톡 okjebo',
      press: '연합뉴스',
      time: '08:32',
      reporter: '1EL ',
      type: 2,
    },
  ];

  return (
    <div className={styles['newsList']}>
      {articles.map(article => (
        //각 기사의 내용은 article props로 넘김
        <NewsItem key={article.reporter} article={article} />
      ))}
    </div>
  );
}
