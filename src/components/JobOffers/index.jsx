import React, { Fragment } from 'react';

import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

import { getJobs } from 'Api/Vacancies/allActiveVacancies';

import useSearch from 'Hooks/useSearch';
import useFetch from 'Hooks/useFetch';
import Constants from 'Constants';

import Jobs from './Jobs';
import FiltersUsers from '../FiltersUsers';

const JobOffers = () => {
    const { data: listJobs, ...rest } = useFetch(getJobs);
    const { query, setQuery, filteredSearch } = useSearch(listJobs);
    const errorSearch = query.length > Constants.Zero && query.length < Constants.MinCharacter;

    const handleChange = (e) => setQuery(e.target.value);

    return (
        <Fragment>
            <Grid container sx={{ my: 3, display: 'flex', justifyContent: 'center' }}>
                <Grid item xs={12} sm={12} md={8}>
                    <TextField
                        error={errorSearch}
                        helperText={errorSearch && 'Must have a minimum of 3 characters'}
                        placeholder="Search Job Title / Skills"
                        value={query}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={3}>
                    <FiltersUsers />
                </Grid>
                <Grid item xs={12} sm={12} md={9}>
                    <Jobs {...rest} data={filteredSearch} />
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default JobOffers;
