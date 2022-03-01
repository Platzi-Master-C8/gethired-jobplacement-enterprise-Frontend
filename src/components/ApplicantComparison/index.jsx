/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

import { TableFooter, TablePagination } from '@mui/material';
import { StyledTableRow, StyledTableCell } from '../TableStyling';
import { TablePaginationActions } from '../TablePagination';

export const ApplicantComparison = (applicants) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(3);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (
        <React.Fragment>
            <Typography variant="h2" sx={{ mb: 2 }}>
                Applicant comparison
            </Typography>
            <TableContainer component={Paper} elevation={3} sx={{ px: 2, pb: 4, mb: 2, width: 'auto' }}>
                {applicants.applicants.message === 'No Applicants have been added to the vacancy' ? (
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 100,
                        }}
                    >
                        <Typography variant="h3">{applicants.applicants.message}</Typography>
                    </Box>
                ) : (
                    <Table aria-label="simple table">
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell>ID</StyledTableCell>
                                <StyledTableCell align="right">Name</StyledTableCell>
                                <StyledTableCell align="right">CV</StyledTableCell>
                                <StyledTableCell align="right">Email</StyledTableCell>
                                <StyledTableCell align="right">Phone</StyledTableCell>
                                <StyledTableCell align="right">Vacancy application</StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {applicants.applicants.map((applicant) => (
                                <StyledTableRow
                                    key={applicant.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <StyledTableCell component="th" scope="row">
                                        {applicant.vacancy_id}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{applicant.name}</StyledTableCell>
                                    <StyledTableCell align="right">{applicant.cv_url}</StyledTableCell>
                                    <StyledTableCell align="right">{applicant.email}</StyledTableCell>
                                    <StyledTableCell align="right">{applicant.cellphone}</StyledTableCell>
                                    <StyledTableCell align="right">
                                        {applicant.postulation_status.created_at}
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[{ label: 'All', value: -1 }]}
                                    colSpan={5}
                                    count={applicants.applicants.length}
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
                )}
            </TableContainer>
        </React.Fragment>
    );
};

ApplicantComparison.propTypes = {
    applicants: PropTypes.shape({
        vacancy_id: PropTypes.number,
        name: PropTypes.string,
        email: PropTypes.string,
        country: PropTypes.string,
        city: PropTypes.string,
    }).isRequired,
};
