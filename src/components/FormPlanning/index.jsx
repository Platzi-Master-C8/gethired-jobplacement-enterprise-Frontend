/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

import { Box, TextField, Select, InputLabel, MenuItem, FormControl, Button } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TimePicker from '@mui/lab/TimePicker';

export const FormPlanning = () => {
    const [date, setDate] = useState(null);
    const [hour, setHour] = useState(null);
    const [type, setType] = useState(null);
    const [platform, setPlatform] = useState(null);

    const handleChange = (event) => {
        setType(event.target.value);
    };

    const changePlatform = (event) => {
        setPlatform(event.target.value);
    };
    return (
        <Box component="form">
            <TextField id="outlined-basic" label="Interview title" variant="outlined" sx={{ width: '100%', mb: 2 }} />
            <Box sx={{ mb: 2 }}>
                <LocalizationProvider dateAdapter={AdapterDateFns} sx={{ mr: 1 }}>
                    <DatePicker
                        label="Choose date"
                        value={date}
                        onChange={(newValue) => {
                            setDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns} sx={{ mr: 1 }}>
                    <TimePicker
                        label="Choose hour"
                        value={hour}
                        onChange={(newValue) => {
                            setHour(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <FormControl sx={{ width: 200 }}>
                    <InputLabel id="demo-simple-select-label">Interview type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={type}
                        label="Interview type"
                        onChange={handleChange}
                    >
                        <MenuItem value="remote">Remote</MenuItem>
                        <MenuItem value="presencial">Face-to-face</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <FormControl sx={{ width: '50%', mb: 2 }}>
                <InputLabel id="demo-simple-select-label">Platform</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={platform}
                    label="Interview type"
                    onChange={changePlatform}
                >
                    <MenuItem value="zoom">Zoom</MenuItem>
                    <MenuItem value="google-meet">Google meet</MenuItem>
                    <MenuItem value="microsoft-teams">Microsoft teams</MenuItem>
                </Select>
            </FormControl>
            <Box sx={{ mb: 2 }}>
                <TextField
                    id="outlined-basic"
                    label="Url or phisical direction"
                    variant="outlined"
                    sx={{ width: '100%' }}
                />
            </Box>
            <Box sx={{ mb: 2 }}>
                <FormControl sx={{ width: '100%' }}>
                    <InputLabel id="demo-simple-select-label">Who is going to interview?</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={platform}
                        label="Interview type"
                        onChange={changePlatform}
                    >
                        <MenuItem value="1">Person 1</MenuItem>
                        <MenuItem value="2">Person 2</MenuItem>
                        <MenuItem value="3">Person 3</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <TextField
                id="outlined-multiline-static"
                label="Interview description"
                multiline
                rows={4}
                sx={{ mb: 2, width: '100%' }}
            />
            <Box>
                <Button variant="contained">Create</Button>
            </Box>
        </Box>
    );
};
