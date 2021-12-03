import React, { useState } from 'react';

import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const VacanciesForm = () => {
    const [typeWork, setTypeWork] = useState('');

    const handleChange = (event) => {
        setTypeWork(event.target.value);
    };

    return (
        <Paper sx={{ p: 3 }}>
            <Typography variant="h1" align="center" sx={{ mb: 2 }}>
                New vacancy
            </Typography>

            <Box component="form">
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
                        <TextField required id="company" name="company" label="Company" variant="filled" fullWidth />
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
                        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                            <Button variant="contained" color="primary">
                                Save
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    );
};

export default VacanciesForm;
