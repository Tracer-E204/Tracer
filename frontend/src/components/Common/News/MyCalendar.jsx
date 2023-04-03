import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';
import moment from 'moment/moment';

export default function MyCalendar() {
  const [dateRange, setDateRange] = useState({ startDate: null, endDate: null });
  const today = new Date(); // Get current date
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const start = moment(startDate);
  const end = moment(endDate);

  const changeDate = e => {
    // event를 받아서 yyyy/mm/dd 형식으로 일자를 포맷팅해줌
    // e[0]은 사용자가 여행 일자로 선택한 시작 일자가 들어감
    // e[1]은 사용자가 여행 마치는 일자로 선택한 일자가 들어감
    const startDateFormat = moment(e[0]).format('YYYY-MM-DD');
    const endDateFormat = moment(e[1]).format('YYYY-MM-DD');
    // 여행 시작일자와 마치는일자의 값이 변할 때마다 값을 다시 세팅해줌
    setStartDate(startDateFormat);
    setEndDate(endDateFormat);
    setDateRange({ startDate: e[0], endDate: e[1] });
  };

  return (
    <div className="calendar-container">
      {/* <DateRangePicker
        onChange={item => setState([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={state}
        direction="horizontal"
        preventSnapRefocus={true}
        calendarFocus="backwards"
      /> */}

      <Calendar
        calendarType="US"
        onChange={changeDate}
        value={dateRange.startDate && dateRange.endDate ? [dateRange.startDate, dateRange.endDate] : null}
        selectRange={true}
        tileClassName={({ date, view }) => {
          if (view !== 'month') {
            return;
          }
          const momentDate = moment(date);
          if (momentDate.isSameOrAfter(start, 'day') && momentDate.isSameOrBefore(end, 'day')) {
            return 'react-calendar__tile--gray';
          }
          if (date.getDay() === 6) {
            return 'react-calendar__tile--saturday';
          }
          if (date.getDay() === 0) {
            return 'react-calendar__tile--weekend';
          }
        }}
        formatDay={(locale, date) => moment(date).format('DD')}
        maxDate={today} // Set maximum selectable date to today
      />
      {startDate && endDate && (
        <p style={{ textAlign: 'center' }}>
          {startDate} ~ {endDate}
        </p>
      )}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {startDate && endDate && <button type="button">적용</button>}
      </div>
    </div>
  );
}
