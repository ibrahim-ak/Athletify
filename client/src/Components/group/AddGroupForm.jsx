import { useState } from 'react';
import { TextField, Button, Grid, Typography, Paper } from '@mui/material';
import axios from 'axios';

const AddGroupForm = ({ onCreate }) => {
  const [formData, setFormData] = useState({
    groupName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/group', formData);
      onCreate(response.data.group);
      setFormData({
        groupName: '',
      });
    } catch (error) {
      console.error("Error creating group:", error);
    }
  };

  return (
    <Paper style={{ padding: 16 }}>
      <Typography variant="h6" gutterBottom>Create Group</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Group Name"
              name="groupName"
              value={formData.groupName}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" style={{ backgroundColor: '#FF6F31', color: '#fff' }}>
              Add
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default AddGroupForm;
