import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';

import { InputText } from 'Components/Commons/InputText';
import { Select } from 'Components/Commons/Select';

import { typeOfWork, companyName } from 'Constants/mockData';

export const FormVacancies = ({ mainButtonText, defaultValues, onSubmit }) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const { handleSubmit, control, reset } = useForm({
        defaultValues: {
            id: '',
            name: '',
            salary: '',
            description: '',
            company: '',
            typeWork: '',
            'job-location': '',
            skills: '',
            'hours-per-week': '',
            'minimum-experience': '',
        },
    });

    useEffect(() => {
        reset(defaultValues);
    }, [reset, defaultValues]);

    const handleForm = (data) => {
        onSubmit(data)
            .then(() => {
                reset();
                navigate('/');
            })
            .catch(() => {
                setMessage('There was an error creating vacancy');
                setOpen(true);
            });
    };

    return (
        <React.Fragment>
            <Box component="form" onSubmit={handleSubmit(handleForm)}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <InputText name="name" label="Vacancy name" control={control} required />
                    </Grid>
                    <Grid item xs={12}>
                        <Select name="company" label="Company" control={control} options={companyName} required />
                    </Grid>
                    <Grid item xs={12}>
                        <Select name="typeWork" label="Type of work" control={control} options={typeOfWork} required />
                    </Grid>
                    <Grid item xs={12}>
                        <InputText name="job-location" label="Job location" control={control} required />
                    </Grid>
                    <Grid item xs={12}>
                        <InputText
                            name="description"
                            label="Description"
                            control={control}
                            rows={4}
                            multiline
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <InputText name="skills" label="Skills and abilities" control={control} required />
                    </Grid>
                    <Grid item xs={12}>
                        <InputText name="salary" label="Salary" control={control} required />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputText name="hours-per-week" label="Hours per week" control={control} required />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputText name="minimum-experience" label="Minimum experience" control={control} required />
                    </Grid>

                    <Grid item xs={12}>
                        <Box sx={{ display: 'flex', justifyContent: 'end', gap: '20px' }}>
                            <Link to="/">
                                <Button variant="contained" color="error">
                                    Cancel
                                </Button>
                            </Link>
                            <Button variant="contained" color="primary" type="submit">
                                {mainButtonText}
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={() => setOpen(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
                <Alert severity="error">
                    <AlertTitle>Ops!</AlertTitle>
                    {message}
                </Alert>
            </Snackbar>
        </React.Fragment>
    );
};

FormVacancies.propTypes = {
    mainButtonText: PropTypes.string.isRequired,
    defaultValues: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        salary: PropTypes.string,
        description: PropTypes.string,
        company: PropTypes.string,
        typeWork: PropTypes.string,
        'job-location': PropTypes.string,
        skills: PropTypes.string,
        'hours-per-week': PropTypes.string,
        'minimum-experience': PropTypes.string,
    }),
    onSubmit: PropTypes.func.isRequired,
};

FormVacancies.defaultProps = {
    defaultValues: {
        id: null,
        name: '',
        salary: '',
        description: '',
        company: '',
        typeWork: '',
        'job-location': '',
        skills: '',
        'hours-per-week': '',
        'minimum-experience': '',
    },
};
