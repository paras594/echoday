import React from "react";
import { Typography } from "@progress/kendo-react-common";
import { Checkbox } from "@progress/kendo-react-inputs";

import "../styles/todo-card.scss";

export const TodoCard = ({ todo, onDone }) => {
  return (
    <div className="todo-card">
      <Checkbox
        id={todo.id}
        checked={todo.isDone}
        rounded={"small"}
        size={"large"}
        onChange={() => onDone(todo)}
      />
      <Typography.p
        fontSize="medium"
        style={{
          marginBottom: 0,
          textDecoration: todo.isDone ? "line-through" : "none",
        }}
      >
        {todo.task}
      </Typography.p>
    </div>
  );
};
