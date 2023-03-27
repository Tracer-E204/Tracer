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

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://200.0.0.60/news/search', {
        word: text,
        limit: 5,
        offset: 0,
        type: 0,
      });
      setResult(response.data);
      navigate(`/searchresult`, { state: { result: response.data } });
    } catch (error) {
      console.error('Error sending POST request:', error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search ..." value={text} onChange={handleChange} />
    </form>
  );
}
