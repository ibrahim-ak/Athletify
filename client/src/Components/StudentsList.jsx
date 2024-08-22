import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import Button from '@mui/material/Button';

import axios from 'axios';


const StudentsList = ({ students, setStudents, removeFromDom  }) => {



    const handleDelete = (id) => {
        axios.delete('http://localhost:8000/api/student/' + id)
          .then(res => {
            removeFromDom(id);
          })
          .catch(err => console.error(err));
    };




  return (
    <Paper style={{ padding: 16 }}>
      <Typography variant="h6" gutterBottom sx={{ color: '#1d4f67' }}>Students List</Typography>
      <TableContainer>
        <Table>
          <TableHead sx={{ backgroundColor: '#1d4f67' }}>
            <TableRow>
              <TableCell sx={{ color: 'white' }}>Username</TableCell>
              <TableCell sx={{ color: 'white' }}>Phone</TableCell>
              <TableCell sx={{ color: 'white' }}>gender</TableCell>
              <TableCell sx={{ color: 'white' }}>age</TableCell> 
              <TableCell sx={{ color: 'white' }}>group</TableCell> 
              <TableCell sx={{ color: 'white' }}>Action</TableCell> 

              

            </TableRow>
          </TableHead>
          <TableBody>
            {students.map(student => (
              <TableRow key={student._id}>
                <TableCell>{student.username}</TableCell>
                <TableCell>{student.phone}</TableCell>
                <TableCell>{student.gender}</TableCell>
                <TableCell>{student.age}</TableCell>
                <TableCell>{student.group ? student.group.Name : 'No Group'}</TableCell>

                <TableCell>
                <Button 
                variant="contained" 
                sx={{ backgroundColor: 'rgb(250 132 25)', color: '#FFFFFF' }} 
                onClick={() => handleDelete(student._id)}>DELETE</Button>
                </TableCell> {/* Add Delete button */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default StudentsList;
