import { useState } from "react";
import { useAppStore } from "../store/use-app-store";
import { Error, Label } from "@progress/kendo-react-labels";
import { Input } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";
import { StackLayout } from "@progress/kendo-react-layout";
import { useTodosStore } from "../store/use-todos-store";
import { uniqueId } from "../utils/unique-id";
import { useCalendarStore } from "../store/use-calendar-store";

export const AddTodoForm = () => {
  const [todo, setTodo] = useState({
    task: "",
    description: "",
    isDone: false,
  });

  const [error, setError] = useState({});

  const activeDate = useCalendarStore((state) => state.activeDate);
  const setActiveDialog = useAppStore((state) => state.setActiveDialog);
  const { addTodo } = useTodosStore((state) => state);

  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todo.task) {
      setError({ task: "Task is required" });
      return;
    }

    addTodo(activeDate, { ...todo, id: uniqueId() });

    setActiveDialog(null);
  };

  const closeDialog = () => {
    setActiveDialog(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Label editorId="task" className="label">
          Task
        </Label>
        <Input
          id="task"
          name="task"
          onChange={handleChange}
          value={todo.task}
          className="input"
        />
        {error.task && <Error id={"task"}>{error.task}</Error>}
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
