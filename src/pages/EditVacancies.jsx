import React from 'react';

import EditFormVacancies from 'Components/FormVacancies';

import Container from '@mui/material/Container';

export const EditVacancies = () => {
    return (
        <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
            <EditFormVacancies
                title="Edit Vacancy"
                editDisplay="block"
                editButtonText="Cancel"
                mainButtonText="Update"
            />
        </Container>
    );
};
