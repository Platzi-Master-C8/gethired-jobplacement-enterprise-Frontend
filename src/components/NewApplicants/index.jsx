import React from 'react';
import { format } from 'date-fns';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { TablePaginationActions } from '../TablePagination';
import { ApplicantItemCard } from '../ApplicantItemCard';

const applicants = [
    {
        id: 1,
        name: 'Diego Lozano',
        vacancy: 'Backend Developer',
        company: 'Company 1',
        date: new Date(2022, 1, 1),
    },
    {
        id: 2,
        name: 'Zajith Corro',
        vacancy: 'React Developer',
        company: 'Company 2',
        date: new Date(2022, 1, 1),
    },
    {
        id: 3,
        name: 'Jimmy Anaya',
        vacancy: 'PHP Backend Developer',
        company: 'Company 3',
        date: new Date(2022, 1, 1),
    },
    {
        id: 4,
        name: 'Leonardo Mendoza',
        vacancy: 'Frontend Developer',
        company: 'Company 4',
        date: new Date(2022, 1, 1),
    },
    {
        id: 5,
        name: 'Fernando Leon',
        vacancy: 'JavaScript Developer',
        company: 'Company 1',
        date: new Date(2022, 1, 1),
    },
    {
        id: 6,
        name: 'Daniel González',
        vacancy: 'Fullstack Developer',
        company: 'Company 3',
        date: new Date(2022, 1, 1),
    },
];

export const NewApplicants = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - applicants.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <TableContainer component={Paper} elevation={3}>
            <Typography variant="h2" sx={{ p: 2 }}>
                New postulants
            </Typography>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                <TableBody>
                    {(rowsPerPage > 0
                        ? applicants.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : applicants
                    ).map((applicant) => (
                        <TableRow key={applicant.id}>
                            <TableCell component="th" scope="row">
                                <ApplicantItemCard
                                    name={applicant.name}
                                    vacancy={applicant.vacancy}
                                    company={applicant.company}
                                    date={format(applicant.date, 'dd/MM/yyyy')}
                                />
                            </TableCell>
                        </TableRow>
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
                            count={applicants.length}
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
    );
};
