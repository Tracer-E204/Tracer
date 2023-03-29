import React, { useRef, useEffect } from 'react';
import Xbutton from '../../assets/images/Xbutton.png';
import styles from './ArticleModal.module.scss';
import ModalContent from './ModalContent';
import FloatingBar from './FloatingBar.jsx';
import styles1 from './FloatingBar.moudle.scss';

function ArticleModal({ article, setModalOpen }) {
  // 모달 외부 클릭시 끄기 처리
  const modalRef = useRef();

  // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && event.button === 0 && !modalRef.current.contains(event.target)) {
        setModalOpen(false);
      }
    }

    // 이벤트 핸들러 등록
    document.addEventListener('mousedown', handleClickOutside);

    // 이벤트 핸들러 해제
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalRef, setModalOpen]);

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
      <FloatingBar className={styles1['floating-bar']} />
    </div>
  );
}
export default ArticleModal;