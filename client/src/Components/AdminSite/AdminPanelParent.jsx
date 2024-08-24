import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminNav from '../AdminNav';
import ContactMessages from './ContactMessages';
import AcademyPanel from '../AcademySite/AcademyPanel';
import AdminPanel from './AdminPanel';
import ProtectedRoutes from '../ProtectedRoutes';

const AdminPanelParent = () => {
  return (
    <ProtectedRoutes roleRequired="admin">

    <div>
      <AdminNav />
      <Routes>
        <Route path="/" element={<Navigate to="admin-panel" replace />} /> {/* Redirect /admin to /admin/admin-panel */}
        <Route path="admin-panel" element={<AdminPanel />} />
        <Route path="admin-messages" element={<ContactMessages />} />
      </Routes>
    </div>
    </ProtectedRoutes>
  );
}

export default AdminPanelParent;
