import React from 'react';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { FormVacancies } from 'Components/FormVacancies';

import { postNewVacancy } from 'Services/Vacancies';

export const CreateVacancies = () => {
    const onSubmit = (data) => postNewVacancy(data);

    return (
        <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
            <Paper sx={{ p: 3 }}>
                <Typography variant="h1" align="center" sx={{ mb: 2 }}>
                    Create a new vacancy
                </Typography>

                <FormVacancies mainButtonText="Save" onSubmit={onSubmit} />
            </Paper>
        </Container>
    );
};
