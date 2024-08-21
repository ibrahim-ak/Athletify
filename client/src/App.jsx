
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './Components/MainPage';
import NewsForm from './Components/NewsForm';
import Divider from '@mui/material/Divider';
import Chip from '@mui/joy/Chip';
import Wall from './Components/Wall';


function App() {
  return (
    <div style={{ backgroundColor: "#E6F0FF"}}>

      <Routes>
              {/* Route for the News Form */}
          <Route path="/wall" element={<Wall />} />
          <Route path="/" element={<MainPage />} />

          {/* <Route path="/chat" element={<Chat />} /> */}
          {/* <Route path="/about-us" element={<AboutUs />} /> */}
          {/* <Route path="/contact-us" element={<Contact />} /> */}
        
    </Routes>
    </div>




  );
}

export default App;
