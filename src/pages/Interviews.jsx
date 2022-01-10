import React from 'react';

import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import iconMessage from '../img/icon_message.svg';

export const Interviews = () => (
    <Container maxWidth="xl">
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    id="search"
                    label="Search"
                    variant="filled"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <img src={iconMessage} alt="Icon Message" />
                            </InputAdornment>
                        ),
                    }}
                />
            </Grid>

            <Grid item xs={12} md={3}>
                <TextField
                    fullWidth
                    id="ubication"
                    label="Ubication"
                    variant="filled"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <img src={iconMessage} alt="Icon Message" />
                            </InputAdornment>
                        ),
                    }}
                />
            </Grid>

            <Grid item xs={12} md={3}>
                <TextField
                    fullWidth
                    id="date"
                    label="Date"
                    variant="filled"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <img src={iconMessage} alt="Icon Message" />
                            </InputAdornment>
                        ),
                    }}
                />
            </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ my: 2 }}>
            {Array.from({ length: 10 }).map((_, index) => (
                <Grid item xs={12} md={6} lg={4} xl={3}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h3" align="center" sx={{ mb: 2 }}>
                            Interview {index + 1}
                        </Typography>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    </Container>
);
