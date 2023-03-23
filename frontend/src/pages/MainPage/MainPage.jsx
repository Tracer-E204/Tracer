import React from 'react';
import Intro from 'components/MainPage/Intro';
import styles from './MainPage.module.scss';
import WordCloud from 'components/MainPage/WordCloud';
import NewsSlide from 'components/MainPage/NewsSlide';
import SearchPage from 'components/MainPage/SearchPage';
import { FullPage, Slide } from 'react-full-page';

export default function MainPage() {
  return (
    <FullPage controls={false}>
      <Slide>
        <Intro />
      </Slide>
      <Slide>
        <WordCloud />
      </Slide>
      <Slide>
        <NewsSlide />
      </Slide>
      <Slide>
        <SearchPage />
      </Slide>
    </FullPage>
  );
}
