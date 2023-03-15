import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Three from '../../assets/images/three.png';
import styles from './Article.module.scss';

export default function Article() {
  const article = [
    {
      page: 9,
      title: '[친절한 뉴스K] 열악한 외국인 비닐 숙소 여전…실태 파악 안 돼',
      html: '<div class="article_view" data-tiara-action-name="본문이미지확대_클릭" data-tiara-layer="article_body" data-translation-body="true">\n<section dmcf-sid="7GCkjn1ilW">\n<div class="video_frm" dmcf-pid="zgM2bUcpvy" dmcf-ptype="kakaotv">\n<div class="layer_vod">\n<div class="vod_player">\n<iframe allowfullscreen="" class="player_iframe" dmcf-mid="UJSdM4lfhG" dmcf-mtype="video/kakaotv/owner" dmcf-poster-mid="uzAKq0j3lY" frameborder="0" height="370" id="video@UJSdM4lfhG" poster="https://t1.daumcdn.net/news/202303/10/kbs/20230310125339115pctt.jpg" scrolling="no" src="//tv.kakao.com/embed/player/cliplink/436362527?service=daum_news&m_use_inline=true&ios_allow_inline=true&m_prevent_sdk_use=true&wmode=opaque" width="100%"></iframe>\n</div>\n</div>\n</div>\n<p dmcf-pid="qd4zU1o5lT" dmcf-ptype="general"> [앵커]</p>\n<p dmcf-pid="Bd4zU1o5lv" dmcf-ptype="general">돼지 축사에서 일하다 숨진 채 발견된 태국인 노동자 소식이 며칠 전 전해졌는데요.</p>\n<p dmcf-pid="bvraLRGMyS" dmcf-ptype="general">이 노동자가 살던 숙소의 참혹한 여건이 공개되면서 공분이 일고 있습니다.</p>\n<p dmcf-pid="KOAJR8S4hl" dmcf-ptype="general">올해도 11만 명의 외국인 노동자가 입국할 예정인데, 기본적인 주거 환경조차 보장받지 못하고 있는 것으로 나타났습니다.</p>\n<p dmcf-pid="9CkndPT6Sh" dmcf-ptype="general">홍화경 기자입니다.</p>\n<p dmcf-pid="2ci6fBrqlC" dmcf-ptype="general">[리포트]</p>\n<p dmcf-pid="V6BF5WRySI" dmcf-ptype="general">가로 2미터, 세로 3미터. 발 뻗고 눕지도 못할 좁은 방에 곰팡이까지 가득합니다.</p>\n<p dmcf-pid="fUXlIDBEyO" dmcf-ptype="general">부엌은 음식을 해 먹기엔 너무나도 지저분하고요.</p>\n<p dmcf-pid="4RVu0ZnXCs" dmcf-ptype="general">화장실이라곤 바닥에 구멍 하나 뚫린 게 전부입니다.</p>\n<p dmcf-pid="88qtZyMTTm" dmcf-ptype="general">돼지 축사에서 일하던 한 태국인 노동자가 10년 동안 살았던 숙소입니다.</p>\n<p dmcf-pid="6LQKq0j3yr" dmcf-ptype="general">농장주는 이 노동자가 숨지자 시신을 유기하기까지 했습니다.</p>\n<p dmcf-pid="PraRQVC2vw" dmcf-ptype="general">산업 현장에선 외국인 없이는 일이 안 된다고 아우성이죠.</p>\n<p dmcf-pid="Q8qtZyMTWD" dmcf-ptype="general">심각한 구인난 해결을 위해서 2004년 고용허가제 도입 이래 가장 많은 11만 명이 올해 입국할 예정입니다.</p>\n<p dmcf-pid="xPb31YeWTE" dmcf-ptype="general">하지만 외국인 노동자들은 여전히 기본적인 주거 환경조차 보장받지 못하고 있습니다.</p>\n<p dmcf-pid="yWOAaJZdlk" dmcf-ptype="general">비닐하우스가 빽빽한 경기도의 한 농촌 마을.</p>\n<p dmcf-pid="W6BF5WRyCc" dmcf-ptype="general">이곳에서 일하는 상당수가 외국인입니다.</p>\n<p dmcf-pid="Yx9pFHJGWA" dmcf-ptype="general">마을 곳곳에 검은 차광막이 덮인 비닐하우스가 보입니다.</p>\n<p dmcf-pid="GknP4bmBSj" dmcf-ptype="general">가까이 가 보니 샌드위치 패널로 지은 가건물이 들어있습니다.</p>\n<p dmcf-pid="HlDoixWQhN" dmcf-ptype="general">외국인 노동자 숙소입니다.</p>\n<p dmcf-pid="XJ8qutg1Ta" dmcf-ptype="general">제대로 된 창문이 없어 한낮에도 빛이 들지 않습니다.</p>\n<p dmcf-pid="ZgM2bUcpvg" dmcf-ptype="general">난방도 안 돼 보온용 담요를 지붕에 덮어놨는데, 불이라도 나면 큰 피해가 우려됩니다. </p>\n<p dmcf-pid="5LQKq0j3Wo" dmcf-ptype="general">[김달성/포천 이주노동자센터 대표 : "여기 살고 있는 여성 노동자들이 밤에 잘 때 털신을 신고 잔다고 하더라고요. 전기장판 정도 깔고 지내는데 외풍이 너무 심하고."]</p>\n<p dmcf-pid="1jd42zD7SL" dmcf-ptype="general">이 숙소는 안에 화장실이 없습니다.</p>\n<p dmcf-pid="tBFWvOVsSn" dmcf-ptype="general">길 옆에 철판을 세운 뒤 구멍을 파놨습니다.</p>\n<p dmcf-pid="FvraLRGMCi" dmcf-ptype="general">전깃불도 안 들어오고, 출입문엔 잠금 장치도 없습니다.</p>\n<p dmcf-pid="3f75HvQSvJ" dmcf-ptype="general">부엌 벽면과 천장에 그을음이 가득합니다.</p>\n<p dmcf-pid="0uZSCwbDvd" dmcf-ptype="general">스며드는 냉기를 막으려 비닐을 얼기설기 붙여놨습니다. </p>\n<p dmcf-pid="puZSCwbDve" dmcf-ptype="general">노동자 숙소는 일정 수준의 시설을 반드시 갖춰야 하는데요.</p>\n<p dmcf-pid="U5vrEa0ghR" dmcf-ptype="general">적절한 화장실과 채광, 환기, 냉·난방 설비 같은 기본적인 것들입니다.</p>\n<p dmcf-pid="u1TmDNpaCM" dmcf-ptype="general">하지만 5인 미만 소규모 사업장은 법 적용 대상에서 빠졌습니다.</p>\n<p dmcf-pid="7f75HvQSWx" dmcf-ptype="general">[고용노동부 관계자/음성변조 : "(돼지농장 (태국인) 기숙사도 근로기준법의 기숙사에 관한 규정은 적용할 수 없는 거라고 봐야 되죠?) 네, 맞습니다."]</p>\n<p dmcf-pid="zaRVKukUhQ" dmcf-ptype="general">3년 전, 캄보디아 노동자가 비닐하우스 숙소에서 한파 속에 숨진 채 발견됐습니다.</p>\n<p dmcf-pid="q2UXYl6hyP" dmcf-ptype="general">이 일을 계기로, 정부는 가건물을 숙소로 쓸 경우 외국인 고용 허가를 내주지 않고 있는데요.</p>\n<p dmcf-pid="Bx9pFHJGl6" dmcf-ptype="general">하지만 사진으로 확인할 뿐 현장 점검은 제대로 이뤄지지 않고 있습니다.</p>\n<p dmcf-pid="bd4zU1o5y8" dmcf-ptype="general">[김달성/포천 이주노동자센터 대표 : "근로계약서를 보니까 기숙사에 대한 조항에서 분명히 주택이나 빌라를 제공한다고 서류 상엔 표시해놓고, 사실은 이런 움막에…."]</p>\n<p dmcf-pid="KknP4bmBh4" dmcf-ptype="general">정부는 지자체로부터 허가받은 가건물의 경우에는 실사를 거쳐 숙소로 쓸 수 있도록 했는데요.</p>\n<p dmcf-pid="9aRVKukUTf" dmcf-ptype="general">외국인 노동자들은 이같이 합법적으로 지은 가건물도 소음과 단열이 되지 않을뿐더러 각종 사고에 취약하다고 말합니다. </p>\n<p dmcf-pid="2Pb31YeWWV" dmcf-ptype="general">정부는 외국인 노동자가 살 수 있는 공공기숙사 10곳을 짓기로 했습니다.</p>\n<p dmcf-pid="VM2U3XiHh2" dmcf-ptype="general">하지만 수용 인원은 6백 명에 불과하고 그나마 올해까지만 한시적으로 진행돼 사업 효과는 미지숩니다.</p>\n<p dmcf-pid="fZSwkg3ov9" dmcf-ptype="general">또, 고용허가로 입국한 노동자는 점검이라도 가능하지만, 40만 명으로 추산되는 미등록 노동자의 경우엔 주거지 실태 파악이 사실상 불가능한 것도 문젭니다.</p>\n<p dmcf-pid="40GCskzcCK" dmcf-ptype="general">외국인 노동자들은 비닐하우스 등 열악한 거주 시설에 대한 실태조사에 나서달라는 진정서를 이달 초(3일) 고용노동부에 접수했습니다.</p>\n<p dmcf-pid="8ci6fBrqlb" dmcf-ptype="general">이들의 열악한 주거 환경을 개선하고 반복되는 죽음을 막기 위한 대책이 시급합니다.</p>\n<p dmcf-pid="6Dox69OKWB" dmcf-ptype="general">KBS 뉴스 홍화경입니다.</p>\n<p dmcf-pid="PZSwkg3oTq" dmcf-ptype="general">영상편집:신선미/그래픽:민세홍/리서처:민마린</p>\n<p dmcf-pid="QpHhOEqkSz" dmcf-ptype="general">■ 제보하기<br/>▷ 카카오톡 : \'KBS제보\' 검색<br/>▷ 전화 : 02-781-1234<br/>▷ 이메일 : kbs1234@kbs.co.kr<br/>▷ 뉴스홈페이지 : https://goo.gl/4bWbkG</p>\n<div dmcf-pid="xSwgnMYxy7" dmcf-ptype="general">\n<div>\n<div></div>\n</div>\n</div>\n<figure class="figure_frm origin_fig" dmcf-pid="yqtySs2mvu" dmcf-ptype="figure">\n<p class="link_figure"><img alt="https://news.kbs.co.kr/special/danuri/2022/intro.html" class="thumb_g_article" data-org-src="https://t1.daumcdn.net/news/202303/10/kbs/20230310125336450pjju.png" data-org-width="612" dmcf-mid="pBsP4bmBSH" dmcf-mtype="image" height="auto" ignorethumbnail="true" src="https://img2.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/10/kbs/20230310125336450pjju.png" width="658"/></p>\n<figcaption class="txt_caption default_figure">\n            https://news.kbs.co.kr/special/danuri/2022/intro.html\n           </figcaption>\n</figure>\n<div dmcf-pid="WysjgdXeyU" dmcf-ptype="general">\n<div>\n<div></div>\n</div>\n</div>\n<p dmcf-pid="YM2U3XiHTp" dmcf-ptype="general">홍화경 기자 (vivid@kbs.co.kr)</p>\n</section>\n</div>',
      content:
        ' [앵커]돼지 축사에서 일하다 숨진 채 발견된 태국인 노동자 소식이 며칠 전 전해졌는데요.이 노동자가 살던 숙소의 참혹한 여건이 공개되면서 공분이 일고 있습니다.올해도 11만 명의 외국인 노동자가 입국할 예정인데, 기본적인 주거 환경조차 보장받지 못하고 있는 것으로 나타났습니다.홍화경 기자입니다.[리포트]가로 2미터, 세로 3미터. 발 뻗고 눕지도 못할 좁은 방에 곰팡이까지 가득합니다.부엌은 음식을 해 먹기엔 너무나도 지저분하고요.화장실이라곤 바닥에 구멍 하나 뚫린 게 전부입니다.돼지 축사에서 일하던 한 태국인 노동자가 10년 동안 살았던 숙소입니다.농장주는 이 노동자가 숨지자 시신을 유기하기까지 했습니다.산업 현장에선 외국인 없이는 일이 안 된다고 아우성이죠.심각한 구인난 해결을 위해서 2004년 고용허가제 도입 이래 가장 많은 11만 명이 올해 입국할 예정입니다.하지만 외국인 노동자들은 여전히 기본적인 주거 환경조차 보장받지 못하고 있습니다.비닐하우스가 빽빽한 경기도의 한 농촌 마을.이곳에서 일하는 상당수가 외국인입니다.마을 곳곳에 검은 차광막이 덮인 비닐하우스가 보입니다.가까이 가 보니 샌드위치 패널로 지은 가건물이 들어있습니다.외국인 노동자 숙소입니다.제대로 된 창문이 없어 한낮에도 빛이 들지 않습니다.난방도 안 돼 보온용 담요를 지붕에 덮어놨는데, 불이라도 나면 큰 피해가 우려됩니다. [김달성/포천 이주노동자센터 대표 : "여기 살고 있는 여성 노동자들이 밤에 잘 때 털신을 신고 잔다고 하더라고요. 전기장판 정도 깔고 지내는데 외풍이 너무 심하고."]이 숙소는 안에 화장실이 없습니다.길 옆에 철판을 세운 뒤 구멍을 파놨습니다.전깃불도 안 들어오고, 출입문엔 잠금 장치도 없습니다.부엌 벽면과 천장에 그을음이 가득합니다.스며드는 냉기를 막으려 비닐을 얼기설기 붙여놨습니다. 노동자 숙소는 일정 수준의 시설을 반드시 갖춰야 하는데요.적절한 화장실과 채광, 환기, 냉·난방 설비 같은 기본적인 것들입니다.하지만 5인 미만 소규모 사업장은 법 적용 대상에서 빠졌습니다.[고용노동부 관계자/음성변조 : "(돼지농장 (태국인) 기숙사도 근로기준법의 기숙사에 관한 규정은 적용할 수 없는 거라고 봐야 되죠?) 네, 맞습니다."]3년 전, 캄보디아 노동자가 비닐하우스 숙소에서 한파 속에 숨진 채 발견됐습니다.이 일을 계기로, 정부는 가건물을 숙소로 쓸 경우 외국인 고용 허가를 내주지 않고 있는데요.하지만 사진으로 확인할 뿐 현장 점검은 제대로 이뤄지지 않고 있습니다.[김달성/포천 이주노동자센터 대표 : "근로계약서를 보니까 기숙사에 대한 조항에서 분명히 주택이나 빌라를 제공한다고 서류 상엔 표시해놓고, 사실은 이런 움막에…."]정부는 지자체로부터 허가받은 가건물의 경우에는 실사를 거쳐 숙소로 쓸 수 있도록 했는데요.외국인 노동자들은 이같이 합법적으로 지은 가건물도 소음과 단열이 되지 않을뿐더러 각종 사고에 취약하다고 말합니다. 정부는 외국인 노동자가 살 수 있는 공공기숙사 10곳을 짓기로 했습니다.하지만 수용 인원은 6백 명에 불과하고 그나마 올해까지만 한시적으로 진행돼 사업 효과는 미지숩니다.또, 고용허가로 입국한 노동자는 점검이라도 가능하지만, 40만 명으로 추산되는 미등록 노동자의 경우엔 주거지 실태 파악이 사실상 불가능한 것도 문젭니다.외국인 노동자들은 비닐하우스 등 열악한 거주 시설에 대한 실태조사에 나서달라는 진정서를 이달 초(3일) 고용노동부에 접수했습니다.이들의 열악한 주거 환경을 개선하고 반복되는 죽음을 막기 위한 대책이 시급합니다.KBS 뉴스 홍화경입니다.영상편집:신선미/그래픽:민세홍/리서처:민마린■ 제보하기▷ 카카오톡 : \'KBS제보\' 검색▷ 전화 : 02-781-1234▷ 이메일 : kbs1234@kbs.co.kr▷ 뉴스홈페이지 : https://goo.gl/4bWbkG홍화경 기자 (vivid@kbs.co.kr)',
      press: 'KBS',
      time: '12:53',
      reporter: '홍화경',
      type: 0,
    },
  ];

  function get_title() {
    return article[0].title;
  }
  function get_content() {
    return <div dangerouslySetInnerHTML={{ __html: article[0].html }}></div>;
  }

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box className={styles['article-modal']}>
      <Typography id="modal-modal-title" variant="h5" component="h2" className={styles.title}>
        {get_title()}
      </Typography>
      <Typography id="modal-modal-introduce" className={styles.intro}>
        {article[0].reporter} 기자
      </Typography>
      <Typography className={styles.metadata}>
        <span>
          {article[0].press} | 2023.03.14 {article.time}
        </span>
        <span>
          <img src={Three} alt="" onClick={handleExpandClick} />
        </span>
      </Typography>
      <Typography>
        {expanded ? (
          <div>
            Hi
            <br />
            hello
            <br />
            안녕
          </div>
        ) : (
          ''
        )}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        {get_content()}
      </Typography>
    </Box>
  );
}
