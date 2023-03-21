import React, { useState } from 'react';
import Test1 from './test1';
import styles from './test1.module.scss';

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
      {modalOpen && (
        <div className={styles.container1}>
          <Test1 setModalOpen={setModalOpen} />
        </div>
      )}
    </div>
  );
}

export default Modal;
