import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import STYLES from "./MonthPicker.module.css";

const MonthPicker = ({ goToPreviousMonth, goToNextMonth, month }) => (
  <div className={STYLES.container}>
    <MdKeyboardArrowLeft onClick={goToPreviousMonth} />
    {month}
    <MdKeyboardArrowRight onClick={goToNextMonth} />
  </div>
);

export default MonthPicker;
