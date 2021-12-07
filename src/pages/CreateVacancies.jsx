import React from 'react';

import FormVacancies from 'Components/FormVacancies';

import Container from '@mui/material/Container';

export const CreateVacancies = () => {
    return (
        <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
            <FormVacancies title="Create Vacancy" editDisplay="none" editButtonText="Cancel" mainButtonText="Save"/>
        </Container>
    );
};
