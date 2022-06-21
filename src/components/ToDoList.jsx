import { Checkbox, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';

const ToDoList = ({ todos }) => {
  return (
    <div className="todo-list">
      <List>
        {todos.map((todo, index) => {
          return (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Checkbox disableRipple/>
                </ListItemIcon>
                <ListItemText primary={todo} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default ToDoList;

