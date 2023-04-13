import React, { useRef, useEffect, useState } from 'react';
import Xbutton from '../../assets/images/Xbutton.png';
import styles from './ArticleModal.module.scss';
import ModalContent from './ModalContent';
import FloatingBar from './FloatingBar.jsx';
import styles1 from './FloatingBar.moudle.scss';
import axios from 'axios';

function ArticleModal({ article, setModalOpen, navigate }) {
  // 모달 외부 클릭시 끄기 처리
  const modalRef = useRef();
  const [result, setResult] = useState([]);

  // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    function handleClickOutside(event) {
      if (modalRef.current && event.button === 0 && !modalRef.current.contains(event.target)) {
        setModalOpen(false);
      }
    }

    // 이벤트 핸들러 등록
    document.addEventListener('mousedown', handleClickOutside);

    // 이벤트 핸들러 해제
    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalRef, setModalOpen]);

  // axios 요청 함수
  async function fetchData() {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/timeline/news/${article.newsId}`);
    const uniqueData = [];
    const topKeywordsSet = new Set();
    for (let i = 0; i < response.data.length; i++) {
      const currentItem = response.data[i];
      // currentItem의 topKeyword가 이미 Set에 있는 경우 중복이므로 제외
      if (!topKeywordsSet.has(currentItem.topKeyword)) {
        topKeywordsSet.add(currentItem.topKeyword);
        uniqueData.push(currentItem);
      }
    }
    setResult(uniqueData);
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.modal__content} ref={modalRef}>
      <img
        src={Xbutton}
        alt=""
        onClick={closeModal}
        width="15px"
        style={{ position: 'absolute', right: '2.5%', zIndex: 10000, cursor: 'pointer' }}
      ></img>
      <ModalContent article={article} />
      {result.length > 0 && (
        <FloatingBar result={result} setModalOpen={setModalOpen} className={styles1['floating-bar']} />
      )}
    </div>
  );
}

export default ArticleModal;
