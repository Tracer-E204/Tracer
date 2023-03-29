import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FloatingBar({ result }) {
  const [clicked, setClicked] = useState(false);
  const number = result.length;
  const navigate = useNavigate();

  const handleClick = async (event, keyword) => {
    event.stopPropagation();
    setClicked(!clicked);
    GoTimeLine(keyword);
  };

  const GoTimeLine = async text => {
    navigate(`/timeline`, { state: { text: text } });
  };

  return (
    <div className={`wrapper ${clicked ? 'clicked' : ''}`} onClick={() => setClicked(!clicked)}>
      <div className="floating-bar">관련 타임라인 보러가기</div>
      {clicked && (
        <div className={`${number === 1 ? 'new-box2' : 'new-box'}`}>
          {number > 0 && (
            <div className="first" onClick={event => handleClick(event, result[0].topKeyword)}>
              {result[0].topKeyword}
            </div>
          )}
          {number > 1 && (
            <div className="second" onClick={event => handleClick(event, result[1].topKeyword)}>
              {result[1].topKeyword}
            </div>
          )}
          {number > 2 && (
            <div className="third" onClick={event => handleClick(event, result[2].topKeyword)}>
              {result[2].topKeyword}
            </div>
          )}
          {number > 3 && (
            <div className="fourth" onClick={event => handleClick(event, result[3].topKeyword)}>
              {result[3].topKeyword}
            </div>
          )}
          {number > 4 && (
            <div className="fifth" onClick={event => handleClick(event, result[4].topKeyword)}>
              {result[4].topKeyword}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default FloatingBar;
