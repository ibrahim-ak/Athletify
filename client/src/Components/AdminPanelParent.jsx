import { Routes, Route } from 'react-router-dom'; // Ensure these are imported
import ContactMessages from './ContactMessages'; // Import ContactMessages component
import AdminPanel from './AdminPanel';
import Navbar from './AdminNav';

const AdminPanelParent = () => {
  return (
    <div>
      <Navbar /> {/* Include AdminNav component */}
      <Routes>
        <Route path="/admin-messages" element={<ContactMessages />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
      </Routes>
    </div>
  );
}

export default AdminPanelParent;
