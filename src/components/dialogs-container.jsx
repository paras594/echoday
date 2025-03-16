import React from "react";
import { useAppStore } from "../store/use-app-store";
import { Dialog } from "@progress/kendo-react-dialogs";
import { AddTodoForm } from "./add-todo-form";

const TITLES_MAP = {
  "add-todo": "Add todo",
};

export const DialogsContainer = () => {
  const { activeDialog, setActiveDialog } = useAppStore((state) => state);

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
    >
      {activeDialog === "add-todo" && <AddTodoForm />}
    </Dialog>
  );
};
