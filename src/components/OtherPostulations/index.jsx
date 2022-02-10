import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function createData(id, name, portfolio, experience, salary, start) {
    return { id, name, portfolio, experience, salary, start };
}

const rows = [
    createData(1, 'John Doe', 'Dribble', '1 year', '2k USD', '01/10/2020'),
    createData(2, 'Adaline Reichel', 'Behance', '2 years', '3k USD', '15/11/2021'),
    createData(3, 'Gracie Weber', 'GitHub', '3 years', '5k USD', '23/06/2000'),
];

export const OtherPostulations = () => {
    return (
        <React.Fragment>
            {/* <Grid container spacing={3} > */}
            <Typography variant="h2" sx={{ mb: 2 }}>
                Other Postulations
            </Typography>
            <TableContainer component={Paper} elevation={3} sx={{ px: 4 }}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Company</TableCell>
                            <TableCell align="right">Offer</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.portfolio}</TableCell>
                                <TableCell align="right">{row.experience}</TableCell>
                                <TableCell align="right">{row.salary}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* </Grid> */}
        </React.Fragment>
    );
};
