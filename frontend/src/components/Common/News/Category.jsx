import React, { useState } from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import styles from './Category.module.scss';

export default function Category({ onTypeChange }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = index => {
    setActiveTab(index);
    onTypeChange(index);
  };

  return (
    <Tabs className={styles.category} defaultValue={1}>
      <TabList className={styles.tablist}>
        <Tab
          className={`${styles.tab} ${activeTab === 0 ? styles.active : ''}`}
          value={1}
          onClick={() => handleClick(0)}
        >
          제목 + 내용
        </Tab>
        <Tab
          className={`${styles.tab} ${activeTab === 1 ? styles.active : ''}`}
          value={2}
          onClick={() => handleClick(1)}
        >
          제목
        </Tab>
        <Tab
          className={`${styles.tab} ${activeTab === 2 ? styles.active : ''}`}
          value={3}
          onClick={() => handleClick(2)}
        >
          내용
        </Tab>
      </TabList>
    </Tabs>
  );
}
