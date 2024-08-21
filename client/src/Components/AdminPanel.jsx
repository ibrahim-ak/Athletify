import { useState, useEffect } from 'react';
import axios from 'axios';
import CreateAcademyForm from './CreateAcademyForm';
import AcademyList from './AcademyList';
import { Container, Grid, Typography } from '@mui/material';

const AdminPanel = () => {
  const [academies, setAcademies] = useState([]);

  useEffect(() => {
    fetchAcademies();
  }, []);

  const fetchAcademies = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/academies');
      setAcademies(response.data.Academies);
    } catch (error) {
      console.error("Error fetching academies:", error);
    }
  };

  const handleCreateAcademy = (newAcademy) => {
    setAcademies([...academies, newAcademy]);
  };

  return (
    <Container>
<Typography 
  variant="h4" 
  gutterBottom 
  sx={{ color: '#1d4f67' }} // Apply the color here
>
  Admin Panel
</Typography>
      <Grid container spacing={4}>
        {/* Academy List on the left side */}
        <Grid item xs={12} md={8}>
          <AcademyList academies={academies} />
        </Grid>
        {/* Create Academy Form on the right side */}
        <Grid item xs={12} md={4}>
          <CreateAcademyForm onCreate={handleCreateAcademy} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminPanel;
