import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Typography, Box } from '@mui/material';
import StaticNavBar from '../StaticNavBar'; // Import your AdminNav component
import StudentsList from '../StudentsList';
import StudentForm from '../StudentForm';

const AcademyPanel = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);
  useEffect(() => {
    console.log("AcademyPanel re-rendered with students:", students);
}, [students]);


  const fetchStudents = async () => {
    const academy = localStorage.getItem('id');
    try {
      const response = await axios.get(`http://localhost:8000/api/group/academy/${academy}`);
      const studentPromises = response.data.groups.map(async (group) => {
        const groupResponse = await axios.get(`http://localhost:8000/api/student/group/${group._id}`);
        console.log('Fetched students with groups:', groupResponse.data.student); // Debug line
        return groupResponse.data.student;
      });
      
      const allStudents = await Promise.all(studentPromises);
      const mergedStudents = allStudents.flat();  // Flatten the array of arrays
      setStudents((prevStudents) => [...prevStudents, ...mergedStudents]);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleCreateStudent = (newStudent) => {
    if (newStudent && newStudent._id) {
        setStudents(prevStudents => [...prevStudents, newStudent]);
    }
};



  const removeFromDom = id => {
    setStudents(students.filter(student => student._id !== id));
}

  return (
    <Box>
      {/* Navbar */}
      {/* <StaticNavBar tab1={'Home'} tab2={'Students'} tab3={'Groups'}/> */}

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
            All Students
          </Typography>
          <Grid container spacing={4}>
            {/* Academy List on the left side */}
            <Grid item xs={12} md={8}>
              <StudentsList students={students} removeFromDom={removeFromDom} />
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







