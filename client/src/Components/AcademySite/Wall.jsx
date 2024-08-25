import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import NewsForm from '../NewsForm';
import AnnouncementForm from '../AnnouncementForm';
import News from './News';
import Announcements from '../Announcements';
import StaticNavBar from '../StaticNavBar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Wall() {
  const [errors, setErrors] = useState([]);
  const [academy, setThisAcademy] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const academyId = localStorage.getItem('id');
    setThisAcademy(academyId);
    console.log("Academy ID:", academyId); // Add this line
  }, []);


  const createNews = (title, content, image) => {
    axios.post('http://localhost:8000/api/news', {
      title,
      content,
      image,
      academy
    }
    )
      .then(res => {
        console.log(res.data);
        setErrors([]);
        navigate("/academy/academy-wall");
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

  const createAnnouncement = (content) => {
    axios.post('http://localhost:8000/api/announcement', {
      Content: content,
      Academy: academy
    })
      .then(res => {
        console.log(res.data);
        setErrors([]);
        navigate("/academy/academy-wall");
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
          
          <h1 style={{ margin: "0 20px", color: "#1d4f67" ,fontWeight:'500'}}>{localStorage.getItem('username')}</h1>
        
          <NewsForm onSubmit={createNews} errors={errors} />
        </Box>
      </Box>

      {academy && <News width="1000px" academy={academy} />}
      {academy && <Announcements academy={academy} />}
    </Box>
  );
}

export default Wall;
