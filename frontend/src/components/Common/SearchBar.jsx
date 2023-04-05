import React, { useState } from 'react';
// import styles from './SearchBar.module.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
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
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/news/search`, {
        word: text,
        limit: 5,
        offset: 0,
        type: 0,
      });
      if (response.data.totalCount === 0) {
        throw new Error('검색결과가 존재하지 않습니다.');
      }
      navigate(`/searchresult`, { state: { result: response.data, text: text, startDate: null, EndDate: null } });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
      <input
        type="text"
        placeholder="Search ..."
        value={text}
        onChange={handleChange}
        style={{
          width: '100%',
          border: '2px solid',
          borderRadius: '10px',
          height: '30px',
        }}
      />
    </form>
  );
}
