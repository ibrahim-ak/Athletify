import React from 'react';
import StaticNavBar from '../StaticNavBar';
import AddGroupForm from './AddGroupForm';
import AllGroupsCards from './AllGroupsCards';
import { Container, Grid, Typography, Paper, Box } from '@mui/material';

const AllGroupsComponent = () => {
  return (
    <>
      <StaticNavBar tab1={'Home'} tab2={'Members'} tab3={'Groups'}/>
      <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', paddingTop: '64px' }}>
        {/* Ensure content is pushed below the navbar */}
        <Container>
          <Box mt={4} mb={4}>
            <Typography variant="h4" gutterBottom>Groups</Typography>
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
