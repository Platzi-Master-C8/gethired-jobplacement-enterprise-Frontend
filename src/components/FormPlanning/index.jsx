/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useAuth0 } from '@auth0/auth0-react';

import { Box, TextField, Select, InputLabel, MenuItem, FormControl, Button } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TimePicker from '@mui/lab/TimePicker';
import { postNewInterview } from 'Api/Interviews/postInterview';
import { useNavigate } from 'react-router-dom';

export const FormPlanning = () => {
    const { handleSubmit, control } = useForm();
    const navigate = useNavigate();
    const { user } = useAuth0();
    const onSubmit = (dataForm) => {
        // eslint-disable-next-line no-param-reassign
        dataForm.user_id = user.sub;
        postNewInterview(dataForm);
        navigate('/interviews');
    };

    return (
        <Box component="form">
            <Controller
                name="interviewTitle"
                defaultValue=""
                control={control}
                render={({ field: { onChange, value } }) => (
                    <TextField
                        onChange={onChange}
                        value={value}
                        label="Interview title"
                        variant="outlined"
                        sx={{ width: '100%', mb: 2 }}
                    />
                )}
                required
            />
            <Box sx={{ mb: 2 }}>
                <LocalizationProvider dateAdapter={AdapterDateFns} sx={{ mr: 1 }}>
                    <Controller
                        name="date"
                        defaultValue=""
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <DatePicker
                                label="Choose date"
                                onChange={onChange}
                                value={value}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        )}
                        required
                    />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns} sx={{ mr: 1 }}>
                    <Controller
                        name="hour"
                        defaultValue=""
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <TimePicker
                                label="Choose hour"
                                onChange={onChange}
                                value={value}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        )}
                        required
                    />
                </LocalizationProvider>
                <FormControl sx={{ width: 200 }}>
                    <InputLabel id="select-interview-type">Interview type</InputLabel>
                    <Controller
                        name="interviewType"
                        defaultValue=""
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <Select label="Interview type" onChange={onChange} value={value}>
                                <MenuItem value="remote">Remote</MenuItem>
                                <MenuItem value="face-to-face">Face-to-face</MenuItem>
                            </Select>
                        )}
                        required
                    />
                </FormControl>
            </Box>
            <FormControl sx={{ width: '50%', mb: 2 }}>
                <InputLabel id="platform">Platform</InputLabel>
                <Controller
                    name="platform"
                    defaultValue=""
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <Select onChange={onChange} value={value} control={control} label="Interview type">
                            <MenuItem value="zoom">Zoom</MenuItem>
                            <MenuItem value="google-meet">Google meet</MenuItem>
                            <MenuItem value="microsoft-teams">Microsoft teams</MenuItem>
                        </Select>
                    )}
                    required
                />
            </FormControl>
            <Box sx={{ mb: 2 }}>
                <Controller
                    name="direction"
                    defaultValue=""
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            onChange={onChange}
                            value={value}
                            label="Url or phisical direction"
                            variant="outlined"
                            sx={{ width: '100%' }}
                        />
                    )}
                    required
                />
            </Box>
            <Box sx={{ mb: 2 }}>
                <FormControl sx={{ width: '100%' }}>
                    <InputLabel id="interviewer">Who is going to interview?</InputLabel>
                    <Controller
                        name="person"
                        defaultValue=""
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <Select onChange={onChange} value={value} label="Interview type">
                                <MenuItem value="1">Person 1</MenuItem>
                                <MenuItem value="2">Person 2</MenuItem>
                                <MenuItem value="3">Person 3</MenuItem>
                            </Select>
                        )}
                        required
                    />
                </FormControl>
            </Box>
            <Controller
                name="notes"
                defaultValue=""
                control={control}
                render={({ field: { onChange, value } }) => (
                    <TextField
                        onChange={onChange}
                        value={value}
                        label="Interview description"
                        multiline
                        rows={4}
                        sx={{ mb: 2, width: '100%' }}
                    />
                )}
                required
            />
            <Box>
                <Button variant="contained" type="submit" onClick={handleSubmit(onSubmit)}>
                    Create
                </Button>
            </Box>
        </Box>
    );
};
