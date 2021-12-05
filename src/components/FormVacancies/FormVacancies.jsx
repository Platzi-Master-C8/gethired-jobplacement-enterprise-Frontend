import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import FormInputText from 'Components/FormVacancies/FormInputText';

import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const VacanciesForm = ({ title, buttonText }) => {
    const { handleSubmit, control } = useForm();
    const [typeWork, setTypeWork] = useState('');

    const handleChange = (event) => {
        setTypeWork(event.target.value);
    };

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
                        <FormInputText name="portfolio" label="Portfolio" control={control} required />
                    </Grid>
                    <Grid item xs={12}>
                        <FormInputText name="company" label="Company" control={control} required />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl variant="filled" fullWidth required>
                            <InputLabel id="type-work">Type of work</InputLabel>
                            <Select
                                labelId="type-of-workplace"
                                id="type-of-workplace"
                                label="Type of workplace"
                                variant="filled"
                                value={typeWork}
                                onChange={handleChange}
                                fullWidth
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormInputText name="job-location" label="Job location" control={control} required />
                    </Grid>
                    <Grid item xs={12}>
                        <FormInputText name="description" label="Description" control={control} required />
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
    buttonText: PropTypes.string.isRequired
}

export default VacanciesForm;
