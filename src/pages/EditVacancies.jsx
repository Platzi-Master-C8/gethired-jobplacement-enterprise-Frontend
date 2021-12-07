import React from 'react';

import FormVacancies from 'Components/FormVacancies';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';


export const EditVacancies = () => {
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
                <FormVacancies title="Edit Vacancy" editButtonText="Cancel" mainButtonText="Update"/>
            </Container>
        </React.Fragment>
    );
};
