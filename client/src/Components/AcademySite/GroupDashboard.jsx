// import { Box, Button, Card, CardContent, Grid, List, ListItem, ListItemText, Paper, styled, TextField, Typography } from '@mui/material'
// import { Container, height, margin, maxHeight, minHeight } from '@mui/system'

// import React, { useEffect, useState } from 'react'
// import UpdateIcon from '@mui/icons-material/Update'
// import TrainingTimeForm from './TrainingTimeForm'
// import { useParams } from 'react-router-dom'
// import axios from 'axios'
// // import { Button } from '@mui/material';
// // import UpdateIcon from '@mui/icons-material/Update';

// import StaticNavBar from "../StaticNavBar"

// const GroupDashboard = () => {
//      const [open, setOpen] = useState(false);
//      const students = ['John Doe', 'Jane Smith', 'Michael Brown', 'Emily White', 'John Doe', 'Jane Smith', 'Michael Brown', 'Emily White', 'John Doe', 'Jane Smith', 'Michael Brown', 'Emily White', 'John Doe', 'Jane Smith', 'Michael Brown', 'Emily White', 'Jane Smith', 'Michael Brown', 'Emily White', 'Jane Smith', 'Michael Brown', 'Emily White', 'Jane Smith', 'Michael Brown', 'Emily White', 'Jane Smith', 'Michael Brown', 'Emily White']; // Example student names
//      const { id } = useParams();

//      const [times, setTimes] = useState([])

//      const handleOpen = () => {
//           setOpen(true);
//      };

//      useEffect(() => {
//           axios.get(`http://localhost:8000/api/group/${id}`)
//               .then((res) => {
//                   if (res.data && res.data.group && Array.isArray(res.data.group.trainingTimes)) {
//                       setTimes(res.data.group.trainingTimes); // Update state with training times
//                   } 
//               })
//               .catch((err) => {
//                   console.error('Error fetching group data:', err);
//                   setTimes([]); // Fallback to empty array on error
//               });
//       }, [id]); // Dependency on 'id' to refetch when it changes









//      const handleClose = () => {
//           setOpen(false);
//      }

//      const AnimatedCard = styled(Card)(({ theme }) => ({
//           height: '100%',
//           borderRadius: '20px',
//           transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//           '&:hover': {
//                transform: 'scale(1.02)',
//                boxShadow: theme.shadows[6],
//           },
//      }));

//      const AnimatedButton = styled(Button)(({ theme }) => ({
//           height: '56px',
//           borderRadius: '20px',
//           transition: 'background-color 0.3s ease, transform 0.2s ease',
//           '&:hover': {
//                backgroundColor: theme.palette.primary.dark,
//                transform: 'scale(1.05)',
//           },
//      }));

//      const FadeInBox = styled(Box)({
//           animation: 'fadeIn 1s ease-out',
//           '@keyframes fadeIn': {
//                '0%': { opacity: 0, transform: 'translateY(20px)' },
//                '100%': { opacity: 1, transform: 'translateY(0)' },
//           },
//      });
//      return (

//           <Box style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
//           {/* <StaticNavBar tab1={'Home'} tab2={'Members'} tab3={'Groups'}/> */}


//                <Box style={{ flexGrow: 1, display: 'flex', marginTop: '90px', marginRight: '200px', margin:'50px' }}>
//                     <Grid container spacing={3}>
//                          <Grid item xs={3} >
//                               <FadeInBox >
//                                    <AnimatedCard >
//                                         <CardContent >
//                                              <Typography variant="h6" align="center" sx={{
//                                                   backgroundColor: '#1d4f67',

//                                                   color: 'white',
//                                                   height: '10vh',
//                                                   padding: '8px',
//                                                   borderRadius: '8px',

//                                                   alignContent: "center"
//                                              }}>List of Students</Typography>
//                                              <List sx={{
//                                                   overflowY: 'auto', // Use 'auto' instead of 'scroll' to hide the scrollbar when not needed
//                                                   maxHeight: '69.74vh',
//                                                   '&::-webkit-scrollbar': {
//                                                        width: '8px', // Adjust the width of the scrollbar
//                                                   },
//                                                   '&::-webkit-scrollbar-thumb': {
//                                                        backgroundColor: '#888', // Scrollbar thumb color
//                                                        borderRadius: '4px', // Rounded corners for the scrollbar thumb
//                                                   },
//                                                   '&::-webkit-scrollbar-thumb:hover': {
//                                                        backgroundColor: '#555', // Darker color when hovering over the scrollbar thumb
//                                                   },
//                                                   '&::-webkit-scrollbar-track': {
//                                                        backgroundColor: '#f1f1f1', // Background color of the scrollbar track
//                                                   },
//                                              }} >
//                                                   {students.map((student, index) => (
//                                                        <ListItem key={index}>
//                                                             <ListItemText primary={student} />
//                                                        </ListItem>
//                                                   ))}
//                                              </List>
//                                         </CardContent>
//                                    </AnimatedCard>
//                               </FadeInBox>
//                          </Grid>

