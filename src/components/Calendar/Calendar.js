import React from "react";
import moment from "moment";

import MonthPicker from "../MonthPicker";
import CalendarDays from "../CalendarDays";
import STYLES from "./Calendar.module.css";

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment()
    };
  }

  currentMonthAndYear = () => moment(this.state.date).format("MMMM YYYY");

  goToPreviousMonth = () =>
    this.setState({
      date: moment(this.state.date).subtract(1, "months")
    });

  goToNextMonth = () =>
    this.setState({
      date: moment(this.state.date).add(1, "months")
    });

  firstDayOfMonth = () =>
    moment(this.state.date)
      .startOf("month")
      .weekday();

  daysInMonth = () => moment(this.state.date).daysInMonth();

  render() {
    return (
      <div className={STYLES.container}>
        <div className={STYLES.calendarContainer}>
          <MonthPicker
            goToNextMonth={this.goToNextMonth}
            goToPreviousMonth={this.goToPreviousMonth}
            month={this.currentMonthAndYear()}
          />
          <CalendarDays
            daysInMonth={this.daysInMonth}
            firstDayOfMonth={this.firstDayOfMonth}
            toggleReminder={this.toggleReminder}
          />
        </div>
      </div>
    );
  }
}

export default Calendar;
