import React, { useState } from 'react';
import { Button, TextField, MenuItem, Box, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';
import axios from 'axios';

const TrainingTimeForm = ({ open, onClose, ...props }) => {

     const [trainingTimes, setTrainingTimes] = useState([{ start: "", end: "", day: "" }]);

     const handleAddTrainingTime = () => {
          setTrainingTimes([...trainingTimes, { start: "", end: "", day: "" }]);
     };

     const handleChange = (index, field, value) => {
          const newTrainingTimes = [...trainingTimes];
          newTrainingTimes[index][field] = value;
          setTrainingTimes(newTrainingTimes);
     };

     const handleSubmit = async (e) => {
          e.preventDefault();

          try {
               const res = await axios.patch(`http://localhost:8000/api/group/${props.thisid}`, {
                    trainingTimes
               });

               const updatedGroup = res.data.group;

               props.setTimes(prevList =>
                    prevList.map(group =>
                         group._id === updatedGroup._id ? { ...group, trainingTimes: updatedGroup.trainingTimes } : group
                    )
               );

               onClose();
          } catch (error) {
               console.error("Error updating the training times:", error);
               alert("There was an error updating the training times. Please try again.");
          }
     };
     return (
          <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
               <DialogTitle> Training Times</DialogTitle>
               <DialogContent>
                    {trainingTimes.map((time, index) => (
                         <Box key={index} display="flex" alignItems="center" mb={2}>
                              <TextField
                                   type="time"
                                   value={time.start}
                                   onChange={(e) => handleChange(index, 'start', e.target.value)}
                                   label="Start Time"
                                   fullWidth
                              />
                              <TextField
                                   type="time"
                                   value={time.end}
                                   onChange={(e) => handleChange(index, 'end', e.target.value)}
                                   label="End Time"
                                   fullWidth
                                   sx={{ ml: 2 }}
                              />
                              <TextField
                                   select
                                   label="Day"
                                   value={time.day}
                                   onChange={(e) => handleChange(index, 'day', e.target.value)}
                                   fullWidth
                                   sx={{ ml: 2 }}
                              >
                                   {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                                        <MenuItem key={day} value={day}>
                                             {day}
                                        </MenuItem>
                                   ))}
                              </TextField>
                         </Box>
                    ))}
                    <Button onClick={handleAddTrainingTime} variant="contained" color="primary">
                         Add Training Time
                    </Button>
               </DialogContent>
               <DialogActions>
                    <Button onClick={onClose} color="secondary">
                         Cancel
                    </Button>
                    <Button
                         onClick={handleSubmit}
                         variant="contained"
                         color="primary"
                         startIcon={<UpdateIcon />}
                    >
                         Update
                    </Button>
               </DialogActions>
          </Dialog>
     );
};

export default TrainingTimeForm;
