import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Box,
  InputAdornment
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TitleIcon from '@mui/icons-material/Title';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import SchoolIcon from '@mui/icons-material/School';

function NewsForm(props) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [academyId, setAcademyId] = useState('');
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      Title: title, 
      Content: content, 
      Image: imageUrl, 
      Academy: academyId 
    });  // Log the data being submitted
    props.onSubmit({ 
      Title: title, 
      Content: content, 
      Image: imageUrl, 
      Academy: academyId 
    });
    setTitle('');
    setContent('');
    setImageUrl('');
    setAcademyId('');
    setOpen(false);  // Close the dialog after submission
  }
  
    
    
      




  return (
    <Box>
      <Button
        variant="contained"
        style={{
          backgroundColor: "rgb(250 132 25)",
          borderRadius: "20px",
          padding: "10px 20px",
          fontWeight: "bold",
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
        }}
        onClick={handleClickOpen}
      >
        Add News
      </Button>
      <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { borderRadius: '15px' } }}>
        <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px' }}>
          Add News
        </DialogTitle>
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
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <TitleIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 2, borderRadius: '8px' }}
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
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <DescriptionIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 2, borderRadius: '8px' }}
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
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ImageIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 2, borderRadius: '8px' }}
            />
            <TextField
              margin="dense"
              label="Academy id"
              fullWidth
              variant="outlined"
              value={academyId}
              onChange={(e) => setAcademyId(e.target.value)}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SchoolIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 2, borderRadius: '8px' }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: 'purple', fontWeight: 'bold' }}>
            Cancel
          </Button>
          <Button 
            onClick={handleSubmit} 
            variant="contained" 
            sx={{ 
              backgroundColor: 'rgb(250 132 25)',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#f08e3e',
              },
              borderRadius: '20px'
            }}
          >
            Add News
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default NewsForm;
