import React, { useState } from 'react';
import styles from './Header.module.scss';
import logo from '../../../assets/tracerlogo.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Header() {
  const navigate = useNavigate();

  const [text, setText] = useState('');
  const Gomain = () => {
    navigate('/');
  };

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
      if (window.location.pathname === '/searchresult') {
        window.location.reload();
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles['logo-img']} src={logo} alt="logo" onClick={Gomain} />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.searchbar}
          type="text"
          placeholder="type keword you want to search"
          onChange={handleChange}
        />
      </form>
    </header>
  );
}
