import React, { useState } from 'react';

function FloatingBar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div className={`wrapper ${clicked ? 'clicked' : ''}`} onClick={handleClick}>
      <div className="floating-bar">관련 타임라인 보러가기</div>
    </div>
  );
}

export default FloatingBar;
