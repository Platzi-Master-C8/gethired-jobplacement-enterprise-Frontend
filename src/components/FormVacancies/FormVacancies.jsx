import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';
import FormInputText from 'Components/FormVacancies/FormInputText';
import { FormSelect } from 'Components/FormVacancies/FormSelect';

import { FormButton, FormEditSwitch } from './styles';

const dataTypeWork = [
    { value: '1', label: 'Remote' },
    { value: '2', label: 'Full-time' },
    { value: '3', label: 'Part-time' },
];

const dataCompany = [
    { value: '1', label: 'Company 1' },
    { value: '2', label: 'Company 2' },
    { value: '3', label: 'Company 3' },
];

const VacanciesForm = ({ title, editDisplay, editButtonText, mainButtonText, defaultValues, onSubmit }) => {
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
            <Paper sx={{ p: 3 }}>
                <Typography variant="h1" align="center" sx={{ mb: 2 }}>
                    {title}
                </Typography>

                <Box component="form" onSubmit={handleSubmit(handleForm)}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <FormInputText name="name" label="Vacancy name" control={control} required />
                        </Grid>
                        <Grid item xs={12}>
                            <FormSelect
                                name="company"
                                label="Company"
                                control={control}
                                options={dataCompany}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormSelect
                                name="typeWork"
                                label="Type of work"
                                control={control}
                                options={dataTypeWork}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormInputText name="job-location" label="Job location" control={control} required />
                        </Grid>
                        <Grid item xs={12}>
                            <FormInputText
                                name="description"
                                label="Description"
                                control={control}
                                rows={4}
                                multiline
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormInputText name="skills" label="Skills and abilities" control={control} required />
                        </Grid>
                        <Grid item xs={12}>
                            <FormInputText name="salary" label="Salary" control={control} required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormInputText name="hours-per-week" label="Hours per week" control={control} required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormInputText
                                name="minimum-experience"
                                label="Minimum experience"
                                control={control}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormEditSwitch label="Vacancy active" display="none" />
                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={{ display: 'flex', justifyContent: 'end', gap: '20px' }}>
                                <FormButton variant="contained" color="error" href="/" display={editDisplay}>
                                    {editButtonText}
                                </FormButton>
                                <Button variant="contained" color="primary" type="submit">
                                    {mainButtonText}
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
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

VacanciesForm.propTypes = {
    title: PropTypes.string.isRequired,
    editDisplay: PropTypes.string.isRequired,
    editButtonText: PropTypes.string.isRequired,
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

VacanciesForm.defaultProps = {
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

export default VacanciesForm;
