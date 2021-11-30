import React from 'react';

import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const Vacancies = () => {
    return (
        <Container maxWidth="md">
            <Card sx={{ padding: 1 }}>
                <Typography variant="h2">New vacancy</Typography>

                <TextField label="Portfolio" variant="filled" />
            </Card>
        </Container>
    );
};

export default Vacancies;
