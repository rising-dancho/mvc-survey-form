import { useState } from 'react';

export const useTodoModel = () => {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  function removeTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return { todos, addTodo, removeTodo };
};
