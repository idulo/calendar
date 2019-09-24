import React from "react";
import moment from "moment";

import STYLES from "./ReminderForm.module.css";

class ReminderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
    event.preventDefault();
  };

  handleSubmit = event => {
    this.setState({ value: "" });
    this.props.addReminder(this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <div className={STYLES.container}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Create reminder for{" "}
            {moment()
              .month(this.props.selectedMonth)
              .date(this.props.selectedDay)
              .format("Do MMMM")}
            <input
              type="text"
              id="reminder"
              name="reminder"
              required
              value={this.state.value}
              placeholder="What is the reminder?"
              onChange={this.handleChange}
            />
          </label>
          <input
            className={STYLES.reminderForm}
            type="submit"
            value="Save reminder"
          />
        </form>
      </div>
    );
  }
}

export default ReminderForm;
