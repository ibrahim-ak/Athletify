import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import Routes and Route

import React from 'react';
import MainPage from './Components/MainPage';
import NewsForm from './Components/NewsForm';
import GroupDashboard from './Components/AcademySite/GroupDashboard';
import Divider from '@mui/material/Divider';
import Chip from '@mui/joy/Chip';
import Wall from './Components/AcademySite/Wall';
import CallToAction from "./Components/CallToAction";
import ContactForm from "./Components/ContactForm";
import Chat from './Components/Chat';
import SignIn from './Components/Login/SignIn'
import AdminPanelParent from './Components/AdminSite/AdminPanelParent';
import StudentParentComponent from './Components/studentSite/studentParentComponent';
import AcademyParentComponent from './Components/AcademySite/AcademyParentComponent'
import AcademyDetailsPage from './Components/AcademyDetails/AcademyDetailsPage';

function App() {
  return (
    <div style={{ backgroundColor: "#E6F0FF" }}>

    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<SignIn />} />
        {/* <Route path="/admin-messages" element={<ContactMessages />} /> */}
        <Route path="/admin/*" element={<AdminPanelParent />} />
        <Route path="/student/*" element={<StudentParentComponent />} />
        <Route path="/academy/*" element={<AcademyParentComponent />} />

        <Route path="/academy/group/:id" element={<GroupDashboard />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/academy/details" element={<AcademyDetailsPage/>}></Route>

    </Routes>
    </div >




  );
}

export default App;
