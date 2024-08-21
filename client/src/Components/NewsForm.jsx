import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Box
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function NewsForm() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [academyId, setAcademyId] = useState('')
  const navigate = useNavigate()


  // Mocking session-based academy ID
//   const academyId = sessionStorage.getItem('academyId') || '12345'; // Replace with actual session retrieval

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/news', { 
      Title: title,  // Ensure this matches your schema field name
      Content: content,  // Ensure this matches your schema field name
      Image: imageUrl,  // Ensure this matches your schema field name
      Academy: academyId  // Ensure this matches your schema field name
    })
    .then(res => {
        console.log(res.data);
        navigate("/");
    })
    .catch(err => {
        console.error(err.response ? err.response.data : err.message);
    });
    setOpen(false); // Close the dialog after submission
};


  return (
    <Box>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add News
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add News</DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              margin="dense"
              label="Title"
              type="text"
              fullWidth
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <TextField
              margin="dense"
              label="Content"
              type="text"
              fullWidth
              variant="outlined"
              multiline
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
            <TextField
              margin="dense"
              label="Image URL"
              type="url"
              fullWidth
              variant="outlined"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
            <TextField
              margin="dense"
              label="Academy id"
              fullWidth
              variant="outlined"
              value={academyId}
              onChange={(e) => setAcademyId(e.target.value)}
              required
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary" variant="contained">
            Add News
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default NewsForm;
