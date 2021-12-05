import React from 'react';

import FormVacancies from 'Components/FormVacancies';

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const CreateVacancies = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar color="default" position="static" elevation={0}>
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                        Header
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
                <FormVacancies title="Create Vacancy" buttonText="Save"/>
            </Container>
        </React.Fragment>
    );
};
