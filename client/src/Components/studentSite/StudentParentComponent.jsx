import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import StaticNavBar from '../StaticNavBar';
import StudentWall from './StudentWall';
import StudentGroupDashboard from './StudentGroupDashboard';

const StudentParentComponent = () => {
  return (
    <div>
        <StaticNavBar tab2={'Home'} tab3={'Groups'}/>      
        <Routes>
        <Route path="/" element={<Navigate to="student-panel" replace />} /> {/* Redirect /admin to /admin/admin-panel */}
        <Route path="student-wall" element={<StudentWall />} />
        <Route path="student-group" element={<StudentGroupDashboard />} />
      </Routes>
    </div>
  );
}

export default StudentParentComponent;
