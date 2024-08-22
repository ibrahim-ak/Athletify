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
  const [students , setStudents] = useState([])

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    // Validate Username
    if (!formData.Username.trim()) newErrors.Username = 'Username is required';
    else if (formData.Username.length < 2) newErrors.Username = 'Username must be at least 2 characters long';

    // Validate Phone
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (formData.phone.length < 8) newErrors.phone = 'Phone number must be at least 8 characters long';

    // Validate Password
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters long';

    // Validate Confirm Password
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords must match';

    // Validate Gender
    if (!formData.gender.trim()) newErrors.gender = 'Gender is required';

    // Validate Age
    if (!formData.age) newErrors.age = 'Age is required';
    else if (isNaN(formData.age) || formData.age <= 0) newErrors.age = 'Age must be a positive number';

    // Validate Group
    if (!formData.group.trim()) newErrors.group = 'Group is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:8000/api/student', formData);
        onCreate(response.data);  // Pass the newly created student data to onCreate
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
        sx={{ color: '#1d4f67' }} 
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
              error={!!errors.Username}
              helperText={errors.Username}
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
              error={!!errors.phone}
              helperText={errors.phone}
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
              error={!!errors.password}
              helperText={errors.password}
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
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
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
              error={!!errors.gender}
              helperText={errors.gender}
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
              error={!!errors.age}
              helperText={errors.age}
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
              error={!!errors.group}
              helperText={errors.group}
            />
          </Grid>
          <Grid item xs={12}>
            <Button 
              type="submit" 
              variant="contained" 
              sx={{ backgroundColor: '#ff6f31', color: '#fff' }} 
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
