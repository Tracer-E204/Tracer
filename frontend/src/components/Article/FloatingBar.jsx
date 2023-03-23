import React, { useState } from 'react';

function FloatingBar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div className={`wrapper ${clicked ? 'clicked' : ''}`} onClick={handleClick}>
      <div className="floating-bar">관련 타임라인 보러가기</div>
      {clicked && (
        <div className="new-box">
          <div className="first">러우전쟁</div>
          <div className="second">크림반도</div>
          <div className="third">러시아 우크라이나</div>
          <div className="fourth">러시아 경제</div>
          <div className="fifth">푸틴</div>
        </div>
      )}
    </div>
  );
}

export default FloatingBar;
