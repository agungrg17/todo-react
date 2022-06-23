import React from 'react';
import { Checkbox, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

const ToDoList = ({ todos, handleCheckbox }) => {

  return (
    <div className="todo-list">
      <List>
        {todos.map((todo) => {
          return (
            <ListItem key={todo.id} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Checkbox 
                    checked={todo.complete} 
                    onChange={() => handleCheckbox(todo.id)} 
                    disableRipple />
                </ListItemIcon>
                <ListItemText 
                  primary={todo.task}
                  className={todo.complete ? "complete" : ""}
                  // className={todo.complete && "complete"}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default ToDoList;
