import { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Box,
  Divider
} from '@mui/material';
import AdminNav from '../AdminNav';

// Styled component for dark navy icons
const DarkNavyIcon = styled('i')({
  
  color: '#1d4f67', // Dark navy color
  fontSize: '18px', // Adjust icon size if needed
  cursor: 'pointer',
  marginRight: '16px',
});

const ContactMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/contacts')
      .then(response => {
        console.log('API Response:', response.data);
        const sortedMessages = Array.isArray(response.data)
          ? response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          : [];
        setMessages(sortedMessages);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching messages');
        setLoading(false);
      });
  }, []);

  const handleClickOpen = (message) => {
    setSelectedMessage(message);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
    setSelectedMessage(null);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/contacts/${id}`);
      setMessages(prevMessages => prevMessages.filter(msg => msg._id !== id));
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <AdminNav />
      <div style={{ backgroundColor: '#e6f0ff', minHeight: '65vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom sx={{ color: '#1d4f67', textAlign: 'center' }}>
            Contact Messages
          </Typography>
          <Paper style={{ padding: 16 }}>
            <TableContainer>
              <Table>
                <TableHead sx={{ backgroundColor: '#1d4f67' }}>
                  <TableRow>
                    <TableCell sx={{ color: 'white' }}>Name</TableCell>
                    <TableCell sx={{ color: 'white' }}>Email</TableCell>
                    <TableCell sx={{ color: 'white' }}>Phone</TableCell>
                    <TableCell sx={{ color: 'white' }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {messages.map((msg) => (
                    <TableRow key={msg._id}>
                      <TableCell>{msg.name}</TableCell>
                      <TableCell>{msg.email}</TableCell>
                      <TableCell>{msg.phone}</TableCell>
                      <TableCell>
                        <DarkNavyIcon 
                          className="fas fa-eye" 
                          onClick={() => handleClickOpen(msg)} 
                          title="View"
                        /> {/* Font Awesome eye icon */}
                        <DarkNavyIcon 
                          className="fas fa-trash" 
                          onClick={() => handleDelete(msg._id)} 
                          title="Delete"
                        /> {/* Font Awesome trash icon */}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Container>
      </div>

      {/* Dialog to display message details */}
      <Dialog open={openDialog} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ backgroundColor: '#1d4f67', color: 'white' }}>
          Contact Details
        </DialogTitle>
        <DialogContent>
          {selectedMessage && (
            <Box sx={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '16px' }}>
              <Typography variant="h6" sx={{ color: '#1d4f67' }}>Name:</Typography>
              <Typography variant="body1">{selectedMessage.name}</Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="h6" sx={{ color: '#1d4f67' }}>Email:</Typography>
              <Typography variant="body1">{selectedMessage.email}</Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="h6" sx={{ color: '#1d4f67' }}>Phone:</Typography>
              <Typography variant="body1">{selectedMessage.phone}</Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="h6" sx={{ color: '#1d4f67' }}>Message:</Typography>
              <Typography variant="body1">{selectedMessage.message}</Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ContactMessages;
