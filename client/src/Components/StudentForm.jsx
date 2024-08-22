import { useState, useEffect } from 'react';
import { TextField, Button, Grid, Typography, Paper, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import axios from 'axios';

const StudentForm = ({ onCreate }) => {
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    password: '',
    confirmPassword: '',
    gender: '',
    age: '',
    group: '' // Initialize as an empty string
  });

  const [errors, setErrors] = useState({});
  const [allgroups, setAllGroups] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/groups');
        const groups = response.data.groups || [];
        setAllGroups(groups);

        // Set the initial group if there are any groups fetched
        if (groups.length > 0 && !formData.group) {
          setFormData((prevFormData) => ({
            ...prevFormData,
            group: groups[0].id
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
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    // Validation logic (same as before)

    // Validate Group
    if (!formData.group) newErrors.group = 'Group is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log('Form Data:', formData);
    try {
      const response = await axios.post('http://localhost:8000/api/student', formData);
      console.log('Student created:', response.data);
      onCreate(response.data.student);
      setFormData({
        username: '',
        phone: '',
        password: '',
        confirmPassword: '',
        gender: '',
        age: '',
        group: allgroups.length > 0 ? allgroups[0]._id : '' // Reset group to first option if available
      });
      setErrors({});
    } catch (error) {
      console.error("Error creating student:", error);
    }
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
            <FormControl fullWidth required error={!!errors.group}>
              <InputLabel id="group-select-label">Group</InputLabel>
              <Select
                labelId="group-select-label"
                name="group"
                value={formData.group}
                onChange={handleChange}
                label="Group"
              >
                {allgroups.length > 0 ? (
                  allgroups.map((group) => (
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
    </Paper>
  );
};

export default StudentForm;
