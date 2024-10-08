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
import AnnouncementIcon from '@mui/icons-material/Announcement';
import SchoolIcon from '@mui/icons-material/School';
import axios from 'axios';

function AnnouncementForm(props) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');
  const [errors, setErrors] = useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validate = () => {
    const newErrors = {};
    if (!content.trim()) newErrors.content = 'Content is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      Content: content, 
    });  
    props.onSubmitt(content);
    setContent('');
    setOpen(false);
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
        Add Announcement
      </Button>
      <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { borderRadius: '15px' } }}>
        <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px' }}>
          Add Announcement
        </DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
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
              error={!!errors.content}
              helperText={errors.content}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AnnouncementIcon />
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
            type="submit"
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
            Add Announcement
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default AnnouncementForm;
