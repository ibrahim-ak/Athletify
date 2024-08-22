import { useState } from 'react';
import { TextField, Button, Grid, Typography, Paper } from '@mui/material';
import axios from 'axios';

const StudentForm = ({ onCreate }) => {
  const [formData, setFormData] = useState({
    Username: '',
    phone: '',
    password: '',
    confirmPassword: '',
    gender: '',
    age: '',
    group: '' 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form data:', formData); // Add this line
    try {
      const response = await axios.post('http://localhost:8000/api/student', formData);
      console.log('Student created:', response.data); // Add this line
      onCreate(response.data.student);
      setFormData({
        Username: '',
        phone: '',
        password: '',
        confirmPassword: '',
        gender: '',
        age: '',
        group: ''
      });
    } catch (error) {
      console.error("Error creating student:", error);
    }
  };
  

  return (
    <Paper style={{ padding: 16 }}>
      <Typography 
        variant="h6" 
        gutterBottom 
        sx={{ color: '#1d4f67' }} // Apply the color here
      >
        Register Student
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
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Group"
              name="group"
              value={formData.group}
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
              Register Student
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default StudentForm;
