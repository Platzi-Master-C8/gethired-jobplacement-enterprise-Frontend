import React, { Fragment, useState } from 'react';
import { format } from 'date-fns';
import {
    Paper,
    Typography,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    IconButton,
    Menu,
    MenuItem,
    Button,
} from '@mui/material';

import CheckIcon from '@mui/icons-material/Check';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { StyledTableCell, StyledTableRow } from 'Components/TableStyling';
import { capWord } from './helpers';

const process = [
    {
        id: 1,
        phase: 'applied',
        status: true,
        date: new Date(),
    },
    {
        id: 2,
        phase: 'interviews',
        status: true,
        date: new Date(),
    },
    {
        id: 3,
        phase: 'accepted',
        status: true,
        date: new Date(),
    },
    {
        id: 4,
        phase: 'rejected',
        status: false,
        date: '',
    },
];

export const RecruitmentProcess = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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
                            <StyledTableCell align="center">Options</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {process.map((row, index) => {
                            return (
                                <StyledTableRow key={row.id}>
                                    <StyledTableCell align="center" padding="checkbox">
                                        {row.status ? (
                                            <CheckIcon color="primary" />
                                        ) : (
                                            <HorizontalRuleIcon color="secondary" />
                                        )}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{capWord(row.phase)}</StyledTableCell>
                                    <StyledTableCell align="center">
                                        {row.date ? format(row.date, 'dd/MM/yyyy') : '-'}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        {index > 0 ? (
                                            <Button variant="contained" sx={{ maxHeight: 40 }}>
                                                Rate
                                            </Button>
                                        ) : (
                                            <Button variant="outlined" sx={{ maxHeight: 40 }}>
                                                View
                                            </Button>
                                        )}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        <IconButton aria-label="settings" id="list-options" onClick={handleClick}>
                                            <MoreHorizIcon color="primary" />
                                        </IconButton>
                                        <Menu
                                            id={row.id}
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            MenuListProps={{
                                                'aria-labelledby': 'list-options',
                                            }}
                                        >
                                            <MenuItem onClick={handleClose}>Update</MenuItem>
                                            <MenuItem onClick={handleClose}>Done</MenuItem>
                                        </Menu>
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
