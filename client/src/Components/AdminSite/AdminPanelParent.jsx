import { Routes, Route, Navigate } from 'react-router-dom';
import AdminNav from '../AdminNav';
import ContactMessages from './ContactMessages';

import AdminPanel from './AdminPanel';
import ProtectedRoutes from '../ProtectedRoutes';
import AdminDashboard from './AdminDashboard';

const AdminPanelParent = () => {
  return (
    <ProtectedRoutes roleRequired="admin">

    <div>
      <AdminNav />
      <Routes>
        <Route path="/" element={<Navigate to="admin-dashboard" replace />} /> {/* Redirect /admin to /admin/admin-panel */}
        <Route path="admin-panel" element={<AdminPanel />} />
        <Route path="admin-messages" element={<ContactMessages />} />
        <Route path="admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </div>
    </ProtectedRoutes>
  );
}

export default AdminPanelParent;
