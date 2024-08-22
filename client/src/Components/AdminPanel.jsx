import { useState, useEffect } from 'react';
import axios from 'axios';
import CreateAcademyForm from './CreateAcademyForm';
import AcademyList from './AcademyList';
import { Container, Grid, Typography, Box } from '@mui/material';
import AdminNav from './AdminNav'; // Import your AdminNav component

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
    <Box>
      <AdminNav />

      <Box 
        sx={{ 
          minHeight: '100vh', 
          backgroundColor: '#e6f0ff', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          paddingTop: '80px' // Offset the content for the fixed navbar
        }}
      >
        <Container>
          <Typography 
            variant="h4" 
            gutterBottom 
            sx={{ color: '#1d4f67', textAlign: 'center' }}
          >
            Admin Panel
          </Typography>
          <Grid container spacing={4}>
            {/* Academy List on the left side */}
            <Grid item xs={12} md={8}>
              <AcademyList academies={academies} setAcademies={setAcademies} />
            </Grid>
            {/* Create Academy Form on the right side */}
            <Grid item xs={12} md={4}>
              <CreateAcademyForm onCreate={handleCreateAcademy} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default AdminPanel;
