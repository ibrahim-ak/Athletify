import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import StaticNavBar from '../StaticNavBar';
import StudentWall from './StudentWall';
import StudentGroupDashboard from './StudentGroupDashboard';
import ProtectedRoute from '../ProtectedRoutes';

const StudentParentComponent = () => {
  return (
    <ProtectedRoute roleRequired="student">
      <div>
        <StaticNavBar tab2={'Home'} tab3={'Groups'}/>      
        <Routes>
          <Route path="/" element={<Navigate to="student-wall" replace />} />
          <Route path="student-wall" element={<StudentWall />} />
          <Route path="student-group" element={<StudentGroupDashboard />} />
        </Routes>
      </div>
    </ProtectedRoute>
  );
}

export default StudentParentComponent;
