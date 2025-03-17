import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const INITIAL_STATE = {
  todos: {},
};

export const useTodosStore = create(
  immer((set) => ({
    // state
    ...INITIAL_STATE,

    // setters
    addTodo: (date, todo) =>
      set((state) => {
        state.todos[date] ??= [];
        state.todos[date].push(todo);
      }),
    updateTodo: (date, todo) =>
      set((state) => {
        state.todos[date] = state.todos[date].map((t) =>
          t.id === todo.id ? todo : t
        );
      }),
    removeTodo: (date, todo) =>
      set((state) => state.todos[date].filter((t) => t.id !== todo.id)),
  }))
);
