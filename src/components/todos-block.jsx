import { Card, CardBody, StackLayout } from "@progress/kendo-react-layout";
import React from "react";
import { CardHeader } from "./card-header";
import { listUnorderedIcon } from "@progress/kendo-svg-icons";
import { TodoCard } from "./todo-card";
import { useTodosStore } from "../store/use-todos-store";
import { useCalendarStore } from "../store/use-calendar-store";
import todoListIllustration from "../assets/todo-list-illustration.svg";
import { NoDataBlock } from "./no-data-block";

export const TodosBlock = ({ onActionClick }) => {
  const activeDate = useCalendarStore((state) => state.activeDate);
  const todos = useTodosStore((state) => state.todos);
  const updateTodo = useTodosStore((state) => state.updateTodo);
  const removeTodo = useTodosStore((state) => state.removeTodo);

  const onDone = (todo) => {
    updateTodo(activeDate, { ...todo, isDone: !todo.isDone });
  };

  const onDelete = (todo) => {
    console.log({ todo });
    removeTodo(activeDate, todo);
  };

  return (
    <Card className="full-height">
      <CardHeader
        title="Todos"
        icon={listUnorderedIcon}
        onActionClick={onActionClick}
      />
      <CardBody className="scrollable">
        {!todos?.[activeDate]?.length ? (
          <NoDataBlock
            illustration={todoListIllustration}
            caption="Got something in mind? Add it to your list!"
          />
        ) : (
          <StackLayout orientation="vertical" gap={4}>
            {todos?.[activeDate]?.map((todo) => (
              <TodoCard
                key={todo.id}
                todo={todo}
                onDone={onDone}
                onDelete={onDelete}
              />
            ))}
          </StackLayout>
        )}
      </CardBody>
    </Card>
  );
};
