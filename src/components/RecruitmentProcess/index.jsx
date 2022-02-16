import React, { Fragment } from 'react';
import moment from 'moment';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { StyledTableCell, StyledTableRow } from '../TableStyling';
import { capWord } from './helpers';

const process = [
    {
        id: 1,
        phase: 'apply',
        status: true,
        date: new Date(),
    },
    {
        id: 2,
        phase: 'interview',
        status: true,
        date: new Date(),
    },
    {
        id: 3,
        phase: 'tech test',
        status: true,
        date: new Date(),
    },
    {
        id: 4,
        phase: 'feedback',
        status: false,
        date: '',
    },
    {
        id: 5,
        phase: 'final response',
        status: false,
        date: '',
    },
];

export const RecruitmentProcess = () => {
    return (
        <Fragment>
            <Typography variant="h2" sx={{ mb: 2 }}>
                Recruitment Progress
            </Typography>
            <TableContainer component={Paper} elevation={3} sx={{ px: 4, pb: 4, mb: 2, width: 'auto' }}>
                <Table aria-label="simple table">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell align="center" className="id">
                                Status
                            </StyledTableCell>
                            <StyledTableCell align="center">Stage</StyledTableCell>
                            <StyledTableCell align="center">Date</StyledTableCell>
                            <StyledTableCell align="center">Details</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {process.map((row, index) => {
                            const labelId = `enhanced-table-checkbox-${index}`;

                            return (
                                <StyledTableRow key={row.id}>
                                    <StyledTableCell align="center" padding="checkbox">
                                        <Checkbox
                                            color="primary"
                                            checked={row.status}
                                            inputProps={{
                                                'aria-labelledby': labelId,
                                            }}
                                        />
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{capWord(row.phase)}</StyledTableCell>
                                    <StyledTableCell align="center">
                                        {row.date ? moment(row.date).format('DD/MM/YYYY') : '-'}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        {index === 1 || index > 2 ? (
                                            <Button variant="contained" sx={{ maxHeight: 40 }}>
                                                Rate
                                            </Button>
                                        ) : (
                                            <Button variant="outlined" sx={{ maxHeight: 40 }}>
                                                View
                                            </Button>
                                        )}
                                    </StyledTableCell>
                                </StyledTableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    );
};
