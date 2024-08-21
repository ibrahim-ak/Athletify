import React from 'react';
import Navbar from './Navbar';
import NewsForm from './NewsForm';
import { Box } from '@mui/material';
import News from './News';

function Wall() {
  return (
    <Box sx={{ backgroundColor: '#e6f0ff', minHeight: '100vh' }}>
      <Navbar />
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          padding: '20px', 
          marginTop: '60px' // Adjust this value based on your navbar's height
        }}
      >
        <Box sx={{ padding: '20px', borderRadius: '8px' }}>
          <NewsForm />
        </Box>
        <Box sx={{  padding: '20px', borderRadius: '8px' }}>
          <NewsForm />
        </Box>
      </Box>
      <News></News>
    </Box>
  );
}

export default Wall;

