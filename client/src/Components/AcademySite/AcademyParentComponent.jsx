import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AcademyPanel from '../AcademySite/AcademyPanel';
import Wall from './Wall';
import AllGroupsComponent from './AllGroupsComponent';
import StaticNavBar from '../StaticNavBar';
import GroupDashboard from './GroupDashboard';
import ProtectedRoutes from '../ProtectedRoutes';

const AdminPanelParent = () => {
  return (
    <ProtectedRoutes roleRequired="academy">

    <div>
      <StaticNavBar tab1={'Home'} tab2={'Students'} tab3={'Groups'}/>
      <Routes>
        <Route path="/" element={<Navigate to="academy-wall" replace />} /> {/* Redirect /admin to /admin/admin-panel */}
        <Route path="academy-wall" element={<Wall/>} />
        <Route path="academy-students" element={<AcademyPanel/>} />
        <Route path="academy-groups" element={<AllGroupsComponent />} />
        <Route path="academy-groups/:id" element={<GroupDashboard />} />
      </Routes>
    </div>
    </ProtectedRoutes>

  );
}

export default AdminPanelParent;