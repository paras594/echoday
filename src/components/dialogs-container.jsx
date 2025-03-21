import React from "react";
import { useAppStore } from "../store/use-app-store";
import { Dialog } from "@progress/kendo-react-dialogs";
import { AddTodoForm } from "./add-todo-form";
import { AddReminderForm } from "./add-reminder-form";
import { AddNoteForm } from "./add-note-form";

const TITLES_MAP = {
  "add-todo": "Add todo",
  "add-reminder": "Add reminder",
  "add-note": "Add note",
  "edit-note": "Edit note",
};

export const DialogsContainer = () => {
  const { activeDialog, setActiveDialog, meta } = useAppStore((state) => state);

  const closeDialog = () => {
    setActiveDialog(null);
  };

  if (!activeDialog) {
    return null;
  }

  return (
    <Dialog
      title={TITLES_MAP[activeDialog]}
      onClose={closeDialog}
      autoFocusedElement="#active"
      minWidth={500}
    >
      {activeDialog === "add-todo" && <AddTodoForm />}
      {activeDialog === "add-reminder" && <AddReminderForm />}
      {(activeDialog === "add-note" || activeDialog === "edit-note") && (
        <AddNoteForm edit={activeDialog === "edit-note"} note={meta.note} />
      )}
    </Dialog>
  );
};
