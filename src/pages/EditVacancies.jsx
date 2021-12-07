import React from 'react';

import FormVacancies from 'Components/FormVacancies';

import Container from '@mui/material/Container';


export const EditVacancies = () => {
    return (
        <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
            <FormVacancies title="Edit Vacancy" editDisplay="block" editButtonText="Cancel" mainButtonText="Update"/>
        </Container>
    );
};
