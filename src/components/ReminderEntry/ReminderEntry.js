import React from "react";
import moment from "moment";

import STYLES from "./ReminderEntry.module.css";

const ReminderEntry = ({ reminder }) => (
  <div className={STYLES.container}>
    On{" "}
    {moment()
      .date(reminder.day)
      .month(reminder.month)
      .format("Do MMMM")}{" "}
    you should: {reminder.text}
  </div>
);

export default ReminderEntry;
