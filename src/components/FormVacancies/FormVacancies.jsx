import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import FormInputText from 'Components/FormVacancies/FormInputText';
import { FormSelect } from 'Components/FormVacancies/FormSelect';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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

const VacanciesForm = ({ title, buttonText }) => {
    const { handleSubmit, control } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Paper sx={{ p: 3 }}>
            <Typography variant="h1" align="center" sx={{ mb: 2 }}>
                {title}
            </Typography>

            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <FormInputText name="name" label="Vacancy name" control={control} required />
                    </Grid>
                    <Grid item xs={12}>
                        <FormSelect name="company" label="Company" control={control} options={dataCompany} required />
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
                        <FormInputText name="salary" label="Salary" control={control} required />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormInputText name="hours-per-week" label="Hours per week" control={control} required />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormInputText
                            name="minimum-experience"
                            label="Minimum experience"
                            control={control}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormInputText name="start-date" label="Start date" control={control} required />
                    </Grid>

                    <Grid item xs={12}>
                        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                            <Button variant="contained" color="primary" type="submit">
                                {buttonText}
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    );
};

VacanciesForm.propTypes = {
    title: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
};

export default VacanciesForm;
