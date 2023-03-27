import React, { useState, useEffect } from 'react';
import styles from './Pagination.module.scss';

const Pagination = ({ currentPage = 0, maxPage = 1000, onChangePage = () => {}, pageSize = 5 }) => {
  const [pageNumberInput, setPageNumberInput] = useState((currentPage + 1).toString());
  const [currentPageState, setCurrentPageState] = useState(currentPage);

  const handlePageNumberInputChange = event => {
    const { value } = event.target;
    const parsedValue = parseInt(value, 10);
    if (!Number.isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= maxPage) {
      setPageNumberInput(value);
      setCurrentPageState(parsedValue - 1);
    }
  };

  const handlePageNumberInputKeyDown = event => {
    if (event.key === 'Enter') {
      const parsedValue = parseInt(pageNumberInput, 10);
      if (!Number.isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= maxPage) {
        onChangePage(parsedValue - 1);
        setCurrentPageState(parsedValue - 1);
      }
    }
  };

  useEffect(() => {
    setPageNumberInput((currentPageState + 1).toString());
  }, [currentPageState]);

  const handleFirstPageButtonClick = () => {
    onChangePage(0);
    setCurrentPageState(0);
  };

  const handlePrevPageButtonClick = () => {
    onChangePage(currentPageState - 1);
    setCurrentPageState(currentPageState - 1);
  };

  const handleNextPageButtonClick = () => {
    onChangePage(currentPageState + 1);
    setCurrentPageState(currentPageState + 1);
  };

  const handleLastPageButtonClick = () => {
    onChangePage(maxPage - 1);
    setCurrentPageState(maxPage - 1);
  };

  const pages = [];
  const startIndex = Math.max(0, Math.min(currentPageState - Math.floor(pageSize / 2), maxPage - pageSize));
  const endIndex = Math.min(maxPage, startIndex + pageSize) - 1;

  for (let i = startIndex; i <= endIndex; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.pagination}>
      <div className={styles.main}>
        <button className="pagination__button" disabled={currentPageState === 0} onClick={handleFirstPageButtonClick}>
          {'<<'}
        </button>
        <button className="pagination__button" disabled={currentPageState === 0} onClick={handlePrevPageButtonClick}>
          {'<'}
        </button>
        <span className="pagination__pageNumber">
          <input
            type="text"
            value={pageNumberInput}
            onChange={handlePageNumberInputChange}
            onKeyDown={handlePageNumberInputKeyDown}
            className="pagination__pageNumberInput"
          />
          &nbsp;&nbsp; / &nbsp;&nbsp;{maxPage}
        </span>
        <button
          className="pagination__button"
          disabled={currentPageState === maxPage - 1}
          onClick={handleNextPageButtonClick}
        >
          {'>'}
        </button>
        <button
          className="pagination__button"
          disabled={currentPageState === maxPage - 1}
          onClick={handleLastPageButtonClick}
        >
          {'>>'}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
