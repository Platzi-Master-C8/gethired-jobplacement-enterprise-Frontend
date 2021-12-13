import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function createData(id, name, portfolio, experience, salary, start) {
  return { id, name, portfolio, experience, salary, start };
}

const rows = [
  createData(1, 'John Doe', 'Dribble', '1 year', '2k USD', '01/10/2020'),
  createData(2, 'Adaline Reichel', 'Behance', '2 years', '3k USD', '15/11/2021'),
  createData(3, 'Gracie Weber', 'GitHub', '3 years', '5k USD', '23/06/2000'),
  createData(4, 'Keegan Thiel', 'GitHub', '5 years', '4k USD', '06/02/2011'),
  createData(5, 'Roscoe Johns', 'Behance', '1 year', '1k USD', '30/11/2016'),
];

export const ApplicantComparison = () => {
  return (
      <Container>
        <Grid container spacing={3} sx={{ m: "auto", maxWidth: 600 }}>
            <Typography variant="h2" align="center" sx={{ mb: 2 }}>
                Applicant comparison
            </Typography>
            
            <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="right">name</TableCell>
                    <TableCell align="right">portfolio</TableCell>
                    <TableCell align="right">experience</TableCell>
                    <TableCell align="right">salary</TableCell>
                    <TableCell align="right">start</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.id}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.portfolio}</TableCell>
                    <TableCell align="right">{row.experience}</TableCell>
                    <TableCell align="right">{row.salary}</TableCell>
                    <TableCell align="right">{row.start}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </Grid>
    </Container>
  );
}