//                          <Grid item xs={9} style={{ display: 'flex', flexDirection: 'column', }}>
//                               <Grid container spacing={2} style={{ marginBottom: '20px' }}>
//                                    <Grid item xs={8}>
//                                         <FadeInBox>
//                                              <AnimatedCard>
//                                                   <Grid container alignItems="center" justifyContent="center" sx={{
//                                                        overflowY: 'auto', // Use 'auto' instead of 'scroll' to hide the scrollbar when not needed
//                                                        maxHeight: '69.74vh',
//                                                        '&::-webkit-scrollbar': {
//                                                             width: '8px', // Adjust the width of the scrollbar
//                                                        },
//                                                        '&::-webkit-scrollbar-thumb': {
//                                                             backgroundColor: '#888', // Scrollbar thumb color
//                                                             borderRadius: '4px', // Rounded corners for the scrollbar thumb
//                                                        },
//                                                        '&::-webkit-scrollbar-thumb:hover': {
//                                                             backgroundColor: '#555', // Darker color when hovering over the scrollbar thumb
//                                                        },
//                                                        '&::-webkit-scrollbar-track': {
//                                                             backgroundColor: '#f1f1f1', // Background color of the scrollbar track
//                                                        },
//                                                        maxHeight: "10vh",
//                                                        padding: '10px',
//                                                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Optional: Shadow for a raised effect
//                                                   }}>
//                                                        {/* Left Side - Time Schedule */}
//                                                        <Grid item xs={2} sx={{
//                                                             display: 'flex',
//                                                             justifyContent: 'center',
//                                                             alignItems: 'center',
//                                                             borderRight: '1px solid #ddd', // Optional: Add a dividing line
//                                                             padding: '0 10px',
//                                                        }}>
//                                                             <Typography variant="body1">Time Schedule</Typography>
//                                                        </Grid>
//                                                        <Grid item xs={8} sx={{ textAlign: 'center', padding: '0 10px' }}>
//     {Array.isArray(times) && times.map((time, key) => (
//         <li key={key}>
//             {time.day} | {time.start} - {time.end}
//         </li>
//     ))}
// </Grid>

 
                                                       

//                                                        {/* Right Side - Button with Update Icon */}
//                                                        <Grid item xs={2} sx={{
//                                                             display: 'flex',
//                                                             justifyContent: 'center',
//                                                             alignItems: 'center',
//                                                             borderLeft: '1px solid #ddd', // Optional: Add a dividing line
//                                                             padding: '0 10px',
//                                                        }}>
//                                                             <div>
//                                                                  <Button
//                                                                       variant="contained"
//                                                                       color="primary"
//                                                                       startIcon={<UpdateIcon />}
//                                                                       onClick={handleOpen}
//                                                                  >
//                                                                  </Button>
//                                                                  {/* Render the TrainingTimeForm with the Dialog */}
//                                                                  <TrainingTimeForm open={open} onClose={handleClose} thisid={id} setTimes={setTimes} timess={times} />
//                                                             </div>
//                                                        </Grid>
//                                                   </Grid>

//                                              </AnimatedCard>
//                                         </FadeInBox>
//                                    </Grid>
//                                    <Grid item xs={4} >
//                                         <FadeInBox>
//                                              <AnimatedCard>
//                                                   <CardContent sx={{
//                                                        backgroundColor: '#1d4f67',
//                                                        color: 'white',
//                                                        height: '10vh',
//                                                        padding: '8px',
//                                                        borderRadius: '4px',

//                                                        alignContent: "center"
//                                                   }}>
//                                                        <Typography align="center" sx={{ fontWeight: "bold", fontSize: "larger" }} >Group Name</Typography>
//                                                   </CardContent>
//                                              </AnimatedCard>
//                                         </FadeInBox>
//                                    </Grid>
//                               </Grid>


//                               <FadeInBox>
//                                    <AnimatedCard style={{
//                                         display: 'flex',
//                                         flexDirection: 'column',
//                                         height: '100%',
//                                         marginTop: '15px'
//                                    }}>
//                                         <CardContent style={{
//                                              flexGrow: 1,
//                                              display: 'flex',
//                                              flexDirection: 'column',
//                                              justifyContent: 'space-between',
//                                              padding: 0
//                                         }}>
//                                              <Box style={{
//                                                   flexGrow: 1,
//                                                   overflowY: 'auto',
//                                                   padding: '10px',
//                                                   maxHeight: '57.56vh',
//                                                   minHeight: '57.56vh'
//                                              }} sx={{
//                                                   '&::-webkit-scrollbar': {
//                                                        width: '8px',
//                                                   },
//                                                   '&::-webkit-scrollbar-thumb': {
//                                                        backgroundColor: '#888',
//                                                        borderRadius: '4px',
//                                                   },
//                                                   '&::-webkit-scrollbar-thumb:hover': {
//                                                        backgroundColor: '#555',
//                                                   },
//                                                   '&::-webkit-scrollbar-track': {
//                                                        backgroundColor: '#f1f1f1',
//                                                   },
//                                              }}>
//                                                   <Typography variant="body1">
//                                                        Where chat should appear



//                                                   </Typography>

//                                              </Box>


//                                              <Box style={{
//                                                   padding: '10px',
//                                                   display: 'flex',
//                                                   alignItems: 'center',
//                                                   borderTop: '1px solid #ccc'
//                                              }}>
//                                                   <TextField
//                                                        variant="outlined"
//                                                        placeholder="Send a message"
//                                                        fullWidth
//                                                        style={{ marginRight: '10px' }}
//                                                   />
//                                                   <AnimatedButton variant="contained" sx={{
//                                                        backgroundColor: '#fa8419',
//                                                        '&:hover': { backgroundColor: '#fa8419' }
//                                                   }}>
//                                                        Send
//                                                   </AnimatedButton>
//                                              </Box>
//                                         </CardContent>
//                                    </AnimatedCard>
//                               </FadeInBox>
//                          </Grid> 
//                     </Grid>
//                </Box>
//           </Box>
//      );
// };


// export default GroupDashboard


   