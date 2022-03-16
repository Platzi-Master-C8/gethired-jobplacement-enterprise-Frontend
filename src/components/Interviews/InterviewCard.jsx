/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { format } from 'date-fns';

import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LinkIcon from '@mui/icons-material/Link';
import Skeleton from '@mui/material/Skeleton';

import { getApplicantById } from 'Api/Applicants';

export const InterviewCard = ({
    id,
    active,
    vacancyName,
    platform,
    statusFinished,
    url,
    date,
    applicantId,
    cancelModal,
    scheduleModal,
    notificationModal,
    setCurrentInterview,
}) => {
    const [applicant, setApplicant] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const dateFns = new Date(date);
    const formattedDate = format(dateFns, 'MMMM dd, yyyy');
    const hour = dateFns.getHours();
    const minute = dateFns.getMinutes();

    useEffect(() => {
        getApplicantById(applicantId)
            .then((applicantData) => setApplicant(applicantData))
            .catch(console.err);
    }, [applicantId]);

    return (
        <Paper sx={{ p: 2, boxShadow: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Chip label={statusFinished || 'Active'} color="secondary" />

                {active && (
                    <React.Fragment>
                        <IconButton aria-label="settings" id="list-options" onClick={handleClick}>
                            <MoreVertIcon
                                sx={{
                                    color: 'rgba(0, 0, 0, 0.54)',
                                    fill: 'currentColor',
                                    stroke: 'none',
                                }}
                            />
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'list-options',
                            }}
                        >
                            <MenuItem
                                onClick={() => {
                                    handleClose();
                                    cancelModal();
                                    setCurrentInterview(id);
                                }}
                            >
                                Cancel
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    handleClose();
                                    scheduleModal();
                                    setCurrentInterview(id);
                                }}
                            >
                                Reschedule
                            </MenuItem>
                        </Menu>
                    </React.Fragment>
                )}
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar alt="Avatar" sx={{ mr: 2 }}>
                    A
                </Avatar>
                <Box>
                    <Typography>
                        {applicant ? `${applicant.name} ${applicant.lastName}` : <Skeleton width={100} height={20} />}
                    </Typography>
                    <Typography variant="body2">
                        {applicant ? `${applicant.city}, ${applicant.country}` : <Skeleton width={100} height={20} />}
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="body1" sx={{ marginBottom: '.5rem' }}>
                        {vacancyName}
                    </Typography>
                    <Typography variant="body2">{formattedDate}</Typography>
                    <Typography variant="caption">{`${hour}:${minute}`}</Typography>
                </Box>

                <Button
                    href={url}
                    target="_blank"
                    size="small"
                    startIcon={
                        <LinkIcon
                            sx={{
                                color: 'rgba(0, 0, 0, 0.54)',
                                fill: 'currentColor',
                                stroke: 'none',
                            }}
                        />
                    }
                >
                    {platform}
                </Button>
            </Box>
        </Paper>
    );
};

InterviewCard.propTypes = {
    id: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired,
    vacancyName: PropTypes.string.isRequired,
    platform: PropTypes.string,
    statusFinished: PropTypes.string,
    url: PropTypes.string,
    date: PropTypes.string.isRequired,
    applicantId: PropTypes.number.isRequired,
    cancelModal: PropTypes.func.isRequired,
    scheduleModal: PropTypes.func.isRequired,
    notificationModal: PropTypes.func.isRequired,
    setCurrentInterview: PropTypes.func.isRequired,
};

InterviewCard.defaultProps = {
    platform: 'Zoom',
    statusFinished: 'Finished',
    url: 'https://zoom.us/j/123456789',
};
