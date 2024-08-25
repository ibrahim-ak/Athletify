import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, IconButton, Dialog, DialogTitle, DialogContent } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'; // Material-UI delete icon
import EditIcon from '@mui/icons-material/Edit'; // Material-UI edit icon
import axios from 'axios';
import UpdateStudentForm from './UpdateStudentForm'; // Import your UpdateStudentForm component

const StudentsList = ({ students = [], removeFromDom }) => {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/student/${id}`)
            .then(res => {
                removeFromDom(id);
            })
            .catch(err => console.error(err));
    };

    const handleEditClick = (student) => {
        setSelectedStudent(student);
        setOpenDialog(true);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
        setSelectedStudent(null); // Reset selected student
    };

    const handleUpdate = (updatedStudent) => {
        // Logic to update the student in the list if needed
        handleDialogClose();
    };

    return (
        <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#1d4f67' }}>Students List</Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#1d4f67' }}>
                            <TableCell sx={{ color: 'white' }}>Username</TableCell>
                            <TableCell sx={{ color: 'white' }}>Phone</TableCell>
                            <TableCell sx={{ color: 'white' }}>Gender</TableCell>
                            <TableCell sx={{ color: 'white' }}>Age</TableCell>
                            <TableCell sx={{ color: 'white' }}>Group</TableCell>
                            <TableCell sx={{ color: 'white' }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map(student => (
                            student ? ( // Ensure student is defined
                                <TableRow key={student._id}>
                                    <TableCell>{student.username || 'N/A'}</TableCell>
                                    <TableCell>{student.phone || 'N/A'}</TableCell>
                                    <TableCell>{student.gender || 'N/A'}</TableCell>
                                    <TableCell>{student.age || 'N/A'}</TableCell>
                                    <TableCell>{student.group ? student.group.Name : 'No Group'}</TableCell>
                                    <TableCell>
                                        <IconButton
                                            onClick={() => handleDelete(student._id)}
                                            sx={{
                                                color: '#1d4f67',
                                                '&:hover': {
                                                    color: '#ff6f31'
                                                }
                                            }}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                        <IconButton
                                            onClick={() => handleEditClick(student)}
                                            sx={{
                                                color: '#1d4f67',
                                                '&:hover': {
                                                    color: '#ff6f31'
                                                }
                                            }}
                                        >
                                            <EditIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ) : null
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Dialog for updating student */}
            <Dialog open={openDialog} onClose={handleDialogClose} fullWidth maxWidth="md">
                <DialogTitle>Update Student Information</DialogTitle>
                <DialogContent>
                    {selectedStudent && (
                        <UpdateStudentForm studentId={selectedStudent._id} onUpdate={handleUpdate} />
                    )}
                </DialogContent>
            </Dialog>
        </Paper>
    );
};

export default StudentsList;
