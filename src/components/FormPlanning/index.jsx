/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from "react-hook-form";

import { Box, TextField, Select, InputLabel, MenuItem, FormControl, Button } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TimePicker from '@mui/lab/TimePicker';

export const FormPlanning = () => {
    const { register, handleSubmit } = useForm();
    
    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} >
            <TextField id="outlined-basic" label="Interview title" variant="outlined" sx={{ width: '100%', mb: 2 }} />
            <Box sx={{ mb: 2 }}>
                <LocalizationProvider dateAdapter={AdapterDateFns} sx={{ mr: 1 }}>
                    <DatePicker
                        label="Choose date"
                        {...register("date")}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns} sx={{ mr: 1 }}>
                    <TimePicker
                        label="Choose hour"
                        {...register("hour")}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <FormControl sx={{ width: 200 }}>
                    <InputLabel id="select-interview-type">Interview type</InputLabel>
                    <Select
                        labelId="select-interview-type"
                        id="interview-select"
                        {...register("type")}
                        label="Interview type"
                    >
                        <MenuItem value="remote">Remote</MenuItem>
                        <MenuItem value="face-to-face">Face-to-face</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <FormControl sx={{ width: '50%', mb: 2 }}>
                <InputLabel id="platform">Platform</InputLabel>
                <Select
                    labelId="platform"
                    id="platform-select"
                    {...register("platform")}
                    label="Interview type"
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
                    <InputLabel id="interviewer">Who is going to interview?</InputLabel>
                    <Select
                        labelId="interviewer"
                        id="interviewer-select"
                        label="Interview type"
                        {...register("interviewer")}
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
