import React from "react";
import ReactDOM from "react-dom";
import { create } from "react-test-renderer";
import ReminderForm from "./ReminderForm";

describe("ReminderForm", () => {
  const selectedDay = jest.fn().mockImplementation(3);
  const selectedMonth = jest.fn().mockImplementation(8);

  it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(
      <ReminderForm selectedDay={selectedDay} selectedMonth={selectedMonth} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders correctly with selected day and month", () => {
    const Picker = create(
      <ReminderForm selectedDay={selectedDay} selectedMonth={selectedMonth} />
    );

    expect(Picker.toJSON()).toMatchSnapshot();
  });
});
