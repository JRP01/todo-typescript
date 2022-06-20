import React, { useState } from "react";
import { AddTodoForm } from "./AddTodoForm/AddTodoFrom";
import { TodoList } from "./TodoList/TodoList";

const initialTodos: Array<Todo> = [
  { text: "Stand Up", completed: true },
  { text: "Mentor meeting", completed: false },
  { text: "Walk dog", completed: false },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (seletedTodo) => {
    const newToDos = todos.map((todo) => {
      if (todo === seletedTodo) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newToDos);
  };

  const addTodo: AddTodo = (newTodo) => {
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
    }
  };

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </>
  );
};

export default App;
