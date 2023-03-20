import React from 'react';
import styles from './Category.module.scss';

export default function Category() {
  const categories = [
    {
      name: 'all',
      text: '제목 + 내용',
    },
    {
      name: 'title',
      text: '제목',
    },
    {
      name: 'content',
      text: 'title',
    },
  ];
  return (
    //카테고리 wrap
    <div className={styles['category-container']}>
      {/* map 메서드로 각 카테고리들(NavLink)을 생성 */}
      {categories.map(c => (
        //key에는 고유한 이름이 들어가도록 c.name을 쓴다
        <div
          key={categories.name}
          //active 상태면 active 클래스를, 아니면 그없
          className={({ isActive }) => 'nav' + (isActive ? 'active' : undefined)}
          //NavLink의 주소!
          //'all'이면 기본페이지로 그 외의 카테고리면 '/카테고리이름'
          to={c.name === 'all' ? '/' : `/${c.name}`}
        >
          {c.text}
        </div>
      ))}
    </div>
  );
}
