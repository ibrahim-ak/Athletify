import { useState } from 'react';
import { Box } from '@mui/material';

import News from '../News';
import Announcements from '../Announcements';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function StudentWall() {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();


  return (
    <Box sx={{ backgroundColor: '#e6f0ff', minHeight: '100vh' }}>
      

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '20px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px',
            borderRadius: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            width: '100%',
            height: '60px',
            marginBottom: '20px',
          }}
        >
          
          <h1 style={{ margin: "0 20px", color: "#1d4f67" }}>Stay Updated!</h1>
         
        </Box>
      </Box>

      <News />
      <Announcements  />
    </Box>
  );
}

export default StudentWall;
