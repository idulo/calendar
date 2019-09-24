import React from "react";
import moment from "moment";

import DaysOfWeek from "./DaysOfWeek";
import CalendarTable from "./CalendarTable";

import STYLES from "./CalendarDays.module.css";

class CalendarDays extends React.Component {
  firstDayOfMonth = momentDate =>
    moment(momentDate)
      .startOf("month")
      .weekday();

  daysInMonth = momentDate => moment(momentDate).daysInMonth();

  render() {
    const date = this.props.date;

    return (
      <div className={STYLES.container}>
        <table cellPadding="2" cellSpacing="2" className={STYLES.calendarDays}>
          <thead>
            <DaysOfWeek />
          </thead>
          <tbody>
            <CalendarTable
              daysInMonth={this.daysInMonth(date)}
              firstDayOfMonth={this.firstDayOfMonth(date)}
              toggleReminder={this.props.toggleReminder}
            />
          </tbody>
        </table>
      </div>
    );
  }
}

export default CalendarDays;
