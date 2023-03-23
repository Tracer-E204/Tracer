import React, { useState } from 'react';
import styles from './SearchBar.module.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  // post 요청 후 뉴스 리스트 저장할 변수
  const [result, setResult] = useState(null);

  // search bar 내에 들어갈 검색어 변수
  const [text, setText] = useState('');

  // navigate 이용 링크하면서 props 전달
  const navigate = useNavigate();

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    try {
      console.log('시도');
      const response = axios.post('http://j8e204.p.ssafy.io:8001/news/search', {
        word: '러시아',
        limit: 5,
        offset: 0,
      });
      console.log('신청 굳');
      setResult(response.data);
      navigate(`/searchresult`, { state: response.data });
    } catch (error) {
      console.error('Error sending POST request:', error);
    }
  };
  return (
    <div className={styles['searchbar-container']}>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="찾고asdas입력" value={text} onChange={handleChange} />
      </form>
    </div>
  );
}
