import {Navigate} from 'react-router-dom';

function UnProtectedRoutes({ children }) {
    const token = localStorage.getItem('authToken');
    const role = localStorage.getItem('role');
  
    if (token) {
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
  
  export default UnProtectedRoutes;
  