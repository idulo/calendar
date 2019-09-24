import React from "react";
import moment from "moment";

import STYLES from "./DaysOfWeek.module.css";

const DaysOfWeek = () => {
  const daysOfWeek = moment
    .weekdaysShort()
    .map((day, i) => <td key={i}>{day}</td>);

  return <tr className={STYLES.container}>{daysOfWeek}</tr>;
};

export default DaysOfWeek;
