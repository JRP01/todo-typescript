import React, { ChangeEvent, FormEvent, useState } from "react";

interface AddTodoFormProps {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(newTodo);
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form >
      <input type="text" onChange={handleChange} />
      <button onClick={handleSubmit} type="submit">Add todo</button>
    </form>
  );
};
