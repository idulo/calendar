import React from "react";

import STYLES from "./CalendarTable.module.css";

const EmptyCell = () => <td className={STYLES.emptyCell}></td>;

const DayCell = ({ day, toggleReminder }) => (
  <td className={STYLES.dayCell} onClick={() => toggleReminder(day)}>
    {day}
  </td>
);

const CalendarRow = ({ content }) => <tr>{content}</tr>;

const CalendarTable = ({ daysInMonth, firstDayOfMonth, toggleReminder }) => {
  let calendarRow = [];
  let calendarDays = [];
  let day = 1;

  for (let emptyDay = 1; emptyDay <= firstDayOfMonth; emptyDay++) {
    calendarRow.push(<EmptyCell key={`empty-${emptyDay}`} />);
  }

  while (day <= daysInMonth) {
    if (calendarRow.length === 7) {
      calendarDays.push(
        <CalendarRow
          key={`row-${calendarDays.length + 1}`}
          content={calendarRow}
        />
      );
      calendarRow = [];
    } else {
      calendarRow.push(
        <DayCell
          key={`cell-${day}`}
          toggleReminder={toggleReminder}
          day={day}
        />
      );
      day++;
    }
  }

  if (calendarRow.length > 0) {
    calendarDays.push(
      <CalendarRow
        key={`row-${calendarDays.length + 1}`}
        content={calendarRow}
      />
    );
  }

  return calendarDays;
};

export default CalendarTable;
