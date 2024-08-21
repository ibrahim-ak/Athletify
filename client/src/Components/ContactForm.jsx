import { useState } from 'react';
import { Box, Grid, Typography, TextField, Button, Paper } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import axios from 'axios';

function ContactForm() {
  // State to manage form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // State to manage form submission status
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form data
  const validateForm = () => {
    const { name, email, phone, message } = formData;
    const newErrors = {};
    let isValid = true;

    // Name validation
    if (name.length < 5) {
      newErrors.name = 'Name must be at least 5 characters long.';
      isValid = false;
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Invalid email address.';
      isValid = false;
    }

    // Phone validation (simple validation for phone number format)
    if (!/^\+?\d{10,15}$/.test(phone)) {
      newErrors.phone = 'Phone number must be between 10 and 15 digits.';
      isValid = false;
    }

    // Message validation
    if (message.length > 150) {
      newErrors.message = 'Message cannot exceed 150 characters.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setStatus('');
      return;
    }

    setStatus('Submitting...');
    try {
      const response = await axios.post('http://localhost:8000/api/contact', formData);
      if (response.data.success) {
        setStatus('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
        setErrors({});
      }
    } catch (error) {
      setStatus('Error sending message.');
    }
  };

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
            height="200"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            style={{ borderRadius: '8px' }}
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=AXSOS%20AG+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps vehicle tracker</a>
          </iframe>
        </div>
      </Paper>

      {/* Contact Form Card */}
      <Paper elevation={3} sx={{ padding: 2, flex: 1 }}>
        <form onSubmit={handleSubmit} style={{ height: '100%' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                sx={{ backgroundColor: '#F4F6F7', borderRadius: 1 }}
                required
                error={Boolean(errors.name)}
                helperText={errors.name}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                sx={{ backgroundColor: '#F4F6F7', borderRadius: 1 }}
                required
                type="email"
                error={Boolean(errors.email)}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Your Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                variant="outlined"
                sx={{ backgroundColor: '#F4F6F7', borderRadius: 1 }}
                required
                error={Boolean(errors.phone)}
                helperText={errors.phone}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                variant="outlined"
                multiline
                rows={7}
                sx={{ backgroundColor: '#F4F6F7', borderRadius: 1 }}
                required
                inputProps={{ maxLength: 150 }}
                error={Boolean(errors.message)}
                helperText={errors.message}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                sx={{ padding: 1.5, fontWeight: 'bold' }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
          {status && <Typography sx={{ mt: 2, color: status === 'Submitting...' ? 'orange' : status.includes('Error') ? 'red' : 'green' }}>{status}</Typography>}
        </form>
      </Paper>
    </Box>
  );
}

export default ContactForm;
