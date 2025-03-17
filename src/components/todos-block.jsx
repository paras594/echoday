import { Card, CardBody, StackLayout } from "@progress/kendo-react-layout";
import React from "react";
import { CardHeader } from "./card-header";
import { listUnorderedIcon } from "@progress/kendo-svg-icons";
import { TodoCard } from "./todo-card";
import { useTodosStore } from "../store/use-todos-store";
import { useCalendarStore } from "../store/use-calendar-store";

export const TodosBlock = ({ onActionClick }) => {
  const activeDate = useCalendarStore((state) => state.activeDate);
  const todos = useTodosStore((state) => state.todos);
  const updateTodo = useTodosStore((state) => state.updateTodo);

  const onDone = (todo) => {
    const newTod = { ...todo, isDone: !todo.isDone };
    console.log({ newTod });
    updateTodo(activeDate, { ...todo, isDone: !todo.isDone });
  };

  return (
    <Card className="full-height">
      <CardHeader
        title="Todos"
        icon={listUnorderedIcon}
        onActionClick={onActionClick}
      />
      <CardBody className="scrollable">
        <StackLayout orientation="vertical" gap={4}>
          {todos?.[activeDate]?.map((todo) => (
            <TodoCard key={todo.id} todo={todo} onDone={onDone} />
          ))}
        </StackLayout>
      </CardBody>
    </Card>
  );
};
