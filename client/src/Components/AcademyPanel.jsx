import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Typography, Box } from '@mui/material';
import AdminNav from './AdminNav'; // Import your AdminNav component
import StudentsList from './StudentsList';
import StudentForm from './StudentForm';

const AcademyPanel = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/students');
      setStudents(response.data.students);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleCreateStudent = (newStudent) => {
    setStudents(prevStudents => [...prevStudents, newStudent]); // Ensure prevStudents is iterable
};


  const removeFromDom = id => {
    setStudents(students.filter(student => student._id !== id));
}

  return (
    <Box>
      {/* Navbar */}
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
              <StudentsList students={students} setStudents={setStudents} removeFromDom={removeFromDom} />
            </Grid>
            <Grid item xs={12} md={4}>
              <StudentForm onCreate={handleCreateStudent} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default AcademyPanel;
