import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Navbar from '../NavBar';
import AcademyLandingPage from './AcademyLadingPage';
import StudentsNews from '../studentSite/StudentNews';
import { Box, Divider } from '@mui/material';


function AcademyDetailsPage() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []); // Run only on mount
    return (
        <div>
            <Navbar />
            <AcademyLandingPage />
            <Divider />
            <h1 style={{ textAlign: 'center', marginTop:'30px',  backgroundColor:'#ffffff87', color: '#1d4f67', fontWeight:'450'  }}>What's Happening at Champions Academy? <br/> Achievements, Events, and More!</h1>
            <StudentsNews/>

        </div>
    );
}

export default AcademyDetailsPage;
