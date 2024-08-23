import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import Routes and Route

import React from 'react';
import MainPage from './Components/MainPage';
import NewsForm from './Components/NewsForm';
import GroupDashboard from './Components/Groupp/GroupDashboard';
import Divider from '@mui/material/Divider';
import Chip from '@mui/joy/Chip';
import Wall from './Components/Wall';
import CallToAction from "./Components/CallToAction";
import ContactForm from "./Components/ContactForm";
import Chat from './Components/Chat';
import SignIn from './Components/Login/SignIn'
import AcademyPanel from './Components/AcademyPanel';
import AddGroupForm from './Components/group/AddGroupForm';
// import AdminPanel from './Components/AdminPanel';
import ContactMessages from './Components/ContactMessages';


// import AllGroupsComponent from './Components/group/AllGroupsComponent';

import AdminPanelParent from './Components/AdminPanelParent';
import AllGroupsComponent from './Components/group/AllGroupsComponent';

import AdminPanel from './Components/AdminPanel';


function App() {
  return (
    <div style={{ backgroundColor: "#E6F0FF" }}>

    <Routes>
        <Route path="/wall" element={<Wall />} />
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/" element={<MainPage />} /> */}
        <Route path="/login" element={<SignIn />} />
        {/* <Route path="/admin-messages" element={<ContactMessages />} /> */}
        <Route path="/admin/*" element={<AdminPanelParent />} />
        <Route path="/admin-messages" element={<ContactMessages />} />

        <Route path="/academy/group/:id" element={<GroupDashboard />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/contact-us" element={<ContactForm />} />
        {/* <Route path='/admin-panel' element={<AdminPanel/>}/> */}
        <Route path='/academy-panel' element={<AcademyPanel/>}/>



      {/* Route for the News Form */}
      <Route path="/add-news" element={<NewsForm />} />
      <Route path="/academy/group/:id" element={<GroupDashboard />} />
      {/* <Routes> */}
          {/* <Route path="/chat" element={<Chat />} /> */}
          {/* <Route path="/about-us" element={<AboutUs />} /> */}
          {/* <Route path="/contact-us" element={<Contact />} /> */}
        {/* </Routes> */}

      <Route path="/add-news" element={<NewsForm />} />
      
          <Route path="/chat" element={<Chat />} />
          {/* <Route path="/about-us" element={<AboutUs />} /> */}
          <Route path="/contact-us" element={<ContactForm />} />
          {/* <Route path='/admin-panel' element={<AdminPanel/>}/> */}
          <Route path='/academy-panel' element={<AcademyPanel/>}/>
       

        <Route path="/group" element={<AllGroupsComponent />} />
    </Routes>
    </div >




  );
}

export default App;
