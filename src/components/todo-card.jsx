import React from "react";
import { Typography } from "@progress/kendo-react-common";
import { Checkbox } from "@progress/kendo-react-inputs";

import "../styles/todo-card.scss";
import { trashIcon } from "@progress/kendo-svg-icons";
import { Button } from "@progress/kendo-react-buttons";

export const TodoCard = ({ todo, onDone, onDelete }) => {
  return (
    <div className="todo-card">
      <Checkbox
        id={todo.id}
        checked={todo.isDone}
        rounded={"small"}
        size={"large"}
        onChange={() => onDone(todo)}
      />
      <div style={{ flex: 1 }}>
        <Typography.p
          fontSize="large"
          style={{
            marginBottom: 0,
            textDecoration: todo.isDone ? "line-through" : "none",
          }}
        >
          {todo.task}
        </Typography.p>
      </div>
      <Button
        onClick={() => onDelete(todo)}
        svgIcon={trashIcon}
        themeColor={"error"}
        fillMode={"flat"}
      />
    </div>
  );
};
