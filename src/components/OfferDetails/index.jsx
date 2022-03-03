import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import { Typography, Card } from '@mui/material';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

export const OfferDetails = ({ offerInfo }) => {
    const { name, description, status, salary, typeWork, skillsRaw, hoursWeek, experience } = offerInfo;

    return (
        <Card elevation={3}>
            <Paper sx={{ p: 2 }}>
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
                    <Typography variant="body2">{typeWork}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }} mb={1}>
                    <Typography variant="body2">Skills needed</Typography>
                    {skillsRaw !== undefined ? (
                        <Box>
                            {skillsRaw.split(',').map((skill) => {
                                return (
                                    <Chip
                                        sx={{ mb: 0.2, ml: 0.2 }}
                                        label={skill}
                                        size="small"
                                        variant="outlined"
                                        color="secondary"
                                        key={uuidv4()}
                                    />
                                );
                            })}
                        </Box>
                    ) : (
                        <Box />
                    )}
                </Box>
            </Paper>
        </Card>
    );
};

OfferDetails.propTypes = {
    offerInfo: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        status: PropTypes.bool,
        salary: PropTypes.number,
        typeWork: PropTypes.string,
        skillsRaw: PropTypes.string,
        hoursWeek: PropTypes.number,
        experience: PropTypes.number,
    }).isRequired,
};
