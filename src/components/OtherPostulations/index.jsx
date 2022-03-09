import React, { Fragment } from 'react';
import { format } from 'date-fns';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { TablePaginationActions } from '../TablePagination';
import { StyledTableCell, StyledTableRow } from '../TableStyling';
import { capWord } from '../RecruitmentProcess/helpers';

const postulations = [
    {
        id: 1,
        company: 'Perry Hansen',
        vacancy: 'UX Designer',
        stage: 'apply',
        date: new Date(),
    },
    {
        id: 2,
        company: 'Prof. Olen Turcotte',
        vacancy: 'Frontend Developer',
        stage: 'apply',
        date: new Date(),
    },
    {
        id: 3,
        company: 'Hilton Rutherford',
        vacancy: 'React Developer',
        stage: 'interview',
        date: new Date(),
    },
    {
        id: 4,
        company: 'Dr. Tyree Maggio',
        vacancy: 'Fullstack Developer',
        stage: 'tech test',
        date: new Date(),
    },
    {
        id: 5,
        company: 'Dr. Viviane Ritchie',
        vacancy: 'Junior React Developer',
        stage: 'feedback',
        date: new Date(),
    },
    {
        id: 6,
        company: 'Dr. Viviane Ritchie',
        vacancy: 'Junior React Developer',
        stage: 'feedback',
        date: new Date(),
    },
];

export const OtherPostulations = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(3);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - postulations.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Fragment>
            <Typography variant="h2" sx={{ mb: 2 }}>
                Other Postulations
            </Typography>
            <TableContainer component={Paper} elevation={3} sx={{ px: 4, width: 'auto' }}>
                <Table aria-label="simple table">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell align="center">ID</StyledTableCell>
                            <StyledTableCell align="center">Company</StyledTableCell>
                            <StyledTableCell align="center">Vacancy</StyledTableCell>
                            <StyledTableCell align="center">Stage</StyledTableCell>
                            <StyledTableCell align="center">Date</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? postulations.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : postulations
                        ).map((row) => (
                            <StyledTableRow key={row.id}>
                                <StyledTableCell component="th" scope="row" align="center">
                                    {row.id}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.company}</StyledTableCell>
                                <StyledTableCell align="center">{row.vacancy}</StyledTableCell>
                                <StyledTableCell align="center">{capWord(row.stage)}</StyledTableCell>
                                <StyledTableCell align="center">{format(row.date, 'dd/MM/yyyy')}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[{ label: 'All', value: -1 }]}
                                colSpan={3}
                                count={postulations.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: {
                                        'aria-label': 'rows per page',
                                    },
                                    native: true,
                                }}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </Fragment>
    );
};
