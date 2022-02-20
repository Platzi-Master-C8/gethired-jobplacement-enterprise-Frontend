/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Typography } from '@mui/material';

import RegisterApplicantForm from '../RegisterApplicantForm';

const JobDetailsModal = ({ showDetail, handleOpenClose, vacancyInfo }) => {
    const { companyName, location, description, skills, name, salary, typeWork, hours_per_week, minimum_experience } =
        vacancyInfo;

    const [openApplyModal, setOpenApplyModal] = useState(false);

    return (
        <Dialog open={showDetail} onClose={handleOpenClose}>
            <IconButton
                aria-label="close"
                onClick={handleOpenClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                }}
            >
                <CloseIcon />
            </IconButton>
            <Box component="div" sx={{ padding: '20px' }}>
                <Box
                    component="div"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        marginTop: '15px',
                    }}
                >
                    <Typography variant="h3" component="h3">
                        {companyName}
                    </Typography>
                    <DialogTitle sx={{ textAlign: 'center', padding: '5px', fontWeight: 600 }}>{name}</DialogTitle>
                    <Typography>{location}</Typography>
                </Box>
                <Box component="div">
                    <DialogContent>
                        <Typography variant="h2" component="h2">
                            Description
                        </Typography>
                        <Typography variant="p" component="p" sx={{ marginTop: '10px' }}>
                            {description}
                        </Typography>
                        <Typography variant="h2" component="h2" sx={{ marginTop: '20px' }}>
                            Skills and Habilities
                        </Typography>
                        <Typography variant="p" component="p" sx={{ marginTop: '10px' }}>
                            {skills}
                        </Typography>
                        <Typography variant="h2" component="h2" sx={{ marginTop: '20px' }}>
                            Skills and Offer Details
                        </Typography>
                        <ul>
                            <li>
                                <Typography variant="p" component="p" sx={{ marginTop: '10px' }}>
                                    <b>Type of Work: </b>
                                    {typeWork}
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="p" component="p" sx={{ marginTop: '10px' }}>
                                    <b>Hours per week: </b>
                                    {hours_per_week}
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="p" component="p" sx={{ marginTop: '10px' }}>
                                    <b>Salary: </b>
                                    {salary}
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="p" component="p" sx={{ marginTop: '10px' }}>
                                    <b>Minum experience: </b>
                                    {minimum_experience}
                                </Typography>
                            </li>
                        </ul>
                    </DialogContent>
                    <DialogActions sx={{ display: 'flex', justifyContent: 'space-around', mb: 3 }}>
                        <Button onClick={() => setOpenApplyModal(true)} size="large" variant="contained">
                            Apply
                        </Button>
                        <Button
                            size="large"
                            variant="contained"
                            type="button"
                            onClick={() => console.log('See Company Details')}
                        >
                            Company details
                        </Button>
                    </DialogActions>
                </Box>
            </Box>
            <RegisterApplicantForm open={openApplyModal} setOpen={setOpenApplyModal} />
        </Dialog>
    );
};

JobDetailsModal.propTypes = {
    handleOpenClose: PropTypes.func.isRequired,
    showDetail: PropTypes.bool.isRequired,
    vacancyInfo: PropTypes.shape({
        companyName: PropTypes.string,
        location: PropTypes.string,
        description: PropTypes.string,
        skills: PropTypes.string,
        name: PropTypes.string,
        postulation_deadline: PropTypes.string,
        status: PropTypes.bool,
        salary: PropTypes.string,
        company_id: PropTypes.number,
        typeWork: PropTypes.string,
        job_location: PropTypes.string,
        hours_per_week: PropTypes.string,
        minimum_experience: PropTypes.string,
        created_at: PropTypes.string,
        updated_at: PropTypes.string,
    }).isRequired,
};

export default JobDetailsModal;
