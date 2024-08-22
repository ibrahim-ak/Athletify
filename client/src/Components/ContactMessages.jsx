import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogActions, DialogContent, DialogTitle, Button,Box, Grid, Card, CardContent, Divider } from '@mui/material';
import AdminNav from './AdminNav';

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


  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <AdminNav />
      <div style={{ backgroundColor: '#e6f0ff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                  </TableRow>
                </TableHead>
                <TableBody>
                  {messages.map((msg) => (
                    <TableRow key={msg._id} onClick={() => handleClickOpen(msg)} style={{ cursor: 'pointer' }}>
                      <TableCell>{msg.name}</TableCell>
                      <TableCell>{msg.email}</TableCell>
                      <TableCell>{msg.phone}</TableCell>
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
