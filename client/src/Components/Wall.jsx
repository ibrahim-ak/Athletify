import { useState } from 'react';
import { Box } from '@mui/material';
import NewsForm from './NewsForm';
import AnnouncementForm from './AnnouncementForm';
import News from './AcademySite/News';
import Announcements from './Announcements';
import StaticNavBar from './StaticNavBar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Wall() {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const createNews = (newNews) => {
    axios.post('http://localhost:8000/api/news', newNews)
      .then(res => {
        console.log(res.data);
        setErrors([]);
        navigate("/wall");
      })
      .catch(err => {
        console.log(err.response.data);
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        setErrors(errorArr);
      });
  };

  const createAnnouncement = (newAnnouncement) => {
    axios.post('http://localhost:8000/api/announcement', newAnnouncement)
      .then(res => {
        console.log(res.data);
        setErrors([]);
        navigate("/wall");
      })
      .catch(err => {
        console.log(err.response.data);
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        setErrors(errorArr);
      });
  };

  return (
    <Box sx={{ backgroundColor: '#e6f0ff', minHeight: '100vh' }}>
      <StaticNavBar tab1={'Home'} tab2={'Members'} tab3={'Groups'}/>

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
          <AnnouncementForm onSubmitt={createAnnouncement} errors={errors} />
          <h1 style={{ margin: "0 20px", color: "#1d4f67" }}>Stay Updated!</h1>
          <NewsForm onSubmit={createNews} errors={errors} />
        </Box>
      </Box>

      <News />
      <Announcements  />
    </Box>
  );
}

export default Wall;
