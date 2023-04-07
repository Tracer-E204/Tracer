import React from 'react';
import notFound from '../../assets/images/404.png';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  const GoMain = () => {
    navigate('/');
  };
  return (
    <div style={{ margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '90vh' }}>
      <img src={notFound} alt="" onClick={GoMain} style={{ cursor: 'pointer' }}></img>
    </div>
  );
}
