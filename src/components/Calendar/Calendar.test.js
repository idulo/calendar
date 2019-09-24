import React from "react";
import ReactDOM from "react-dom";
import { create } from "react-test-renderer";
import Calendar from "./Calendar";

describe("DaysOfWeek", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<Calendar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders correctly for current month", () => {
    const MonthPicker = create(<Calendar />);

    expect(MonthPicker.toJSON()).toMatchSnapshot();
  });
});
