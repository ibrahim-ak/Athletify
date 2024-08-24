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
import AcademyPanel from './Components/AcademySite/AcademyPanel';
import AddGroupForm from './Components/group/AddGroupForm';
import AdminPanelParent from './Components/AdminSite/AdminPanelParent';
import AllGroupsComponent from './Components/AcademySite/AllGroupsComponent';
import ContactMessages from './Components/AdminSite/ContactMessages'
import StudentParentComponent from './Components/studentSite/studentParentComponent';
import AcademyParentComponent from './Components/AcademySite/AcademyParentComponent';
import ProtectedRoute from './Components/ProtectedRoutes';
import UnProtectedRoutes from './Components/UnProtectedRoutes';

function App() {
  return (
    <div style={{ backgroundColor: "#E6F0FF" }}>

    <Routes>
    <Route
        path="/"
        element={
          <UnProtectedRoutes >
            <MainPage/>
          </UnProtectedRoutes>
        }
      />

    <Route
        path="/login"
        element={
          <UnProtectedRoutes >
            <SignIn/>
          </UnProtectedRoutes>
        }
      />

        {/* <Route path="/admin-messages" element={<ContactMessages />} /> */}
        
        <Route path="/admin/*" element={<AdminPanelParent />} />
        <Route path="/student/*" element={<StudentParentComponent />} />
        <Route path="/academy/*" element={<AcademyParentComponent />} />

        <Route path="/academy/group/:id" element={<GroupDashboard />} />
        <Route path="/chat" element={<Chat />} />

    </Routes>
    </div >




  );
}

export default App;
