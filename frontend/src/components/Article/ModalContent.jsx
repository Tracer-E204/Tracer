import React, { useState } from 'react';
import Three from '../../assets/images/three.png';
import styles from './ModalContent.module.scss';

export default function Test2() {
  const article = [
    {
      news_id: 111697,
      news_content:
        '전국장애인차별철폐연대(전장연)가 새해 첫 출근일인 2일 지하철 4호선 삼각지역에서 벌인 지하철 탑승 시위가 14시간 만에 종료됐다.박경석 대표와 전장연 활동가들은 이날 오전 8시쯤 역내에서 기자회견을 열고 "법원 조정안을 수용해 5분 이내로 안전하게 지하철을 타는 선전전을 진행하기로 했다"며 "서울시도 조정안을 수용해달라"고 촉구했다.마이크를 든 삼각지역장은 15~20초마다 기자회견을 하는 전장연을 겨냥해 "즉시 시위를 중단하고 역사 밖으로 퇴거해주기 바란다"고 경고했다. 전장연은 "5분 이내 지하철 탑승을 허용한 법원의 조정안을 수용하라. 지하철을 타게 해달라"고 반발했다.전장연 활동가들이 승강장에서 5분이 표시된 시계를 들고 열차에 탑승하려 하자 스크린도어 앞에 있던 서울교통공사(서교공) 직원이 직접 탑승을 저지했다. 서교공 측이 본격적인 승차 저지에 나선 것은 이번이 처음이다.전장연 활동가들은 오전 9시10분쯤 삼각지역 상행선 승강장에서 첫 탑승 시도를 저지당한 이후 오후 10시쯤까지 열차 탑승을 계속해서 시도했다. 이날 전장연에서는 휠체어를 탄 활동가 70명을 포함해 최대 190여명이 역사 내에 모였다.경찰은 이날 오전 삼각지역에 기동대 8개 부대를 투입한 데 이어 오후에는 남자 기동대 10개 부대와 여자 기동대 2개 제대를 배치했다.오후 3시 2분에는 시민 안전을 이유로 당고개행 지하철 4호선 1대가 삼각지역을 무정차 통과했다. 이후 오후 9시40분쯤까지 총 13회에 걸쳐 열차가 삼각지역을 무정차 통과했다.오후 6시부터 퇴근길이 시작되면서 지하철에서 내리려는 시민들과 전장연 활동가, 경찰 등이 뒤엉켜 위험천만한 상황이 벌어졌다. 물리적 충돌이 심해지면서 전동휠체어를 탄 전장연 활동가를 막아서던 경찰관이 넘어지기도 했다.이날 전장연 활동가들이 해산한 오후 10시까지 용산소방서에는 삼각지역과 관련해 총 9건의 구급출동 신고가 접수됐다. 이들 중 5명은 현장에서 응급 처치됐고 2명은 병원으로 이송됐다.전장연은 지난달 20일 지하철 시위를 중단한 지 13일 만인 이날 장애인 권리 예산 보장을 요구하면서 지하철 시위에 나섰다.앞서 서울중앙지법은 지난달 19일 서교공이 전장연을 상대로 낸 손해배상 청구 소송에서 2024년까지 19개 역사에 엘리베이터를 설치하고 전장연은 열차 운행 시위를 중단하는 조건으로 강제 조정했다. 그러면서 전장연이 지하철 승하차 시위로 5분을 초과해 지하철 운행을 지연시키면 1회당 500만원을 서교공에 지급하도록 했다.전장연은 전날 보도자료를 내 법원 조정안을 수용하겠다고 밝혔으나 오세훈 서울시장은 같은 날 한 방송에서 "1분만 늦어도 큰일 나는 지하철을 5분씩이나 연장할 수 있다는 것은 어불성설이다. 2일부터 무관용"이라며 거부 의사를 밝혔다.서교공도 2일 "불법시위로 인한 이용객 불편, 공사가 입은 피해 등 다양한 여건을 고려해 심사숙고한 끝에 법원의 강제조정안을 수용할 수 없다는 입장을 확정했다"고 밝혔다. 서교공은 전장연에 대한 형사고소와 민사소송도 추가로 진행하기로 했다. 2021년 1월부터 현재까지 약 2년간 전장연이 총 82차례 진행한 지하철 내 시위가 대상이다.경찰은 전장연 활동가 24명을 일반교통방해와 업무방해 등의 혐의로 검찰에 송치했다. 서울경찰청 관계자는 이날 기자간담회에서 "서울 남대문경찰서가 총 30건 29명에 대해 수사하고 있다"며 "그중 27명을 조사해 24명을 검찰에 송치했다. 지난해 12월에 고발된 사람 등 2명이 남았는데, 빠르게 조사를 마무리할 것"이라고 말했다.전장연 측은 3일 오전 10시30분 같은 장소에서 출근길 지하철 탑승시위를 이어나갈 예정이다.CBS노컷뉴스 박희영 기자 matter@cbs.co.kr▶ 기자와 카톡 채팅하기▶ 노컷뉴스 영상 구독하기 ',
      news_title: '전장연, 새해 첫 출근길 시위…대치 14시간 만에 해산',
      news_source:
        '<div class="article_view" data-tiara-action-name="본문이미지확대_클릭" data-tiara-layer="article_body" data-translation-body="true">\n<section dmcf-sid="yXoFwChV4D">\n<figure class="figure_frm origin_fig" dmcf-pid="WpEqlYGMPE" dmcf-ptype="figure">\n<p class="link_figure"><img alt="새해 지하철 탑승 시위 재개한 전장연. 연합뉴스" class="thumb_g_article" data-org-src="https://t1.daumcdn.net/news/202301/02/nocut/20230102233603739fsrf.jpg" data-org-width="710" dmcf-mid="PAxHjwrq4m" dmcf-mtype="image" height="auto" src="https://img4.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202301/02/nocut/20230102233603739fsrf.jpg" width="658"/></p>\n<figcaption class="txt_caption default_figure">\n            새해 지하철 탑승 시위 재개한 전장연. 연합뉴스\n           </figcaption>\n</figure>\n<p dmcf-pid="YUDBSGHRQk" dmcf-ptype="general"><br/>전국장애인차별철폐연대(전장연)가 새해 첫 출근일인 2일 지하철 4호선 삼각지역에서 벌인 지하철 탑승 시위가 14시간 만에 종료됐다.</p>\n<p dmcf-pid="GuwbvHXePc" dmcf-ptype="general">박경석 대표와 전장연 활동가들은 이날 오전 8시쯤 역내에서 기자회견을 열고 "법원 조정안을 수용해 5분 이내로 안전하게 지하철을 타는 선전전을 진행하기로 했다"며 "서울시도 조정안을 수용해달라"고 촉구했다.</p>\n<p dmcf-pid="HBOVY1tnPA" dmcf-ptype="general">마이크를 든 삼각지역장은 15~20초마다 기자회견을 하는 전장연을 겨냥해 "즉시 시위를 중단하고 역사 밖으로 퇴거해주기 바란다"고 경고했다. 전장연은 "5분 이내 지하철 탑승을 허용한 법원의 조정안을 수용하라. 지하철을 타게 해달라"고 반발했다.</p>\n<p dmcf-pid="XbIfGtFL8j" dmcf-ptype="general">전장연 활동가들이 승강장에서 5분이 표시된 시계를 들고 열차에 탑승하려 하자 스크린도어 앞에 있던 서울교통공사(서교공) 직원이 직접 탑승을 저지했다. 서교공 측이 본격적인 승차 저지에 나선 것은 이번이 처음이다.</p>\n<p dmcf-pid="ZMXiuK9rxN" dmcf-ptype="general">전장연 활동가들은 오전 9시10분쯤 삼각지역 상행선 승강장에서 첫 탑승 시도를 저지당한 이후 오후 10시쯤까지 열차 탑승을 계속해서 시도했다. 이날 전장연에서는 휠체어를 탄 활동가 70명을 포함해 최대 190여명이 역사 내에 모였다.</p>\n<p dmcf-pid="5RZn792mxa" dmcf-ptype="general">경찰은 이날 오전 삼각지역에 기동대 8개 부대를 투입한 데 이어 오후에는 남자 기동대 10개 부대와 여자 기동대 2개 제대를 배치했다.</p>\n<figure class="figure_frm origin_fig" dmcf-pid="1e5Lz2VsPg" dmcf-ptype="figure">\n<p class="link_figure"><img alt="5분 표시된 시계 준비한 전장연. 연합뉴스" class="thumb_g_article" data-org-src="https://t1.daumcdn.net/news/202301/02/nocut/20230102233605039ggjr.jpg" data-org-width="710" dmcf-mid="Qos2W51iQr" dmcf-mtype="image" height="auto" src="https://img1.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202301/02/nocut/20230102233605039ggjr.jpg" width="658"/></p>\n<figcaption class="txt_caption default_figure">\n            5분 표시된 시계 준비한 전장연. 연합뉴스\n           </figcaption>\n</figure>\n<p dmcf-pid="tPYe0qBE4o" dmcf-ptype="general"><br/>오후 3시 2분에는 시민 안전을 이유로 당고개행 지하철 4호선 1대가 삼각지역을 무정차 통과했다. 이후 오후 9시40분쯤까지 총 13회에 걸쳐 열차가 삼각지역을 무정차 통과했다.</p>\n<p dmcf-pid="FQGdpBbD4L" dmcf-ptype="general">오후 6시부터 퇴근길이 시작되면서 지하철에서 내리려는 시민들과 전장연 활동가, 경찰 등이 뒤엉켜 위험천만한 상황이 벌어졌다. 물리적 충돌이 심해지면서 전동휠체어를 탄 전장연 활동가를 막아서던 경찰관이 넘어지기도 했다.</p>\n<p dmcf-pid="3xHJUbKwPn" dmcf-ptype="general">이날 전장연 활동가들이 해산한 오후 10시까지 용산소방서에는 삼각지역과 관련해 총 9건의 구급출동 신고가 접수됐다. 이들 중 5명은 현장에서 응급 처치됐고 2명은 병원으로 이송됐다.</p>\n<p dmcf-pid="0qs2W51i4i" dmcf-ptype="general">전장연은 지난달 20일 지하철 시위를 중단한 지 13일 만인 이날 장애인 권리 예산 보장을 요구하면서 지하철 시위에 나섰다.</p>\n<p dmcf-pid="pu7TQJiHxa" dmcf-ptype="general">앞서 서울중앙지법은 지난달 19일 서교공이 전장연을 상대로 낸 손해배상 청구 소송에서 2024년까지 19개 역사에 엘리베이터를 설치하고 전장연은 열차 운행 시위를 중단하는 조건으로 강제 조정했다. 그러면서 전장연이 지하철 승하차 시위로 5분을 초과해 지하철 운행을 지연시키면 1회당 500만원을 서교공에 지급하도록 했다.</p>\n<figure class="figure_frm origin_fig" dmcf-pid="UbIfGtFLQd" dmcf-ptype="figure">\n<p class="link_figure"><img alt="연합뉴스" class="thumb_g_article" data-org-src="https://t1.daumcdn.net/news/202301/02/nocut/20230102233606302hupf.jpg" data-org-width="710" dmcf-mid="xOc7CyWQQw" dmcf-mtype="image" height="auto" src="https://img1.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202301/02/nocut/20230102233606302hupf.jpg" width="658"/></p>\n<figcaption class="txt_caption default_figure">\n            연합뉴스\n           </figcaption>\n</figure>\n<p dmcf-pid="UjoUiNj34W" dmcf-ptype="general"><br/>전장연은 전날 보도자료를 내 법원 조정안을 수용하겠다고 밝혔으나 오세훈 서울시장은 같은 날 한 방송에서 "1분만 늦어도 큰일 나는 지하철을 5분씩이나 연장할 수 있다는 것은 어불성설이다. 2일부터 무관용"이라며 거부 의사를 밝혔다.</p>\n<p dmcf-pid="7VSP5pUN6R" dmcf-ptype="general">서교공도 2일 "불법시위로 인한 이용객 불편, 공사가 입은 피해 등 다양한 여건을 고려해 심사숙고한 끝에 법원의 강제조정안을 수용할 수 없다는 입장을 확정했다"고 밝혔다. 서교공은 전장연에 대한 형사고소와 민사소송도 추가로 진행하기로 했다. 2021년 1월부터 현재까지 약 2년간 전장연이 총 82차례 진행한 지하철 내 시위가 대상이다.</p>\n<p dmcf-pid="zfvQ1Uuj8M" dmcf-ptype="general">경찰은 전장연 활동가 24명을 일반교통방해와 업무방해 등의 혐의로 검찰에 송치했다. 서울경찰청 관계자는 이날 기자간담회에서 "서울 남대문경찰서가 총 30건 29명에 대해 수사하고 있다"며 "그중 27명을 조사해 24명을 검찰에 송치했다. 지난해 12월에 고발된 사람 등 2명이 남았는데, 빠르게 조사를 마무리할 것"이라고 말했다.</p>\n<p dmcf-pid="qTeHjwrq8x" dmcf-ptype="general">전장연 측은 3일 오전 10시30분 같은 장소에서 출근길 지하철 탑승시위를 이어나갈 예정이다.</p>\n<div dmcf-pid="BydXArmBxQ" dmcf-ptype="general">\n<strong>※CBS노컷뉴스는 여러분의 제보로 함께 세상을 바꿉니다. 각종 비리와 부당대우, 사건사고와 미담 등 모든 얘깃거리를 알려주세요.</strong>\n<ul>\n<li><strong>이메일 :</strong><span><span>jebo@cbs.co.kr</span></span></li>\n<li><strong>카카오톡 :</strong><span>@노컷뉴스</span></li>\n<li><strong>사이트 :</strong><span>https://url.kr/b71afn</span></li>\n</ul>\n</div>\n<p dmcf-pid="bZg3rhlfPP" dmcf-ptype="general">CBS노컷뉴스 박희영 기자 matter@cbs.co.kr</p>\n<p dmcf-pid="K5a0mlS4x6" dmcf-ptype="general"><span>▶ 기자와 카톡 채팅하기</span><span>▶ 노컷뉴스 영상 구독하기</span> </p>\n</section>\n</div>',
      news_date: '2023-01-02',
      news_time: '23:36:00',
      news_reporter: 'CBS노컷뉴스 박희영 기자',
      news_type: 0,
      news_press: '노컷뉴스',
      news_thumbnail:
        'https://img1.daumcdn.net/thumb/S95x77ht.u/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fnews%2F202301%2F02%2Fnocut%2F20230102233603739fsrf.jpg&scode=media',
    },
  ];

  function get_title() {
    return article[0].news_title;
  }
  function get_content() {
    return <div dangerouslySetInnerHTML={{ __html: article[0].news_source }}></div>;
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
      <div className={styles.intro}>{article[0].news_reporter}</div>
      <div className={styles.metadata}>
        <span>
          {article[0].news_press} | {article[0].news_date} {article[0].news_time}
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
