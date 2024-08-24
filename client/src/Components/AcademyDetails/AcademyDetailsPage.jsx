import React from 'react'
import Navbar from '../NavBar';
import AcademyLandingPage from './AcademyLadingPage'
import News from '../News'
import { Box, Divider } from '@mui/material';
import { textAlign } from '@mui/system';


function AcademyDetailsPage() {
    return (
      <div>
          <Navbar 
        // homeRef={homeRef} 
        // aboutRef={aboutRef} 
        // servicesRef={servicesRef} 
        // contactRef={contactRef} 
        // partnersRef={partnersRef} 
      />
        <AcademyLandingPage />
        <Divider></Divider>
        <h1 style={{textAlign:'center'}}>What's new in 'AcademyName' </h1>
        <News width="100%" /> {/* Full width usage */}


        
      </div>
    );
  }
  
  export default AcademyDetailsPage;