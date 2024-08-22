import React, { useRef } from 'react';
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
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const partnersRef = useRef(null);

  return (
    <Box style={{ backgroundColor: "#e6f0ff" }}>
      <Navbar 
        homeRef={homeRef} 
        aboutRef={aboutRef} 
        servicesRef={servicesRef} 
        contactRef={contactRef} 
        partnersRef={partnersRef} 
      />
      <Box ref={homeRef}>
        {/* <Hero /> */}
        <Hero contactRef={contactRef} />

      </Box>
      <Divider style={{ marginTop: "20px" }}>
        <Chip label="Latest News" variant="outlined" color="primary" />
      </Divider>
      <NewsSlider />
      <Divider />
      <Box ref={aboutRef}>
        <AboutUs />
      </Box>
      <Divider>
        <Chip label="Our Partners" variant="outlined" color="primary" />
      </Divider>
      <Box ref={partnersRef}>
        <BasicCard />
      </Box>
      <Divider />
      <CallToAction />
      <Divider style={{ marginTop: "20px" }}>
        <Chip label="Services" variant="outlined" color="primary" />
      </Divider>
      <Box ref={servicesRef}>
        <Services />
      </Box>
      <Divider>
        <Chip label="Contact Us" variant="outlined" color="primary" />
      </Divider>
      <Box ref={contactRef}>
        <ContactForm />
      </Box>
      <Divider />
      <Footer />
    </Box>
  );
}

export default MainPage;
