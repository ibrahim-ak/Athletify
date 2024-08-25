import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Typography, Paper, Select, MenuItem, FormControl, InputLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import axios from 'axios';

const UpdateStudentForm = ({ studentId, onUpdate }) => {
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    gender: '',
    age: '',
    group: ''
  });

  const [errors, setErrors] = useState({});
  const [allGroups, setAllGroups] = useState([]);

  useEffect(() => {
    // Fetch student data
    const fetchStudentData = () => {
      axios.get(`http://localhost:8000/api/student/${studentId}`)
        .then(response => {
          const student = response.data.student;
          setFormData({
            username: student.username || '',
            phone: student.phone || '',
            gender: student.gender || '',
            age: student.age || '',
            group: student.group || ''
          });
        })
        .catch(error => {
          console.error("Error fetching student data:", error);
        });
    };

    fetchStudentData(); // Initial fetch
  }, [studentId]); // Trigger when studentId changes

  useEffect(() => {
    // Fetch all groups
    axios.get('http://localhost:8000/api/groups') // Adjust the API endpoint as needed
      .then(response => {
        setAllGroups(response.data.groups || []);
      })
      .catch(error => {
        console.error("Error fetching groups:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    // e.preventDefault(); // Prevent the default form submission

    // Update student data
    axios.patch(`http://localhost:8000/api/student/${studentId}`, formData)
      .then(response => {
        onUpdate(response.data.student); // Update the parent component with new data
        
        // Fetch the updated data to display it without refresh
        axios.get(`http://localhost:8000/api/student/${studentId}`)
          .then(updatedResponse => {
            setFormData({
              username: updatedResponse.data.student.username || '',
              phone: updatedResponse.data.student.phone || '',
              gender: updatedResponse.data.student.gender || '',
              age: updatedResponse.data.student.age || '',
              group: updatedResponse.data.student.group || ''
            });
          })
          .catch(fetchError => {
            console.error("Error fetching updated student data:", fetchError);
          });

      })
      .catch(error => {
        console.error("Error updating student data:", error);
        if (error.response) {
          setErrors(error.response.data.errors || {});
        }
      });
  };

  return (
    <Paper style={{ padding: 16 }}>
      <Typography variant="h6" gutterBottom sx={{ color: '#1d4f67' }}>
        Update Student
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
            <Typography variant="body1">Gender</Typography>
            <RadioGroup
              name="gender"
              value={formData.gender}
              onChange={handleChange}
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
              Update Student
            </Button>
          </Grid>
        </Grid>
      </form>
      {errors.form && <Typography color="error">{errors.form}</Typography>}
    </Paper>
  );
};

export default UpdateStudentForm;
