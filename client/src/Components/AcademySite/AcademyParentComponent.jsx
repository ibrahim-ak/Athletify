
import { Routes, Route, Navigate } from 'react-router-dom';
import AcademyPanel from '../AcademySite/AcademyPanel';
import Wall from './Wall';
import AllGroupsComponent from './AllGroupsComponent';
import StaticNavBar from '../StaticNavBar';
// import GroupDashboard from './GroupDashboard';
import ProtectedRoutes from '../ProtectedRoutes';
import AcademyChat from './AcademyChat';

const AdminPanelParent = () => {
  return (
    <ProtectedRoutes roleRequired="academy">

    <div>
      <StaticNavBar tab1={'Home'} link1={'/academy/academy-wall'} tab2={'Students'} link2={'/academy/academy-students'} tab3={'Groups'} link3={'/academy/academy-groups'}/>
      <Routes>
        <Route path="/" element={<Navigate to="academy-wall" replace />} /> {/* Redirect /admin to /admin/admin-panel */}
        <Route path="academy-wall" element={<Wall/>} />
        <Route path="academy-students" element={<AcademyPanel/>} />
        <Route path="academy-groups" element={<AllGroupsComponent />} />
        <Route path="academy-chat/:id" element={<AcademyChat />} />
        
        {/* <Route path="academy-groups/:id" element={<GroupDashboard />} /> */}
      </Routes>
    </div>
    </ProtectedRoutes>

  );
}

export default AdminPanelParent;