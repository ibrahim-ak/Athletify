import React from 'react';
import { Box, Grid, Typography, TextField, Button, Paper } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

function ContactForm() {
  return (
    <Box sx={{ padding: 4, display: 'flex', justifyContent: 'space-between', gap: 4 }}>
      {/* Contact Details Card */}
      <Paper elevation={3} sx={{ padding: 2, flex: 1 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#2C3E50' }}>
          <RoomIcon sx={{ mr: 1, color: '#007BFF' }} /> Address
        </Typography>
        <Typography sx={{ mb: 2, color: '#5D6D7E' }}>
          A108 Adam Street, New York, NY 535022
        </Typography>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#2C3E50' }}>
          <PhoneIcon sx={{ mr: 1, color: '#007BFF' }} /> Call Us
        </Typography>
        <Typography sx={{ mb: 2, color: '#5D6D7E' }}>
          +1 5589 55488 55
        </Typography>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#2C3E50' }}>
          <EmailIcon sx={{ mr: 1, color: '#007BFF' }} /> Email Us
        </Typography>
        <Typography sx={{ mb: 2, color: '#5D6D7E' }}>
          info@example.com
        </Typography>
        <div style={{ width: '100%', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)' }}>
          <iframe
            width="100%"
            height="200"  // Reduced height of the map
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            style={{ borderRadius: '8px' }}
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=AXSOS%20AG+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe></div>
      </Paper>

      {/* Contact Form Card */}
      <Paper elevation={3} sx={{ padding: 2, flex: 1 }}>
        <form style={{ height: '100%', marginTop:"30px" }}>
          <Grid container spacing={2} sx={{ padding: 0 }}>
            <Grid item xs={12} sm={6}>
              <TextField 
                fullWidth 
                label="Your Name" 
                variant="outlined" 
                sx={{ backgroundColor: '#F4F6F7', borderRadius: 1 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                fullWidth 
                label="Your Email" 
                variant="outlined" 
                sx={{ backgroundColor: '#F4F6F7', borderRadius: 1 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                fullWidth 
                label="Subject" 
                variant="outlined" 
                sx={{ backgroundColor: '#F4F6F7', borderRadius: 1 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={7}  // Reduced rows to decrease height
                sx={{ backgroundColor: '#F4F6F7', borderRadius: 1 }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button 
                variant="contained" 
                color="primary" 
                fullWidth
                sx={{ padding: 1.5, fontWeight: 'bold' }}  // Reduced padding to decrease button height
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}

export default ContactForm;
