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
            <h1 style={{ textAlign: 'center' }}>What's new in 'AcademyName'</h1>
            <News width="100%" />

        </div>
    );
}

export default AcademyDetailsPage;
