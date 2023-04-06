import React, { useState } from 'react';
import styles from './Header.module.scss';
import logo from '../../../assets/tracerlogo.png';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Loading';
import axios from 'axios';
import search from '../../../assets/images/search.png';

export default function Header() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/news/search`, {
        word: text,
        limit: 5,
        offset: 0,
        type: 0,
      });
      setLoading(false);
      navigate(`/searchresult`, { state: { result: response.data, text: text, startDate: null, EndDate: null } });
      if (window.location.pathname === '/searchresult') {
        window.location.reload();
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      {loading ? <Loading /> : null}
      <header className={styles.header}>
        <div className={styles.logo}>
          <img className={styles['logo-img']} src={logo} alt="logo" onClick={Gomain} />
        </div>
        <form onSubmit={handleSubmit} className={styles.form1}>
          <div className={styles['search-container']}>
            <input
              className={styles.searchbar}
              type="text"
              placeholder="검색어를 입력해주세요"
              onChange={handleChange}
            />
            <button type="submit" className={styles['search-button']}>
              <img src={search} alt="search" />
            </button>
          </div>
        </form>
      </header>
    </div>
  );
}
