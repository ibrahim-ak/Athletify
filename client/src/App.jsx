
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './Components/MainPage';
import NewsForm from './Components/NewsForm';
import GroupDashboard from './Components/Groupp/GroupDashboard';
import Divider from '@mui/material/Divider';
import Chip from '@mui/joy/Chip';


function App() {
  return (
    <div style={{ backgroundColor: "#E6F0FF"}}>

    <Routes>
      {/* Route for the Main Page */}
      <Route path="/" element={<MainPage />} />


      {/* Route for the News Form */}
      <Route path="/add-news" element={<NewsForm />} />
      <Route path="/academy/group/1" element={<GroupDashboard />} />
      {/* <Routes> */}
          {/* <Route path="/chat" element={<Chat />} /> */}
          {/* <Route path="/about-us" element={<AboutUs />} /> */}
          {/* <Route path="/contact-us" element={<Contact />} /> */}
        {/* </Routes> */}
    </Routes>
    </div>




  );
}

export default App;
