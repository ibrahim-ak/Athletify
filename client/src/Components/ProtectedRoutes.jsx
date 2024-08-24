import {Navigate} from 'react-router-dom';

function ProtectedRoutes({ children, roleRequired }) {
    const token = localStorage.getItem('authToken');
    const role = localStorage.getItem('role');
  
    if (!token) {
      return <Navigate to="/login" />;
    }
  
    if (role !== roleRequired) {
        if (role === 'student'){
            return <Navigate to="/student" />;
        }
        else if (role === 'academy'){
            return <Navigate to="/academy" />;
        }
        else if (role === 'admin'){
            return <Navigate to="/admin" />;
        }
    }
  
    return children;
  }
  
  // Add this line
  export default ProtectedRoutes;
  