import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Footer from '../Footer';
import News from '../News';
import Announcements from '../Announcements';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import StudentSiteAnnouncements from './StudentSiteAnnouncements'

function StudentWall() {
  const [errors, setErrors] = useState([]);
  const [academy, setThisAcademy] = useState()
  const navigate = useNavigate();
  const studentgroup = localStorage.getItem('group');

  useEffect(() => {
    fetchgroup()
    // console.log("the academy id " + academy)
  }, []);
  const fetchgroup = () => {
    // console.log("announcements of " + studentgroup)
    axios.get(`http://localhost:8000/api/group/${studentgroup}`)
      .then(res => {
        setThisAcademy(res.data.group.Academy);
        // console.log(res.data.group.Academy)
      })
      .catch(err => console.error(err));
  };

  return (
    <>
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

        {academy && <News academy={academy}/>}
        {academy && <StudentSiteAnnouncements academy={academy}/>}

      </Box>
      <Footer />

    </>
  );
}

export default StudentWall;
