import { Box, Button, Card, CardContent, Grid, List, ListItem, ListItemText, Paper, styled, TextField, Typography } from '@mui/material'
import { Container, height, margin, maxHeight, minHeight } from '@mui/system'
import React from 'react'
import Navbar from "../Navbar"
const GroupDashboard = () => {
     const students = ['John Doe', 'Jane Smith', 'Michael Brown', 'Emily White', 'John Doe', 'Jane Smith', 'Michael Brown', 'Emily White', 'John Doe', 'Jane Smith', 'Michael Brown', 'Emily White', 'John Doe', 'Jane Smith', 'Michael Brown', 'Emily White', 'Jane Smith', 'Michael Brown', 'Emily White', 'Jane Smith', 'Michael Brown', 'Emily White', 'Jane Smith', 'Michael Brown', 'Emily White', 'Jane Smith', 'Michael Brown', 'Emily White']; // Example student names



     const AnimatedCard = styled(Card)(({ theme }) => ({
          height: '100%',
          borderRadius: '20px',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
               transform: 'scale(1.02)',
               boxShadow: theme.shadows[6],
          },
     }));

     const AnimatedButton = styled(Button)(({ theme }) => ({
          height: '56px',
          borderRadius: '20px',
          transition: 'background-color 0.3s ease, transform 0.2s ease',
          '&:hover': {
               backgroundColor: theme.palette.primary.dark,
               transform: 'scale(1.05)',
          },
     }));

     const FadeInBox = styled(Box)({
          animation: 'fadeIn 1s ease-out',
          '@keyframes fadeIn': {
               '0%': { opacity: 0, transform: 'translateY(20px)' },
               '100%': { opacity: 1, transform: 'translateY(0)' },
          },
     });
     return (

          <Box style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
               < Navbar />


               <Box style={{ flexGrow: 1, display: 'flex', marginTop: '90px', marginRight: '200px', margin: '100px' }}>
                    <Grid container spacing={3}>
                         {/* Left side: Student list */}
                         <Grid item xs={3} >
                              <FadeInBox >
                                   <AnimatedCard >
                                        <CardContent >
                                             <Typography variant="h6" align="center" sx={{
                                                  backgroundColor: '#1d4f67',
                                                  
                                                  color: 'white',
                                                  height: '10vh',
                                                  padding: '8px',
                                                  borderRadius: '8px',

                                                  alignContent: "center"
                                             }}>List of Students</Typography>
                                             <List sx={{
                                                  overflowY: 'auto', // Use 'auto' instead of 'scroll' to hide the scrollbar when not needed
                                                  maxHeight: '69.74vh',
                                                  '&::-webkit-scrollbar': {
                                                       width: '8px', // Adjust the width of the scrollbar
                                                  },
                                                  '&::-webkit-scrollbar-thumb': {
                                                       backgroundColor: '#888', // Scrollbar thumb color
                                                       borderRadius: '4px', // Rounded corners for the scrollbar thumb
                                                  },
                                                  '&::-webkit-scrollbar-thumb:hover': {
                                                       backgroundColor: '#555', // Darker color when hovering over the scrollbar thumb
                                                  },
                                                  '&::-webkit-scrollbar-track': {
                                                       backgroundColor: '#f1f1f1', // Background color of the scrollbar track
                                                  },
                                             }} >
                                                  {students.map((student, index) => (
                                                       <ListItem key={index}>
                                                            <ListItemText primary={student} />
                                                       </ListItem>
                                                  ))}
                                             </List>
                                        </CardContent>
                                   </AnimatedCard>
                              </FadeInBox>
                         </Grid>

                         {/* Right side: Schedule, Group Name, and Chat */}
                         <Grid item xs={9} style={{ display: 'flex', flexDirection: 'column', }}>
                              {/* Schedule and Group Name Section */}
                              <Grid container spacing={2} style={{ marginBottom: '20px' }}>
                                   <Grid item xs={8}>
                                        <FadeInBox>
                                             <AnimatedCard>
                                                  <CardContent sx={{
                                                       overflowY: 'auto', // Use 'auto' instead of 'scroll' to hide the scrollbar when not needed
                                                       height: '10vh',
                                                       '&::-webkit-scrollbar': {
                                                            width: '8px', // Adjust the width of the scrollbar
                                                       },
                                                       '&::-webkit-scrollbar-thumb': {
                                                            backgroundColor: '#888', // Scrollbar thumb color
                                                            borderRadius: '4px', // Rounded corners for the scrollbar thumb
                                                       },
                                                       '&::-webkit-scrollbar-thumb:hover': {
                                                            backgroundColor: '#555', // Darker color when hovering over the scrollbar thumb
                                                       },
                                                       '&::-webkit-scrollbar-track': {
                                                            backgroundColor: '#f1f1f1', // Background color of the scrollbar track
                                                       },
                                                  }}>
                                                       <Typography align="center" >wed - 03:00 pm till -05:00 pm <br />  wed - 03:00 pm till -05:00 pm <br />wed - 03:00 pm till -05:00 pm </Typography>
                                                  </CardContent>
                                             </AnimatedCard>
                                        </FadeInBox>
                                   </Grid>
                                   <Grid item xs={4} >
                                        <FadeInBox>
                                             <AnimatedCard>
                                                  <CardContent sx={{
                                                       backgroundColor: '#1d4f67',
                                                       color: 'white',
                                                       height: '10vh',
                                                       padding: '8px',
                                                       borderRadius: '4px',

                                                       alignContent: "center"
                                                  }}>
                                                       <Typography align="center" sx={{ fontWeight: "bold", fontSize: "larger" }} >Group Name</Typography>
                                                  </CardContent>
                                             </AnimatedCard>
                                        </FadeInBox>
                                   </Grid>
                              </Grid>

                              {/* Chat Section */}
                              <FadeInBox >
                                   <AnimatedCard style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' ,marginTop:"15px"}}>
                                        <CardContent style={{ flexGrow: 1 }} >
                                             <Typography variant="body1">Where chat should appear</Typography>
                                             {/* Additional chat content can be added here */}
                                        </CardContent>

                                        {/* Send Message Section */}
                                        <Box style={{ padding: '10px', display: 'flex', alignItems: 'end', maxHeight: '71.5vh', minHeight: '60.56vh' }} sx={{
                                             overflowY: 'auto', // Use 'auto' instead of 'scroll' to hide the scrollbar when not needed
                                             maxHeight: '78.74vh',
                                             '&::-webkit-scrollbar': {
                                                  width: '8px', // Adjust the width of the scrollbar
                                             },
                                             '&::-webkit-scrollbar-thumb': {
                                                  backgroundColor: '#888', // Scrollbar thumb color
                                                  borderRadius: '4px', // Rounded corners for the scrollbar thumb
                                             },
                                             '&::-webkit-scrollbar-thumb:hover': {
                                                  backgroundColor: '#555', // Darker color when hovering over the scrollbar thumb
                                             },
                                             '&::-webkit-scrollbar-track': {
                                                  backgroundColor: '#f1f1f1', // Background color of the scrollbar track
                                             },
                                        }} >
                                             <TextField
                                                  variant="outlined"
                                                  placeholder="Send a message"
                                                  fullWidth
                                                  style={{ marginRight: '10px' }}
                                             />
                                             <AnimatedButton variant="contained" sx={{
                                                  backgroundColor: '#fa8419',
                                                  '&:hover': { backgroundColor: '#fa8419' }  // Ensures the hover state is also the same color
                                             }}>
                                                  Send
                                             </AnimatedButton>
                                        </Box>
                                   </AnimatedCard>
                              </FadeInBox>
                         </Grid>
                    </Grid>
               </Box>
          </Box>
     );
};


export default GroupDashboard