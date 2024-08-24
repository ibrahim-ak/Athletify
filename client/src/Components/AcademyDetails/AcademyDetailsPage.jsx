import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Navbar from '../NavBar';
import AcademyLandingPage from './AcademyLadingPage';
import News from '../News';
import { Box, Divider } from '@mui/material';

function AcademyDetailsPage() {
    return (
        <div>
            <Navbar />
            <AcademyLandingPage />
            <Divider />
            <h1 style={{ textAlign: 'center', marginTop:'30px',  backgroundColor:'#ffffff87', color: '#1d4f67'  }}>What's Happening at AcademyName? <br/> Achievements, Events, and More!</h1>
            <News/>

        </div>
    );
}

export default AcademyDetailsPage;
