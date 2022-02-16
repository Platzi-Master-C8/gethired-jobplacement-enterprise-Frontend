import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

export const OfferDetails = ({
    name,
    description,
    status,
    salary,
    typeWork,
    skills,
    hoursWeek,
    experience,
    startDate,
}) => {
    const newTypeWork = (value) => {
        let work;
        switch (value) {
            case '1': {
                work = 'Remote';
                break;
            }
            case '2': {
                work = 'Full-time';
                break;
            }
            case '3': {
                work = 'Part-time';
                break;
            }
            default:
                return null;
        }
        return work;
    };

    return (
        <Fragment>
            <Typography variant="h2" mb={2}>
                Vacancy Details
            </Typography>
            <Paper sx={{ p: 2 }} elevation={3}>
                <Typography variant="h3" mb={2}>
                    {name}
                </Typography>
                <Divider />
                <Typography variant="h3" my={2}>
                    Description
                </Typography>
                <Typography variant="body2" mb={2}>
                    {description}
                </Typography>
                <Typography variant="h3" mb={1}>
                    Status
                </Typography>
                <Chip label={status ? 'Open' : 'Closed'} color="secondary" sx={{ mb: 2 }} />
                <Divider />
                <Typography variant="h3" mt={3} mb={1}>
                    Checklist
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }} mb={1}>
                    <Typography variant="body2">Hours per week</Typography>
                    <Typography variant="body2">{hoursWeek} hours</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }} mb={1}>
                    <Typography variant="body2">Salary</Typography>
                    <Typography variant="body2">$ {Intl.NumberFormat().format(salary)}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }} mb={1}>
                    <Typography variant="body2">Minimum experience</Typography>
                    <Typography variant="body2">{experience} years</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }} mb={1}>
                    <Typography variant="body2">Type of work</Typography>
                    <Typography variant="body2">{newTypeWork(typeWork)}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }} mb={1}>
                    <Typography variant="body2">Start date</Typography>
                    <Typography variant="body2">{moment(startDate).format('DD/MM/YYYY')}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }} mb={1}>
                    <Typography variant="body2">Skills needed</Typography>
                    <Box>
                        {skills.split(',').map((skill) => {
                            return (
                                <Chip label={skill} size="small" variant="outlined" color="secondary" key={uuidv4()} />
                            );
                        })}
                    </Box>
                </Box>
            </Paper>
        </Fragment>
    );
};

OfferDetails.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    salary: PropTypes.string.isRequired,
    typeWork: PropTypes.string.isRequired,
    skills: PropTypes.string.isRequired,
    hoursWeek: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
};
