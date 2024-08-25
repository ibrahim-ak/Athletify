import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton, List, ListItem, ListItemIcon, Divider } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

function Announcements() {
  const [open, setOpen] = useState(false);
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetchAnnouncements();
  }, []);  // Fetch announcements only once, don't depend on announcements state.

  const fetchAnnouncements = () => {
    axios.get('http://localhost:8000/api/announcements')
      .then(res => {
        setAnnouncements(res.data.announcements);
      })
      .catch(err => console.error(err));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/announcement/${id}`)
      .then(() => {
        setAnnouncements(announcements.filter(announcement => announcement._id !== id));
      })
      .catch(err => console.error(err));
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ position: 'fixed', top: 0, left: 0, height: '100%', zIndex: 1300 }}>
      {/* Drawer */}
      <Box
        sx={{
          width: '250px',
          height: '100%',
          backgroundColor: '#1d4f67',
          padding: '20px',
          position: 'fixed',
          top: 0,
          left: open ? '0' : '-250px',
          transition: 'left 0.3s ease',
          boxShadow: open ? '2px 0px 5px rgba(0, 0, 0, 0.5)' : 'none',
          overflowY: 'auto',
          borderTopRightRadius: '8px',
          borderBottomRightRadius: '8px',
          marginTop: "200px"
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
          Announcements
        </Typography>
        <Divider sx={{ backgroundColor: '#fff' }} />
        <List>
          {announcements.length > 0 ? (
            announcements.reverse().map((announcement, index) => (
              <ListItem key={index} sx={{ padding: 0, display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    width: '100%',
                    padding: '10px',
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <ListItemIcon sx={{ minWidth: '40px' }}>
                    <AnnouncementIcon sx={{ color: '#1d4f67' }} />
                  </ListItemIcon>
                  <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#1d4f67',
                        fontWeight: 'bold',
                        whiteSpace: 'normal', // Allows wrapping
                        overflowWrap: 'break-word', // Helps in breaking the word if necessary
                        wordWrap: 'break-word', // Ensures the words can wrap
                        hyphens: 'auto', // Adds hyphenation to long words
                      }}
                    >
                      {announcement.Content}
                    </Typography>
                  </Box>
                  <IconButton
                    onClick={() => handleDelete(announcement._id)}
                    sx={{
                      color: '#1d4f67',
                      marginLeft: '10px',
                      alignSelf: 'flex-start',
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </ListItem>
            ))
          ) : (
            <Typography variant="body2" sx={{ color: '#fff' }}>
              No announcements available.
            </Typography>
          )}
        </List>
      </Box>

      {/* Arrow Button */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: open ? '240px' : '0',
          transform: 'translateY(-50%)',
          transition: 'left 0.3s ease',
          zIndex: 1400,
          backgroundColor: open ? '#5a768c' : '#1d4f67',
          borderTopRightRadius: '8px',
          borderBottomRightRadius: '8px',
          padding: '10px',
          cursor: 'pointer',
          boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
          '&:hover': {
            backgroundColor: open ? '#2b6777' : '#5a768c',
          },
          animation: open ? 'none' : 'blinking 1s infinite, sizeChange 1s infinite', // Add animations
        }}
        onClick={toggleDrawer}
      >
        <IconButton sx={{ color: '#fff' }}>
          {open ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
        </IconButton>
      </Box>

      <style>
        {`
          @keyframes blinking {
            0% { background-color: #1d4f67; }
            50% { background-color: #ff6f31; }
            100% { background-color: #1d4f67; }
          }

          @keyframes sizeChange {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </Box>
  );
}

export default Announcements;