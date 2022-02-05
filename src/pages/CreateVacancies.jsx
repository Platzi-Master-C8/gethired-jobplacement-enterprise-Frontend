import React from 'react';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { FormVacancies } from 'Components/FormVacancies';

import { postNewVacancy } from '../api/Vacancies/postNewVacancy';

export const CreateVacancies = () => {
    const onSubmit = (data) => {
        const formData = {
            title_of_vacancie: data.name,
            published_at: new Date(),
            status: 'open',
            salary: parseInt(data.salary, 10),
            vacancie_details: data.description,
            rol_id: 1,
            postulation_deadline: new Date(),
        };

        return postNewVacancy(formData);
    };

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
