import { useState } from "react";
import { useAppStore } from "../store/use-app-store";
import { Error, Label } from "@progress/kendo-react-labels";
import { Input, TextArea } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";
import { StackLayout } from "@progress/kendo-react-layout";
import { uniqueId } from "../utils/unique-id";
import { useCalendarStore } from "../store/use-calendar-store";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { useRemindersStore } from "../store/use-reminders-store";
import { isValidLink } from "../utils/is-valid-link";

const defaultItem = { text: "Select Type" };

export const AddReminderForm = () => {
  const [reminder, setReminder] = useState({
    title: "",
    type: defaultItem, // "event", "reminder", "meeting"
    startTime: "",
    endTime: "",
    location: "",
    link: "",
    description: "",
  });

  const [error, setError] = useState({});

  const activeDate = useCalendarStore((state) => state.activeDate);
  const setActiveDialog = useAppStore((state) => state.setActiveDialog);
  const { addReminder } = useRemindersStore((state) => state);

  const handleChange = (e) => {
    setReminder({ ...reminder, [e.target.name]: e.target.value });
  };

  const handleTypeChange = (e) => {
    setReminder({ ...reminder, type: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = {};

    if (!reminder.title) {
      validation.title = "Title is required";
    }

    if (!reminder.type || !reminder.type.id) {
      validation.type = "Type is required";
    }
    if (!reminder.startTime) {
      validation.startTime = "Start Time is required";
    }
    if (!reminder.endTime) {
      validation.endTime = "End Time is required";
    }

    if (reminder.link && !isValidLink(reminder.link)) {
      validation.link = "Link is invalid";
    }

    if (Object.keys(validation).length > 0) {
      setError(validation);
      return;
    }

    addReminder(activeDate, { ...reminder, id: uniqueId() });

    setActiveDialog(null);
  };

  const closeDialog = () => {
    setActiveDialog(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group" style={{ marginBottom: 24 }}>
        <DropDownList
          style={{ width: 200 }}
          data={[
            { id: "event", text: "Event" },
            { id: "reminder", text: "Reminder" },
            { id: "meeting", text: "Meeting" },
          ]}
          dataItemKey="id"
          textField="text"
          fillMode={"solid"}
          name="type"
          required
          value={reminder.type}
          onChange={handleTypeChange}
        />
        {error.type && <Error id={"type"}>{error.type}</Error>}
      </div>

      <div className="input-group">
        <Label editorId="title" className="label">
          Title*
        </Label>
        <Input
          id="title"
          name="title"
          onChange={handleChange}
          value={reminder.title}
          className="input"
        />
        {error.title && <Error id={"title"}>{error.title}</Error>}
      </div>

      <div style={{ display: "flex", gap: 16 }}>
        <div className="input-group">
          <Label
            editorId="startTime"
            className="label"
            style={{ marginRight: 16, display: "block" }}
          >
            Start Time
          </Label>
          <input
            id="startTime"
            name="startTime"
            type="time"
            onChange={handleChange}
            value={reminder.startTime}
            style={{ width: "auto" }}
            className="input k-input k-input-md k-rounded-md k-input-solid"
          />
          {error.startTime && <Error id={"startTime"}>{error.startTime}</Error>}
        </div>

        <div className="input-group">
          <Label
            editorId="endTime"
            className="label"
            style={{ marginRight: 16, display: "block" }}
          >
            End Time
          </Label>
          <input
            id="endTime"
            name="endTime"
            type="time"
            onChange={handleChange}
            value={reminder.endTime}
            style={{ width: "auto" }}
            className="input k-input k-input-md k-rounded-md k-input-solid"
          />
          {error.endTime && <Error id={"endTime"}>{error.endTime}</Error>}
        </div>
      </div>

      <StackLayout gap={16}>
        <div className="input-group">
          <Label editorId="location" className="label">
            Location
          </Label>
          <Input
            id="location"
            name="location"
            onChange={handleChange}
            value={reminder.location}
            className="input"
          />
          {error.location && <Error id={"location"}>{error.location}</Error>}
        </div>

        <div className="input-group">
          <Label editorId="link" className="label">
            Link
          </Label>
          <Input
            id="link"
            name="link"
            onChange={handleChange}
            value={reminder.link}
            className="input"
          />
          {error.link && <Error id={"link"}>{error.link}</Error>}
        </div>
      </StackLayout>

      <div className="input-group">
        <Label editorId="description" className="label">
          Description
        </Label>
        <TextArea
          id="description"
          name="description"
          onChange={handleChange}
          value={reminder.description}
          rows={3}
        />
        {error.description && (
          <Error id={"description"}>{error.description}</Error>
        )}
      </div>

      <div style={{ height: "24px" }} />
      <StackLayout gap={12}>
        <Button type="button" onClick={closeDialog}>
          Cancel
        </Button>
        <Button type="submit" themeColor="primary">
          Save
        </Button>
      </StackLayout>
    </form>
  );
};
