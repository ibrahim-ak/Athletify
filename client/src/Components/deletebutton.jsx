import axios from 'axios';
import Button from '@mui/material/Button';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { styled } from '@mui/material/styles';

// Create a styled icon component with dark navy color
const DarkNavyTrashIcon = styled('i')({
  color: '#1d4f67', // Dark navy color
});

const DeleteButton = ({ academyId, onDelete }) => {
  const deleteAcademy = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/academy/${academyId}`);
      onDelete(academyId); // Call the onDelete callback with the ID of the deleted academy
    } catch (error) {
      console.error("Error deleting academy:", error);
    }
  };

  return (
    <Button 
      onClick={deleteAcademy} 
      className="btn btn-outline-danger"
      startIcon={<DarkNavyTrashIcon className="fas fa-trash" />} // Apply dark navy color to the icon
    >
    </Button>
  );
};

export default DeleteButton;
