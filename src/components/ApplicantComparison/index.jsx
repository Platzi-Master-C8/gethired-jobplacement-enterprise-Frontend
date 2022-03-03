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
import { format, parseISO } from 'date-fns';

import { TableFooter, TablePagination } from '@mui/material';
import { StyledTableRow, StyledTableCell } from '../TableStyling';
import { TablePaginationActions } from '../TablePagination';

export const ApplicantComparison = ({ applicants }) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
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
                {applicants.message === 'No Applicants have been added to the vacancy' ? (
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 100,
                        }}
                    >
                        <Typography variant="h3">{applicants.message}</Typography>
                    </Box>
                ) : (
                    <Table aria-label="simple table">
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell>ID</StyledTableCell>
                                <StyledTableCell align="center">Name</StyledTableCell>
                                <StyledTableCell align="center">CV</StyledTableCell>
                                <StyledTableCell align="center">Email</StyledTableCell>
                                <StyledTableCell align="center">Phone</StyledTableCell>
                                <StyledTableCell align="center">Applied on</StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {applicants.map((applicant) => (
                                <StyledTableRow
                                    key={applicant.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <StyledTableCell component="th" scope="row">
                                        {applicant.id}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{applicant.name}</StyledTableCell>
                                    <StyledTableCell align="center">{applicant.cv_url}</StyledTableCell>
                                    <StyledTableCell align="center">{applicant.email}</StyledTableCell>
                                    <StyledTableCell align="center">{applicant.cellphone}</StyledTableCell>
                                    <StyledTableCell align="center">
                                        {format(parseISO(applicant.postulation_status.created_at), 'MM/dd/yyyy')}
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[{ label: 'All', value: -1 }]}
                                    colSpan={5}
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
                )}
            </TableContainer>
        </React.Fragment>
    );
};

ApplicantComparison.propTypes = {
    applicants: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.shape({
                vacancy_id: PropTypes.number,
                name: PropTypes.string,
                email: PropTypes.string,
                country: PropTypes.string,
                city: PropTypes.string,
            }),
        ),
        PropTypes.shape({
            message: PropTypes.string,
            data: PropTypes.arrayOf(PropTypes.object),
        }),
    ]).isRequired,
};
