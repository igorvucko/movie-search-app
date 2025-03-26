import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createList } from '../store/movieListsSlice';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import { Button } from '@mui/material';

 const CreateListForm: React.FC = () => {
  const [listName, setListName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (listName.trim()) {
      dispatch(createList({ id: uuidv4(), name: listName.trim() }));
      toast.success(`${listName} list is created!`);
      setListName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={listName}
        onChange={(e) => setListName(e.target.value)}
        placeholder="Enter list name"
        required
      />
      <Button
      variant='contained'
      style={{marginLeft:"20px"}}
      type='submit'>
        Create List
      </Button>

    </form>
  );
};

export default CreateListForm;