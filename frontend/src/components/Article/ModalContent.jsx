import React, { useState } from 'react';
import Three from '../../assets/images/three.png';
import styles from './ModalContent.module.scss';

export default function ModalContent({ article }) {
  function get_title() {
    return article.newsTitle;
  }
  function get_content() {
    return <div dangerouslySetInnerHTML={{ __html: article.newsSource }}></div>;
  }

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={styles['article-modal']}>
      <div
        className={styles.threeline}
        style={{
          visibility: expanded ? 'visible' : 'hidden',
        }}
      >
        <div style={{ textAlign: 'left', marginLeft: '30px', marginRight: '30px' }}>
          <div
            style={{
              fontSize: '20px',
              lineHeight: '28px',
              fontWeight: 'bold',
              letterSpacing: '-1px',
              marginBottom: 13,
            }}
          >
            <br />
            3줄 요약
          </div>
          <p
            style={{
              fontSize: '12px',
              color: '#767678',
              lineHeight: '19px',
              letterSpacing: '-0.74px',
              marginBottom: 0,
            }}
          >
            자동 추출 기술로 요약된 내용입니다. 요약 기술의 특성상 본문의 주요 내용이 제외될 수 있어, 전체 맥락을
            이해하기 위해서는 기사 본문 전체 보기를 권장합니다.
          </p>
          <hr></hr>
          <p style={{ marginBottom: 8, fontSize: '18px', fontWeight: 'bold', lineHeight: '27px' }}>{get_title()}</p>
          <div
            style={{ fontSize: '15px', lineHeight: '25px', fontWeight: 400, letterSpacing: '-1px', marginBottom: 4 }}
          >
            이 노동자가 살던 숙소의 참혹한 여건이 공개되면서 공분이 일고 있습니다.
            <br />
            <br />
            하지만 외국인 노동자들은 여전히 기본적인 주거 환경조차 보장받지 못하고 있습니다.
            <br />
            <br />
            이들의 열악한 주거 환경을 개선하고 반복되는 죽음을 막기 위한 대책이 시급합니다. <br />
            &nbsp;
          </div>
        </div>
      </div>
      <div className={styles.title}>{get_title()}</div>
      <div className={styles.intro}>{article.newsReporter}</div>
      <div className={styles.metadata}>
        <span>
          {article.newsPress} | {article.newsDate} {article.newsTime}
        </span>
        <span>
          <img className={styles.three} src={Three} alt="" onClick={handleExpandClick} />
        </span>
      </div>
      <div className={styles.description}>
        {get_content()}
        <br />
      </div>
    </div>
  );
}
