import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const CalendarSelect= () => {
    const [date, setDate] = useState(new Date());
    const [dateMonth, setMonth] = useState(new Date());
    const [dateWeek, setWeek] = useState(new Date());
    const oneWeek = new Date();

    const onChangeDay = date => {
        setDate(date);
    }

    const onChangeMonth = dateMonth => {
      setMonth(dateMonth);
  }

  const onChangeWeek = dateWeek=> {
    setWeek(dateWeek);
}

    return (
      <div>
          <span> Dia </span>
          <span> Semana </span>
          <span> Mês </span>
          
        <Calendar id="DayCalendar" value={date} onChange={onChangeDay} />
        <h1>{date.toDateString()}</h1>
        <Calendar id="MonthCalendar" maxDetail={"year"} value={dateMonth} onChange={onChangeMonth}/>
        <h1>{dateMonth.getMonth()+1}</h1>
        <Calendar maxDetail={"month"} value={dateWeek} onChange={onChangeWeek}/>
        <h1>{dateWeek.getDate() + 7}</h1>
      </div>
      
    );
} 

export default CalendarSelect;