import React from "react";
import ReactDOM from "react-dom";
import { create } from "react-test-renderer";
import CalendarDays from "./CalendarDays";

describe("CalendarDays", () => {
  let daysInMonth = jest.fn().mockImplementation(value => 31);
  let firstDayOfMonth = jest.fn().mockImplementation(value => 2);

  it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(
      <CalendarDays
        daysInMonth={daysInMonth}
        firstDayOfMonth={firstDayOfMonth}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders a calendar for 31 days starting on Tuesday", () => {
    const Days = create(
      <CalendarDays
        daysInMonth={daysInMonth}
        firstDayOfMonth={firstDayOfMonth}
      />
    );

    expect(Days.toJSON()).toMatchSnapshot();
  });
});
