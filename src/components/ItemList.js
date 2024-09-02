// src/components/ItemList.js
import React from 'react';
import { List, ListItem, ListItemText, IconButton, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const ItemList = ({ items, onEdit, onDelete }) => {
  return (
    <List>
      {items.map((item, index) => (
        <div key={index}>
          <ListItem>
            <ListItemText primary={item.name} />
            <IconButton edge="end" aria-label="edit" onClick={() => onEdit(index)}>
              <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete" onClick={() => onDelete(index)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
          <Divider />
        </div>
      ))}
    </List>
  );
};

export default ItemList;
