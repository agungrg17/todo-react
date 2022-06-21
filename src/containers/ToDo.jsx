import React from 'react';
import { useState } from 'react';

import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';

const ToDo = () => {

  const [todos, setTodos] = useState(["Menyapu", "Mengepel"]);

  const handleSubmit = (todo) => {
    setTodos([...todos, todo]);
    console.log(todos);
    // alert("New Todo:" + todos);
  }
  

  return (
    <div className='todo'>
      <h2 className='title'>To-Do List</h2>
      <ToDoForm handleSubmit={handleSubmit}/>
      <ToDoList todos={todos} />
    </div>
  );
};

export default ToDo;
