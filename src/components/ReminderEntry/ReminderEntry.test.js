import React from "react";
import ReactDOM from "react-dom";
import { create } from "react-test-renderer";
import ReminderEntry from "./ReminderEntry";

describe("ReminderList", () => {
  const reminderEntry = { month: 1, day: 1, text: "Merry Christmas" };

  const reminder = it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<ReminderEntry reminder={reminderEntry} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders correctly a list of reminders", () => {
    const Picker = create(<ReminderEntry reminder={reminderEntry} />);

    expect(Picker.toJSON()).toMatchSnapshot();
  });
});
