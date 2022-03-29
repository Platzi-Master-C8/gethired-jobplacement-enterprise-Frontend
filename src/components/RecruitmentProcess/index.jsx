import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
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
import { LoadingTable } from 'Components/Commons/TableSkeleton';
import { format } from 'date-fns';
import { capWord } from './helpers';

export const RecruitmentProcess = ({ process }) => {
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
                {process.length > 0 ? (
                    <Table aria-label="simple table">
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell align="center" className="id">
                                    Status
                                </StyledTableCell>
                                <StyledTableCell align="center">Stage</StyledTableCell>
                                <StyledTableCell align="center">Date</StyledTableCell>
                                <StyledTableCell align="center">Hour</StyledTableCell>
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
                                        <StyledTableCell align="center">{capWord(row.name)}</StyledTableCell>
                                        <StyledTableCell align="center">
                                            {row.status && row.updated_at
                                                ? format(Date.parse(row.updated_at), 'MM/dd/yyyy')
                                                : '-'}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            {row.status && row.updated_at
                                                ? format(Date.parse(row.updated_at), 'hh:mm aaaa')
                                                : '-'}
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
                                                <MenuItem onClick={handleClose}>Done</MenuItem>
                                            </Menu>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                ) : (
                    <LoadingTable />
                )}
            </TableContainer>
        </Fragment>
    );
};

RecruitmentProcess.propTypes = {
    process: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            status: PropTypes.bool,
            created_at: PropTypes.string,
            updated_at: PropTypes.string,
        }),
    ).isRequired,
};
