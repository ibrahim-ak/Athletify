import React from 'react';
import StaticNavBar from '../StaticNavBar';
import AddGroupForm from '../group/AddGroupForm';
import AllGroupsCards from '../group/AllGroupsCards';
import { Container, Grid, Typography, Paper, Box } from '@mui/material';

const AllGroupsComponent = () => {
  
  return (
    <>
       <Box 
      sx={{ 
        minHeight: '100vh', 
        backgroundColor: '#f5f5f5', 
        paddingTop: '64px', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center' 
      }}
    >
      <Container>
        <Box mt={4} mb={4}>
          <Typography 
            variant="h4" 
            gutterBottom
            align="center"  // Center the typography text
          >
            Groups
          </Typography>
            <Grid container spacing={4}>
              {/* Academy List on the left side */}
              <Grid item xs={12} md={8}>
                <Paper elevation={3}>
                  <Box p={2}>
                    <AllGroupsCards />
                  </Box>
                </Paper>
              </Grid>
              {/* Create Academy Form on the right side */}
              <Grid item xs={12} md={4}>
                <Paper elevation={3}>
                  <Box p={2}>
                    <AddGroupForm />
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default AllGroupsComponent;
