import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { StyledTableRow, StyledTableCell } from '../TableStyling';

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
        <React.Fragment>
            <Typography variant="h2" sx={{ mb: 2 }}>
                Applicant comparison
            </Typography>
            <TableContainer component={Paper} elevation={3} sx={{ px: 2, pb: 4, mb: 2, width: 'auto' }}>
                <Table aria-label="simple table">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell align="right">name</StyledTableCell>
                            <StyledTableCell align="right">portfolio</StyledTableCell>
                            <StyledTableCell align="right">experience</StyledTableCell>
                            <StyledTableCell align="right">salary</StyledTableCell>
                            <StyledTableCell align="right">start</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <StyledTableCell component="th" scope="row">
                                    {row.id}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.name}</StyledTableCell>
                                <StyledTableCell align="right">{row.portfolio}</StyledTableCell>
                                <StyledTableCell align="right">{row.experience}</StyledTableCell>
                                <StyledTableCell align="right">{row.salary}</StyledTableCell>
                                <StyledTableCell align="right">{row.start}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment>
    );
};
