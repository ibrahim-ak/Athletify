import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const DeleteButton = ({ contactId, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/contacts/${contactId}`);
      onDelete(contactId); // Notify parent component of the successful deletion
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  return (
    <IconButton onClick={handleDelete} color="error">
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteButton;
