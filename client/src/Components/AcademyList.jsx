import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const AcademyList = ({ academies }) => {
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
  </TableRow>
</TableHead>
          <TableBody>
            {academies.map(academy => (
              <TableRow key={academy._id}>
                <TableCell>{academy.Username}</TableCell>
                <TableCell>{academy.email}</TableCell>
                <TableCell>{academy.phone}</TableCell>
                <TableCell>{academy.address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default AcademyList;
