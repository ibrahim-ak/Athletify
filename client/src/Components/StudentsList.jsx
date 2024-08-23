import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentsList = ({ students = [], removeFromDom }) => {

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/student/${id}`)
            .then(res => {
                removeFromDom(id);
            })
            .catch(err => console.error(err));
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
                                    <button
  className="btn btn-outline-danger"
  onClick={() => handleDelete(student._id)}
>
  DELETE
</button>

                                    </TableCell>
                                </TableRow>
                            ) : null
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default StudentsList;
