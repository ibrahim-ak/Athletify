import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom


function Navbar() {
  const navigate = useNavigate();

  function logout() {
    console.log("helloooo logged out")
    localStorage.removeItem('authToken');
  
    
    navigate('/login');
  }
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#1d4f67' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <Typography variant="h6" component="div">
          <img src="\src\media\logo8-removebg-preview.png" alt="Logo" style={{ height: '60px', margin: '0px' }} />
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
          <Button
              sx={{ color: '#fff' }}
              component={Link}
              to="/admin/admin-dashboard"
            >
              Dashboard
            </Button>
          <Button
              sx={{ color: '#fff' }}
              component={Link}
              to="/admin/admin-panel"
            >
              Academies
            </Button>
            <Button
              sx={{ color: '#fff' }}
              component={Link}
              to="/admin/admin-messages"
            >
              Messages
            </Button>
          </Box>
          <Button
            sx={{ 
              color: 'white', 
              marginLeft: 2,  
              border: "2px solid rgb(250 102 25)", 
              backgroundColor: "rgb(250 132 25)" 
            }} 
            onClick={logout}
          >
            Logout
          </Button>
          <IconButton
            edge="start"
            sx={{ display: { xs: 'block', sm: 'none' } }}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;