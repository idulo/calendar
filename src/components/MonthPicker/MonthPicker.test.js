import React from "react";
import ReactDOM from "react-dom";
import { create } from "react-test-renderer";
import MonthPicker from "./MonthPicker";

describe("MonthPicker", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<MonthPicker />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders correctly for September 2019", () => {
    const goToPreviousMonth = jest.fn();
    const goToNextMonth = jest.fn();

    const Picker = create(
      <MonthPicker
        month="September 2019"
        goToPreviousMonth={goToPreviousMonth}
        goToNextMonth={goToNextMonth}
      />
    );

    expect(Picker.toJSON()).toMatchSnapshot();
  });
});
