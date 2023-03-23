import React, { useState } from 'react';
import Test1 from '../../components/Article/ArticleModal';
import styles from '../../components/Article/ArticleModal.module.scss';

// 모달을 노출하는 페이지
function Modal() {
  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };
  return (
    <div>
      <button onClick={showModal}>모달 띄우기</button>
      <div style={{ height: '1500px' }}>hihihi</div>
      {modalOpen && (
        <div className={styles.container1}>
          <Test1 setModalOpen={setModalOpen} />
        </div>
      )}
    </div>
  );
}

export default Modal;
