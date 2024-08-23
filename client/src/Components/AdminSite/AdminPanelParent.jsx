import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminNav from '../AdminNav';
import ContactMessages from './ContactMessages';
<<<<<<< HEAD:client/src/Components/AdminPanelParent.jsx
=======
import AcademyPanel from '../AcademySite/AcademyPanel';
>>>>>>> master:client/src/Components/AdminSite/AdminPanelParent.jsx
import AdminPanel from './AdminPanel';

const AdminPanelParent = () => {
  return (
    <div>
      <AdminNav />
      <Routes>
        <Route path="/" element={<Navigate to="admin-panel" replace />} /> {/* Redirect /admin to /admin/admin-panel */}
        <Route path="admin-panel" element={<AdminPanel />} />
        <Route path="admin-messages" element={<ContactMessages />} />
      </Routes>
    </div>
  );
}

export default AdminPanelParent;
