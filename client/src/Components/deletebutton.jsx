import axios from 'axios';
import Button from '@mui/material/Button';

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
      variant="contained" 
      sx={{ backgroundColor: '#FF0000', color: '#FFFFFF' }} 
      onClick={deleteAcademy}
    >
      Delete
    </Button>
  );
};

export default DeleteButton;
