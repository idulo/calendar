import React from "react";

import STYLES from "./CalendarTable.module.css";

const CalendarCell = ({ className, day }) => (
  <td className={className}>{day}</td>
);

const CalendarRow = ({ cells }) => <tr>{cells}</tr>;

const CalendarTable = ({ daysInMonth, firstDayOfMonth }) => {
  let calendarRow = [];
  let calendarDays = [];
  let day = 1;

  if (firstDayOfMonth > 0) {
    for (let emptyDay = 1; emptyDay <= firstDayOfMonth; emptyDay++) {
      calendarRow.push(<CalendarCell className={STYLES.emptyCell} />);
    }
  }

  while (day <= daysInMonth) {
    if (calendarRow.length === 7) {
      calendarDays.push(
        <CalendarRow
          rowCount={`row-${calendarDays.length + 1}`}
          cells={calendarRow}
        />
      );
      calendarRow = [];
    } else {
      calendarRow.push(
        <CalendarCell
          className={STYLES.dayCell}
          key={`cell-${day}`}
          day={day}
        />
      );
      day++;
    }
  }

  if (calendarRow.length > 0) {
    calendarDays.push(
      <CalendarRow key={`row-${calendarDays.length + 1}`} cells={calendarRow} />
    );
  }

  return calendarDays;
};

export default CalendarTable;
