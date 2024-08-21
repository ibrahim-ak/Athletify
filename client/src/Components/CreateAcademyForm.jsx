import  { useState } from 'react';
import { TextField, Button, Grid, Typography, Paper } from '@mui/material';
import axios from 'axios';

const CreateAcademyForm = ({ onCreate }) => {
  const [formData, setFormData] = useState({
    Username: '',
    email: '',
    phone: '',
    password: '',
    address: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/academy', formData);
      onCreate(response.data.academy);
      setFormData({
        Username: '',
        email: '',
        phone: '',
        password: '',
        address: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error("Error creating academy:", error);
    }
  };

  return (
    <Paper style={{ padding: 16 }}>
<Typography 
  variant="h6" 
  gutterBottom 
  sx={{ color: '#1d4f67' }} // Apply the color here
>
  Create Academy
</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Username"
              name="Username"
              value={formData.Username}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
          <Button 
  type="submit" 
  variant="contained" 
  sx={{ backgroundColor: '#ff6f31', color: '#fff' }} // Apply the color here
>
  Create Academy
</Button>

          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default CreateAcademyForm;
