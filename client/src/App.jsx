import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route

import React from 'react';
import MainPage from './Components/MainPage';
import NewsForm from './Components/NewsForm';
import Divider from '@mui/material/Divider';
import Chip from '@mui/joy/Chip';
import CallToAction from "./Components/CallToAction";
import ContactForm from "./Components/ContactForm";
import AboutUs from "./Components/AboutUs";
import Chat from './Components/Chat';
import AdminPanel from './Components/AdminPanel';
import SignIn from './Components/Login/SignIn'
import AllGroupsComponent from './Components/group/AllGroupsComponent';






function App() {
  return (
    <div style={{ backgroundColor: "#E6F0FF" }}>

      <Routes>
        {/* Route for the Main Page */}
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<SignIn />} />



        {/* Route for the News Form */}
        <Route path="/add-news" element={<NewsForm />} />


      {/* Route for the News Form */}
      <Route path="/add-news" element={<NewsForm />} />
      
          <Route path="/chat" element={<Chat />} />
          {/* <Route path="/about-us" element={<AboutUs />} /> */}
          <Route path="/contact-us" element={<ContactForm />} />
          <Route path='/admin-panel' element={<AdminPanel/>}/>
       
        <Route path="/group" element={<AllGroupsComponent />} />
      
    </Routes>
    </div >




  );
}

export default App;
