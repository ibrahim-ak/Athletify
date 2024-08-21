
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './Components/MainPage';
import NewsForm from './Components/NewsForm';
import Divider from '@mui/material/Divider';
import Chip from '@mui/joy/Chip';
import CallToAction from "./Components/CallToAction";
import ContactForm from "./Components/ContactForm";
import AboutUs from "./Components/AboutUs";
import Chat from './Components/Chat';





function App() {
  return (
    <div style={{ backgroundColor: "#E6F0FF" }}>

      <Routes>
        {/* Route for the Main Page */}
        <Route path="/" element={<MainPage />} />



        {/* Route for the News Form */}
        <Route path="/add-news" element={<NewsForm />} />

        <Route path="/chat" element={<Chat />} />
        {/* <Route path="/about-us" element={<AboutUs />} /> */}
        <Route path="/contact-us" element={<ContactForm />} />
      
    </Routes>
    </div >




  );
}

export default App;
