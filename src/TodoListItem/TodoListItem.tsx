import React from "react";
import "./TodoListItem.css";

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label className={todo.completed ? "complete" : undefined}>
        <input type="checkbox" checked={todo.completed} onChange={() =>toggleTodo(todo)} />
        {todo.text}
      </label>
    </li>
  );
};
