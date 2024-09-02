// src/components/AddEditItem.js
import React, { useState, useEffect } from 'react';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const AddEditItem = ({ open, onClose, onSave, itemToEdit }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (itemToEdit !== null) {
      setName(itemToEdit.name);
    }
  }, [itemToEdit]);

  const handleSave = () => {
    onSave(name);
    setName('');
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{itemToEdit ? 'Edit Item' : 'Add Item'}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Item Name"
          fullWidth
          variant="standard"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave}>{itemToEdit ? 'Update' : 'Add'}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddEditItem;
