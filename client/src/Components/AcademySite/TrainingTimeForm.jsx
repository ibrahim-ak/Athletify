import React, { useState, useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Grid, Typography, Select, MenuItem } from '@mui/material';
import axios from 'axios';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const TrainingTimeForm = ({ open, onClose, thisid, setTimes, timess = [] }) => {
  // Define state for form inputs
  const [trainingTimes, setTrainingTimes] = useState([{ day: '', start: '', end: '' }]);

  // UseEffect to update state when timess changes
  useEffect(() => {
    if (timess.length > 0) {
      setTrainingTimes(timess);
    } else {
      setTrainingTimes([{ day: '', start: '', end: '' }]); // Default to one empty time slot
    }
  }, [timess]);

  // Handle changes to form inputs
  const handleInputChange = (index, event) => {
    const newTrainingTimes = [...trainingTimes];
    newTrainingTimes[index][event.target.name] = event.target.value;
    setTrainingTimes(newTrainingTimes);
  };

  const handleDayChange = (event, index) => {
    const newTrainingTimes = [...trainingTimes];
    newTrainingTimes[index].day = event.target.value;
    setTrainingTimes(newTrainingTimes);
  };

  // Add a new time slot
  const handleAddTimeSlot = () => {
    setTrainingTimes([...trainingTimes, { day: '', start: '', end: '' }]);
  };

  // Handle form submission
  const handleSubmit = () => {
    axios
      .patch(`http://localhost:8000/api/group/${thisid}`, { trainingTimes })
      .then((response) => {
        // Update the times in the parent component (if applicable)
        setTimes(response.data.trainingTimes);

        // Close the dialog
        onClose();

        // Optionally update local state if needed
        // Assuming you have a state that holds the list of training times
        // and want to update it with the response data
        // const updatedTimes = response.data.trainingTimes;
        // setTimes(prevList =>
        //   prevList.map(t =>
        //     t._id === updatedTimes._id ? updatedTimes : t
        //   )
        // );
      })
      .catch((error) => {
        console.error('There was an error updating the training times!', error);
      });
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Update Training Times</DialogTitle>
      <DialogContent>
        <Typography variant="body1" gutterBottom>
          Update the training times for this group:
        </Typography>
        {trainingTimes.map((time, index) => (
          <Grid container spacing={2} key={index} alignItems="center">
            <Grid item xs={4}>
              <Select
                value={time.day}
                onChange={(event) => handleDayChange(event, index)}
                fullWidth
                displayEmpty
                variant="outlined"
              >
                <MenuItem value="" disabled>
                  Select Day
                </MenuItem>
                {daysOfWeek.map((day) => (
                  <MenuItem key={day} value={day}>
                    {day}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Start Time"
                name="start"
                value={time.start}
                onChange={(event) => handleInputChange(index, event)}
                type="time"
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="End Time"
                name="end"
                value={time.end}
                onChange={(event) => handleInputChange(index, event)}
                type="time"
                fullWidth
              />
            </Grid>
          </Grid>
        ))}
        <Button onClick={handleAddTimeSlot} sx={{ marginTop: 2 }} variant="contained">
          Add Time Slot
        </Button>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TrainingTimeForm;