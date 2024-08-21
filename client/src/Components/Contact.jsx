import { useState } from 'react';
import { TextField, Button, Container, Typography, Grid, Box } from '@mui/material';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate name
    if (name === 'name' && value.length < 2) {
      setNameError('Name must be at least 2 characters long.');
    } else {
      setNameError('');
    }

    // Validate email
    if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      setEmailError('Email is required and must be a valid email address.');
    } else {
      setEmailError('');
    }

    // Validate message
    if (name === 'message' && value.length > 500) {
      setMessageError('Message must be less than 500 characters.');
    } else {
      setMessageError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Check for validation errors
    if (formData.name.length < 2) {
      setNameError('Name must be at least 2 characters long.');
      setLoading(false);
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setEmailError('Email is required and must be a valid email address.');
      setLoading(false);
      return;
    }
    if (formData.message.length > 500) {
      setMessageError('Message must be less than 500 characters.');
      setLoading(false);
      return;
    }

    try {
      await axios.post('http://localhost:8000/contact', formData); // Ensure this URL matches your backend endpoint
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clear form after submission
    } catch (error) {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        marginLeft: '78%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Full viewport height
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: 'background.paper',
        }}
      >
        <Box sx={{ mb: 4 }}>
          <img
            src="https://image.ibb.co/kUagtU/rocket_contact.png"
            alt="rocket_contact"
            style={{ maxWidth: '150px', marginBottom: '20px' }}
          />
          <Typography variant="h4" gutterBottom>
            Drop Us a Message
          </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                error={!!nameError}
                helperText={nameError}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Your Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                error={!!emailError}
                helperText={emailError}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Your Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                error={!!messageError}
                helperText={messageError}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </Grid>
          </Grid>
        </form>
        {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
      </Box>
    </Container>
  );
};

export default Contact;
