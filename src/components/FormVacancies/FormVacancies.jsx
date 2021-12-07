import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import { makeStyles } from '@mui/styles';

import FormInputText from 'Components/FormVacancies/FormInputText';
import { FormSelect } from 'Components/FormVacancies/FormSelect';
import { FormInputDate } from 'Components/FormVacancies/FormInputDate';

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


const VacanciesForm = ({ title, editButtonText, mainButtonText }) => {
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
                        <FormInputText name="skills" label="Skills and abilities" control={control} required />
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
                        <FormInputDate
                            name="date-of-publication"
                            label="Date of publication"
                            control={control}
                            required
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Box sx={{ display: 'flex', justifyContent: 'end', gap:'20px' }}>
                            <Button variant="contained" color="error">
                                {editButtonText}
                            </Button>   
                            <Button variant="contained" color="primary" type="submit">
                                {mainButtonText}
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
    editButtonText: PropTypes.string.isRequired,
    mainButtonText: PropTypes.string.isRequired,
};

export default VacanciesForm;
