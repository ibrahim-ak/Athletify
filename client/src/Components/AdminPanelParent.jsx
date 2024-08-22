import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Ensure these are imported
import AdminNav from './AdminNav'; // Import AdminNav component
import ContactMessages from './ContactMessages'; // Import ContactMessages component
import AcademyPanel from './AcademyPanel'; // Import AcademyPanel component
import AdminPanel from './AdminPanel';

const AdminPanelParent = () => {
  return (
    <div>
      <AdminNav /> {/* Include AdminNav component */}
      <Routes>
        <Route path="/admin-messages" element={<ContactMessages />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
      </Routes>
    </div>
  );
}

export default AdminPanelParent;
