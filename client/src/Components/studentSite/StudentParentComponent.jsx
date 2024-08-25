import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import StaticNavBar from '../StaticNavBar';
import StudentWall from './StudentWall';
import ProtectedRoute from '../ProtectedRoutes';
import StudentChat from './StudentChat';

const StudentParentComponent = () => {
  const thisGroup = localStorage.getItem('group')
  return (
    <ProtectedRoute roleRequired="student">
      <div>
        <StaticNavBar tab2={'Home'} link2={"/student/student-wall"} tab3={'My Group'} link3={`/student/student-chat/${thisGroup}`}/>      
        <Routes>
          <Route path="/" element={<Navigate to="student-wall" replace />} />
          <Route path="student-wall" element={<StudentWall />} />
          <Route path="student-chat/:id" element={<StudentChat />} />
        </Routes>
      </div>
    </ProtectedRoute>
  );
}

export default StudentParentComponent;
