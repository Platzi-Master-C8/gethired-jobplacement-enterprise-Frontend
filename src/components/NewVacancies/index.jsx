import * as React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { Typography } from '@mui/material';
import { VacancyItemCard } from '../VacancyItemCard';

const TablePaginationActions = ({ count, page, rowsPerPage, onPageChange }) => {
    const theme = useTheme();

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton onClick={handleFirstPageButtonClick} disabled={page === 0} aria-label="first page">
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
};

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

const vacancies = [
    {
        id: 1,
        vacancy: 'Backend Developer',
        applications: 10,
        company: 'Company 1',
        date: new Date(2022, 1, 1),
    },
    {
        id: 2,
        vacancy: 'React Developer',
        applications: 8,
        company: 'Company 2',
        date: new Date(2022, 1, 1),
    },
    {
        id: 3,
        vacancy: 'PHP Backend Developer',
        applications: 11,
        company: 'Company 3',
        date: new Date(2022, 1, 1),
    },
    {
        id: 4,
        vacancy: 'Frontend Developer',
        applications: 5,
        company: 'Company 4',
        date: new Date(2022, 1, 1),
    },
    {
        id: 5,
        vacancy: 'JavaScript Developer',
        applications: 50,
        company: 'Company 1',
        date: new Date(2022, 1, 1),
    },
    {
        id: 6,
        vacancy: 'Fullstack Developer',
        applications: 4,
        company: 'Company 3',
        date: new Date(2022, 1, 1),
    },
];

export const NewVacancies = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - vacancies.length) : 0;

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
                Last vacancies created
            </Typography>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                <TableBody>
                    {(rowsPerPage > 0
                        ? vacancies.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : vacancies
                    ).map((vacancy) => (
                        <TableRow key={vacancy.id}>
                            <TableCell component="th" scope="row">
                                <VacancyItemCard
                                    vacancy={vacancy.vacancy}
                                    applications={vacancy.applications}
                                    date={moment(vacancy.date).format('DD/MM/YYYY')}
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
                            count={vacancies.length}
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
