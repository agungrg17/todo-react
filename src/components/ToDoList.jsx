// import React from 'react';

// const ToDoList = ( {todos} ) => {

//   return (
//     <div className='todo-list'>
//       <ul>
//         {
//           todos.map((item) => {
//             return <li key={item}> {item} </li>
//           })
//         }
//       </ul>
//     </div>
//   );
// };

// export default ToDoList;

import React from "react";

// Di sini tidak menggunakan todos lagi

// Di sini declare ada props yang ingin digunakan
function ToDoList(props) {
  return (
    <>
      <h3 className="todo-list">Listing ToDo List</h3>
      <ul>
        {/* Di sini kita menggunakan props dengan nama propsTodos */}
        {/* Hasil lemparan dari App.js */}
        {props.propsTodos.map((todo) => {
          return <li key={todo}>{todo}</li>;
        })}
      </ul>
    </>
  );
}

export default ToDoList;

