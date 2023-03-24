import React from 'react';
import kakaoBtn from 'assets/images/kakaoBtn.png';
import googleBtn from 'assets/images/googleBtn.png';
import styles from './Login.module.scss';

export default function Login() {
  const kauthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;
  const gauthUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${process.env.REACT_APP_GOOGLE_REST_KEY}&redirect_uri=${process.env.REACT_APP_GOOGLE_REDIRECT_URI}&scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email`;
  return (
    <div className={styles['main-container']}>
      <div className={styles['button-box']}>
        <button
          className={styles.button}
          onClick={() => {
            window.location.href = kauthUrl;
          }}
        >
          <img src={kakaoBtn} alt="카카오" />
        </button>
        <button
          onClick={() => {
            window.location.href = gauthUrl;
          }}
          className={styles.button}
        >
          <img src={googleBtn} alt="구글" />
        </button>
      </div>
    </div>
  );
}
