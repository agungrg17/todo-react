import React from 'react';
import { useState } from 'react';

const ToDoForm = ({ handleSubmit }) => {
  const [todo, setTodo] = useState(" ");

  const submitHandler = (todo) => {
    handleSubmit(todo);
    setTodo(" ");
  }

  return (
    <div className='todo-form'>
      <p>~ Today I need to ~</p>
      <span>
        <input 
        value={todo} 
        onChange={(event) => setTodo(event.target.value)}/>
        <input 
        value={todo} 
        onChange={(event) => setTodo(event.target.value)}/>
        <button 
        onClick={() => submitHandler(todo)}>
          Submit</button>
      </span>
      <p> {todo} </p>
    </div>
  );
};

export default ToDoForm;
