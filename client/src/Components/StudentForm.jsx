import { useState, useEffect } from 'react';
import { TextField, Button, Grid, Typography, Paper, Select, MenuItem, FormControl, InputLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import axios from 'axios';

const StudentForm = ({ onCreate }) => {
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    password: '',
    confirmPassword: '',
    gender: '',
    age: '',
    group: ''
  });

  const [errors, setErrors] = useState({});
  const [allGroups, setAllGroups] = useState([]);

  useEffect(() => {
    const academy = localStorage.getItem('id');

    const fetchGroups = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/group/academy/${academy}`);
        const groups = response.data.groups || [];
        setAllGroups(groups);
        if (groups.length > 0 && !formData.group) {
          setFormData(prevFormData => ({
            ...prevFormData,
            group: groups[0]._id
          }));
        }
      } catch (error) {
        console.error("Error fetching groups:", error);
      }
    };

    fetchGroups();
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleRadioChange = (e) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      gender: e.target.value
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.age) newErrors.age = 'Age is required';
    if (!formData.group) newErrors.group = 'Group is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Ensure the form doesn't refresh the page

    if (!validate()) return; // Stop if validation fails

    axios.post('http://localhost:8000/api/student', formData)
      .then(response => {
        console.log('Student created:', response.data);
        onCreate(response.data.student);
        // Reset form data and errors
        setFormData({
          username: '',
          phone: '',
          password: '',
          confirmPassword: '',
          gender: '',
          age: '',
          group: allGroups.length > 0 ? allGroups[0]._id : '' // Reset to the first group if available
        });
        setErrors({});
      })
      .catch(error => {
        console.error("Error creating student:", error);
        if (error.response) {
          setErrors(error.response.data.errors || {});
        } else {
          setErrors({ form: 'An unexpected error occurred. Please try again.' });
        }
      });
  };


  return (
    <Paper style={{ padding: 16 }}>
      <Typography variant="h6" gutterBottom sx={{ color: '#1d4f67' }}>
        Register Student
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              fullWidth
              required
              error={!!errors.username}
              helperText={errors.username}
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
            <Typography variant="body1">Gender</Typography>
            <RadioGroup
              name="gender"
              value={formData.gender}
              onChange={handleRadioChange}
              row
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
            </RadioGroup>
            {errors.gender && (
              <Typography variant="body2" color="error">
                {errors.gender}
              </Typography>
            )}
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
            <FormControl fullWidth required error={!!errors.group}>
              <InputLabel id="group-select-label">Group</InputLabel>
              <Select
                labelId="group-select-label"
                name="group"
                value={formData.group}
                onChange={handleChange}
                label="Group"
              >
                {allGroups.length > 0 ? (
                  allGroups.map(group => (
                    <MenuItem key={group._id} value={group._id}>
                      {group.Name}
                    </MenuItem>
                  ))
                ) : (
                  <MenuItem value="" disabled>
                    No groups available
                  </MenuItem>
                )}
              </Select>
              {errors.group && <Typography color="error">{errors.group}</Typography>}
            </FormControl>
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
      {errors.form && <Typography color="error">{errors.form}</Typography>}
    </Paper>
  );
};

export default StudentForm;
