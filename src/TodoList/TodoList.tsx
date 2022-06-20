import React from "react";
import { TodoListItem } from "../TodoListItem/TodoListItem";

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo: Todo, index: number) => (
        <TodoListItem todo={todo} toggleTodo={toggleTodo} key={index} />
      ))}
    </ul>
  );
};
