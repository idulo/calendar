import React from "react";
import ReactDOM from "react-dom";
import { create } from "react-test-renderer";
import CalendarTable from "./CalendarTable";

describe("CalendarTable", () => {
  const toggleReminder = jest.fn();

  it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(
      <CalendarTable
        toggleReminder={toggleReminder}
        daysInMonth={30}
        firstDayOfMonth={2}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders correctly with all days of week", () => {
    const Week = create(
      <CalendarTable
        toggleReminder={toggleReminder}
        daysInMonth={30}
        firstDayOfMonth={2}
      />
    );

    expect(Week.toJSON()).toMatchSnapshot();
  });
});
