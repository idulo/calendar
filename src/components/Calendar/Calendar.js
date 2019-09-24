import React from "react";
import moment from "moment";

import MonthPicker from "../MonthPicker";
import CalendarDays from "../CalendarDays";
import ReminderForm from "../ReminderForm";
import ReminderEntry from "../ReminderEntry";
import STYLES from "./Calendar.module.css";

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
      showReminderWindow: false,
      selectedDay: 0,
      reminders: []
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

  toggleReminder = day =>
    this.setState({
      showReminderWindow: !this.state.showReminderWindow,
      selectedDay: day
    });

  addReminder = reminderText => {
    this.state.reminders.push({
      month: this.state.date.month(),
      day: this.state.selectedDay,
      text: reminderText
    });
    this.toggleReminder();

    console.log("Reminders list: ");
    console.log(this.state.reminders);
  };

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
            date={this.state.date}
            addReminder={this.addReminder}
            toggleReminder={this.toggleReminder}
          />
        </div>
        <div className={STYLES.sidepanel}>
          {this.state.showReminderWindow ? (
            <ReminderForm
              addReminder={this.addReminder}
              selectedDay={this.state.selectedDay}
              selectedMonth={this.state.date.month()}
            />
          ) : null}
          {this.state.reminders.map(reminder => (
            <ReminderEntry reminder={reminder} />
          ))}
        </div>
      </div>
    );
  }
}

export default Calendar;
