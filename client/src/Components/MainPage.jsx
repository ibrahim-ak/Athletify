import React from 'react';
import { Box, Divider, Chip } from '@mui/material';

import Hero from './Hero';
import Navbar from './NavBar';
import Footer from './Footer';
import Services from './Services';
import NewsSlider from './NewsSlider';
import BasicCard from './BasicCard'; 
import CallToAction from './CallToAction';
import ContactForm from './ContactForm';
import AboutUs from './AboutUs';

function MainPage() {
  return (
    <Box style={{
        backgroundColor: "#e6f0ff"}}>
      <Navbar />
      <Hero />
      <Divider style={{marginTop:"20px"}}>
        <Chip label="Latest News" variant="outlined" color="primary" />
      </Divider>
      <NewsSlider />
      <Divider />
      <AboutUs />
      <Divider>
        <Chip label="Our Partners" variant="outlined" color="primary" />
      </Divider>
      <BasicCard />
      <Divider />
      <CallToAction />
      <Divider style={{marginTop:"20px"}}>
        <Chip label="Services" variant="outlined" color="primary" />
      </Divider>
      <Services />
      <Divider>
      <Chip label="Contact Us" variant="outlined" color="primary" />
      </Divider>
      <ContactForm />
      <Divider/>
      <Footer />
    </Box>
  );
}

export default MainPage;
