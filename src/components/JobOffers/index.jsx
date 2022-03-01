/* eslint-disable no-use-before-define */
import React, { Fragment, useEffect, useState } from 'react';

import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';

import { getJobs } from 'Api/Vacancies/allActiveVacancies';

import useFetch from 'Hooks/useFetch';

import Jobs from './Jobs';
import FiltersUsers from '../FiltersUsers';

const JobOffers = () => {
    const [filters, setFilters] = useState({
        name: null,
        typeWork: null,
        'company[]': null,
        job_location: null,
        min_salary: null,
        max_salary: null,
    });
    const { data: listJobs, fetchData, ...rest } = useFetch(getJobs, filters);
    const { register, handleSubmit: handleSubmitSearch, formState: formStateSearch } = useForm();
    const { errors: errorsSearch, isDirty } = formStateSearch;

    const handleChange = (data) => {
        setFilters((prevState) => ({
            ...prevState,
            ...data,
        }));
    };

    useEffect(() => {
        fetchData(filters);
    }, [filters]);

    return (
        <Fragment>
            <Grid container sx={{ my: 3, display: 'flex', justifyContent: 'center' }}>
                <Grid item xs={12} sm={12} md={8}>
                    <Box
                        component="form"
                        onSubmit={handleSubmitSearch(handleChange)}
                        sx={{ display: 'flex', gap: '10px' }}
                    >
                        <TextField
                            {...register('name', {
                                minLength: {
                                    value: 3,
                                    message: 'Must have a minimum of 3 characters',
                                },
                            })}
                            error={!!errorsSearch?.name}
                            helperText={errorsSearch?.name?.message}
                            placeholder="Search Job Title"
                            fullWidth
                        />
                        <Button variant="contained" size="large" type="submit" disabled={!isDirty}>
                            Search
                        </Button>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={4}>
                    <FiltersUsers setFilters={setFilters} />
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                    <Jobs {...rest} data={listJobs} />
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default JobOffers;
