import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';
import moment from 'moment/moment';

export default function My123({ onApply }) {
  const [dateRange, setDateRange] = useState({ startDate: null, endDate: null });
  const today = new Date();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const start = moment(startDate);
  const end = moment(endDate);

  const changeDate = e => {
    const startDateFormat = moment(e[0]).format('YYYY-MM-DD');
    const endDateFormat = moment(e[1]).format('YYYY-MM-DD');
    setStartDate(startDateFormat);
    setEndDate(endDateFormat);
    setDateRange({ startDate: e[0], endDate: e[1] });
  };

  return (
    <div className="calendar-container">
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
        maxDate={today}
      />
      {startDate && endDate && (
        <p style={{ textAlign: 'center' }}>
          {startDate} ~ {endDate}
        </p>
      )}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {startDate && endDate && (
          <button type="button" className="button1" onClick={onApply}>
            적용
          </button>
        )}
      </div>
    </div>
  );
}
