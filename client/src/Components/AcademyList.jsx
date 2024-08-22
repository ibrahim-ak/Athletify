import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import DeleteButton from './deletebutton'; // Ensure the correct path

const AcademyList = ({ academies, setAcademies }) => {
  const handleDelete = (deletedAcademyId) => {
    // Filter out the deleted academy from the list
    setAcademies(prevAcademies => prevAcademies.filter(academy => academy._id !== deletedAcademyId));
  };

  return (
    <Paper style={{ padding: 16 }}>
      <Typography variant="h6" gutterBottom sx={{ color: '#1d4f67' }}>Academy List</Typography>
      <TableContainer>
        <Table>
          <TableHead sx={{ backgroundColor: '#1d4f67' }}>
            <TableRow>
              <TableCell sx={{ color: 'white' }}>Username</TableCell>
              <TableCell sx={{ color: 'white' }}>Email</TableCell>
              <TableCell sx={{ color: 'white' }}>Phone</TableCell>
              <TableCell sx={{ color: 'white' }}>Address</TableCell>
              <TableCell sx={{ color: 'white' }}>Actions</TableCell> {/* Add Actions header */}
            </TableRow>
          </TableHead>
          <TableBody>
            {academies.map(academy => (
              <TableRow key={academy._id}>
                <TableCell>{academy.username}</TableCell>
                <TableCell>{academy.email}</TableCell>
                <TableCell>{academy.phone}</TableCell>
                <TableCell>{academy.address}</TableCell>
                <TableCell>
                  <DeleteButton 
                    academyId={academy._id} 
                    onDelete={handleDelete} 
                  />
                </TableCell> {/* Add Delete button */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default AcademyList;
