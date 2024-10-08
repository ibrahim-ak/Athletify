// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import HomeIcon from '@mui/icons-material/Home';
// import InfoIcon from '@mui/icons-material/Info';
// import BuildIcon from '@mui/icons-material/Build';
// import ContactMailIcon from '@mui/icons-material/ContactMail';
// import GroupIcon from '@mui/icons-material/Group';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import LoginIcon from '@mui/icons-material/Login';
// import { Link } from 'react-router-dom'; // Import Link for navigation

// function Navbar() {
//   return (
//     <AppBar position="fixed" sx={{ backgroundColor: '#1d4f67' }}>
//       <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
//         <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
//           <Typography variant="h6" component="div">
//             MyLogo
//           </Typography>
//         </Box>
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
//             <Button sx={{ color: '#fff' }} component={Link} to="/#home" startIcon={<HomeIcon />}>
//               Home
//             </Button>
//             <Button sx={{ color: '#fff' }} component={Link} to="/#about" startIcon={<InfoIcon />}>
//               About
//             </Button>
//             <Button sx={{ color: '#fff' }} component={Link} to="/#services" startIcon={<BuildIcon />}>
//               Services
//             </Button>
//             <Button sx={{ color: '#fff' }} component={Link} to="/#contact" startIcon={<ContactMailIcon />}>
//               Contact
//             </Button>
//             <Button sx={{ color: '#fff' }} component={Link} to="/#partners" startIcon={<GroupIcon />}>
//               Partners
//             </Button>
//           </Box>
//           <Button
//             sx={{ color: 'white', marginLeft: 2, border: '2px solid rgb(250 102 25)', backgroundColor: 'rgb(250 132 25)' }}
//             href="#login"
//             startIcon={<LoginIcon />}
//           >
//             Login
//           </Button>
//           <IconButton
//             edge="start"
//             sx={{ display: { xs: 'block', sm: 'none' } }}
//             color="inherit"
//             aria-label="menu"
//           >
//             <MenuIcon />
//           </IconButton>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Navbar;


import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import GroupIcon from '@mui/icons-material/Group';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';

function Navbar() {
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
            <Button component={Link} to="/#home" sx={{ color: '#fff' }} startIcon={<HomeIcon />}>
              Home
            </Button>
            <Button component={Link} to="/#about" sx={{ color: '#fff' }} startIcon={<InfoIcon />}>
              About
            </Button>
            <Button component={Link} to="/#partners" sx={{ color: '#fff' }} startIcon={<GroupIcon />}>
              Partners
            </Button>

            <Button component={Link} to="/#services" sx={{ color: '#fff' }} startIcon={<BuildIcon />}>
              Services
            </Button>
            <Button component={Link} to="/#contact" sx={{ color: '#fff' }} startIcon={<ContactMailIcon />}>
              Contact
            </Button>

          </Box>
          <Button
            sx={{ color: 'white', marginLeft: 2, border: '2px solid rgb(250 102 25)', backgroundColor: 'rgb(250 132 25)' }}
            component={Link} to="/login"
            startIcon={<LoginIcon />}
          >
            Login
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
