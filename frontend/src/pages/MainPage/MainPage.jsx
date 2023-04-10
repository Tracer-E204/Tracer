import React from 'react';
import styles from './MainPage.module.scss';
import WordCloudPage from 'components/MainPage/WordCloud';
import NewsSlide from 'components/MainPage/NewsSlide';
import SearchPage from 'components/MainPage/SearchPage';
import { FullPage, Slide } from 'react-full-page';

export default function MainPage() {
  return (
    <div className={styles.mainpage}>
      <FullPage controls={false}>
        <Slide>
          <SearchPage />
        </Slide>
        <Slide>
          <WordCloudPage />
        </Slide>
        <Slide>
          <NewsSlide />
        </Slide>
      </FullPage>
    </div>
  );
}
