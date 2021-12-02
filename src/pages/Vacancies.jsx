import React, { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Vacancies = () => {
    const [typeWork, setTypeWork] = useState('');

    const handleChange = (event) => {
        setTypeWork(event.target.value);
    };

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
                <Paper sx={{ p: 3 }}>
                    <Typography variant="h2" align="center" sx={{ mb: 2 }}>
                        New vacancy
                    </Typography>

                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="portfolio"
                                name="portfolio"
                                label="Portfolio"
                                variant="filled"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="company"
                                name="company"
                                label="Company"
                                variant="filled"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl variant="filled" fullWidth required>
                                <InputLabel id="type-work">Type of work</InputLabel>
                                <Select
                                    labelId="type-of-workplace"
                                    id="type-of-workplace"
                                    label="Type of workplace"
                                    variant="filled"
                                    value={typeWork}
                                    onChange={handleChange}
                                    fullWidth
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="job-location"
                                name="job-location"
                                label="Job location"
                                variant="filled"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="description"
                                name="description"
                                label="Description"
                                variant="filled"
                                fullWidth
                                multiline
                                rows={4}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField required id="salary" name="salary" label="Salary" variant="filled" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                required
                                id="hours-peer-week"
                                name="hours-peer-week"
                                label="Hours peer week"
                                variant="filled"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                required
                                id="minumum-exprience"
                                name="minumum-exprience"
                                label="Minimum experience"
                                variant="filled"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                required
                                id="star-date"
                                name="star-date"
                                label="Start date"
                                variant="filled"
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Button variant="contained" color="primary">
                                    Save
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </React.Fragment>
    );
};

export default Vacancies;
