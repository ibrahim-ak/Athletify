import React, { useRef, useEffect } from 'react';
import { Box, Divider, Chip } from '@mui/material';
import { useLocation } from 'react-router-dom';

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

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      const section = document.getElementById(sectionId);
      if (section) {
        const navbarHeight = document.querySelector('header.MuiAppBar-root').offsetHeight;

        // Set different offset for partners section
        const extraOffset = sectionId === 'partners' ? 100 : 40; // Use 100 for partners, 40 for others
        const topPosition = section.offsetTop - navbarHeight - extraOffset;

        // Directly use window.scrollTo with smooth behavior
        window.scrollTo({
          top: topPosition,
          behavior: 'smooth',
        });
      }
    }
  }, [location]);

  return (
    <Box style={{ backgroundColor: '#e6f0ff' }}>
      <Navbar />
      <Box ref={homeRef} id="home">
        <Hero contactRef={contactRef} />
      </Box>
      <Divider style={{ marginTop: '20px' }}>
        <Chip label="Latest News" variant="outlined" color="primary" />
      </Divider>
      <NewsSlider />
      <Box ref={aboutRef} id="about">
        <AboutUs />
      </Box>
      <Divider>
        <Chip label="Our Partners" variant="outlined" color="primary" />
      </Divider>
      <Box ref={partnersRef} id="partners">
        <BasicCard />
      </Box>
      <Divider />
      <CallToAction />
      <Divider style={{ marginTop: '20px' }}>
        <Chip label="Services" variant="outlined" color="primary" />
      </Divider>
      <Box ref={servicesRef} id="services">
        <Services />
      </Box>
      <Divider>
        <Chip label="Contact Us" variant="outlined" color="primary" />
      </Divider>
      <Box ref={contactRef} id="contact">
        <ContactForm />
      </Box>
      <Divider />
      <Footer />
    </Box>
  );
}

export default MainPage;


