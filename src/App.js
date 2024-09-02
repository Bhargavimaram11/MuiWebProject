// src/App.js
import React, { useState } from 'react';
import { Container, Button, Typography } from '@mui/material';
import ItemList from './components/ItemList';
import AddEditItem from './components/AddEditItem';

const App = () => {
  const [items, setItems] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(null);

  const handleOpenDialog = (item) => {
    setItemToEdit(item);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setItemToEdit(null);
  };

  const handleSaveItem = (name) => {
    if (itemToEdit !== null) {
      const updatedItems = items.map((item, index) =>
        index === itemToEdit.index ? { name } : item
      );
      setItems(updatedItems);
    } else {
      setItems([...items, { name }]);
    }
    handleCloseDialog();
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        CRUD Application with Material-UI
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOpenDialog(null)}
      >
        Add Item
      </Button>
      <ItemList items={items} onEdit={(index) => handleOpenDialog({ index, name: items[index].name })} onDelete={handleDeleteItem} />
      <AddEditItem
        open={openDialog}  
        onClose={handleCloseDialog}
        onSave={handleSaveItem}
        itemToEdit={itemToEdit}
      />
    </Container>
  );
};

export default App;
