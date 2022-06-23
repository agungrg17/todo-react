import React, { useState } from 'react';
import {Button} from '@mui/material';

import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';

const ToDo = () => {
  const [todos, setTodos] = useState([
    {id: 1, task: "menyapu", complete: false},
    {id: 2, task: "mengepel", complete: true}
  ]);

  const handleClick = (todo) => {
    // NEVER mutate state directly, like using push() or =
    // Treat state as if it were immutable, so you replace the whole array
    // ...todos is the spread operator, it spreads the array
    const newTodo = {
      id: todos.length + 1, 
      task: todo, 
      complete: false}
    setTodos([...todos, newTodo]);
  };

  const handleCheckbox = (id) => {
    const newTodos = [...todos];
    const index  = newTodos.findIndex(todo => todo.id === id);

    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos)
    // alert (`checkbox index ${id} is checked!`)
  }

  const removeCompleted = () => {
    const newTodos = todos.filter(todo => todo.complete === false)
    setTodos(newTodos)
  }

  return (
    <div className="todo">
      <h2 className="title">To-Do List</h2>
      <ToDoForm handleClick={handleClick} />
      <ToDoList todos={todos} handleCheckbox={handleCheckbox} />
      <Button variant='outlined' color='error' onClick={removeCompleted}>Remove Complete Task</Button>
    </div>
  );
};

export default ToDo;
