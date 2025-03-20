import { Button } from "@progress/kendo-react-buttons";
import { TextArea } from "@progress/kendo-react-inputs";
import { StackLayout } from "@progress/kendo-react-layout";
import { useState } from "react";
import { useAppStore } from "../store/use-app-store";
import { useCalendarStore } from "../store/use-calendar-store";
import { uniqueId } from "../utils/unique-id";
import { useNotesStore } from "../store/use-notes-store";

export const AddNoteForm = () => {
  const [value, setValue] = useState("");
  const setActiveDialog = useAppStore((state) => state.setActiveDialog);
  const activeDate = useCalendarStore((state) => state.activeDate);
  const { addNote } = useNotesStore((state) => state);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) return;

    addNote(activeDate, { id: uniqueId(), text: value });

    setActiveDialog(null);
  };

  const closeDialog = () => {
    setActiveDialog(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextArea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        resizable="none"
        style={{ height: 400, paddingTop: 8, paddingBottom: 8 }}
        placeholder="Start writing your note..."
      />
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
