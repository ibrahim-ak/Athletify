import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import StaticNavBar from '../StaticNavBar';

const AdminDashboard = () => {

     // Mock data for pie charts
     const studentsData = {
          labels: ['Academy A', 'Academy B', 'Academy C'],
          datasets: [
               {
                    label: 'Number of Students',
                    data: [150, 200, 100],
                    backgroundColor: [
                         'rgba(75,192,192,1)',
                         'rgba(54, 162, 235, 1)',
                         'rgba(255, 206, 86, 1)',
                    ],
                    hoverBackgroundColor: [
                         'rgba(75,192,192,0.8)',
                         'rgba(54, 162, 235, 0.8)',
                         'rgba(255, 206, 86, 0.8)',
                    ],
               },
          ],
     };

     const newsData = {
          labels: ['Academy A', 'Academy B', 'Academy C'],
          datasets: [
               {
                    label: 'Number of News Items',
                    data: [20, 15, 30],
                    backgroundColor: [
                         'rgba(153, 102, 255, 1)',
                         'rgba(255, 159, 64, 1)',
                         'rgba(255, 99, 132, 1)',
                    ],
                    hoverBackgroundColor: [
                         'rgba(153, 102, 255, 0.8)',
                         'rgba(255, 159, 64, 0.8)',
                         'rgba(255, 99, 132, 0.8)',
                    ],
               },
          ],
     };

     // Mock data for DataGrid (students' data)
     const columns = [
          { field: 'id', headerName: 'ID', width: 70 },
          { field: 'name', headerName: 'Name', width: 130 },
          { field: 'academy', headerName: 'Academy', width: 130 },
          { field: 'group', headerName: 'Group', width: 130 },
     ];

     const rows = [
          { id: 1, name: 'John Doe', academy: 'Academy A', group: 'Group 1' },
          { id: 2, name: 'Jane Smith', academy: 'Academy B', group: 'Group 2' },
          { id: 3, name: 'Sam Johnson', academy: 'Academy C', group: 'Group 3' },
     ];

     return (


          <>
          <StaticNavBar/>
          <Box sx={{ flexGrow: 1, padding: 2 }}>
               <Grid container spacing={3}>
                    {/* Pie chart for students */}
                    <Grid item xs={3} md={2}>
                         <Paper elevation={3} sx={{ padding: 2 }}>
                              <Typography variant="h6" gutterBottom>
                                   Number of Students per Academy
                              </Typography>
                              <Pie data={studentsData} />
                         </Paper>
                    </Grid>

                    {/* Pie chart for news */}
                    <Grid item xs={5} md={2}>
                         <Paper elevation={3} sx={{ padding: 2 }}>
                              <Typography variant="h6" gutterBottom>
                                   Number of News Items per Academy
                              </Typography>
                              <Pie data={newsData} />
                         </Paper>
                    </Grid>

                    {/* DataGrid for students */}
                    <Grid item xs={12}>
                         <Paper elevation={3} sx={{ height: 400, padding: 2 }}>
                              <Typography variant="h6" gutterBottom>
                                   Students List
                              </Typography>
                              <DataGrid rows={rows} columns={columns} pageSize={5} />
                         </Paper>
                    </Grid>
               </Grid>
          </Box>
          </>
     );
};

export default AdminDashboard;
