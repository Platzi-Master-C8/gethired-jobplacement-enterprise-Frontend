import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Box, TextField } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TimePicker from '@mui/lab/TimePicker';
import Button from '@mui/material/Button';

export const RescheduleInterview = ({ isOpen, onClose, handleSubmit }) => {
    const [date, setDate] = useState(null);
    const [hour, setHour] = useState(null);

    const onSubmit = () => {
        handleSubmit(date, hour);
    };

    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle sx={{ fontWeight: 'bold' }}>Specify the new information for the interview</DialogTitle>
            <DialogContent sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Choose date"
                            value={date}
                            onChange={(newValue) => {
                                setDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <TimePicker
                            label="Choose hour"
                            value={hour}
                            onChange={(newValue) => {
                                setHour(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Box>
                <TextField
                    id="outlined-multiline-static"
                    label="Additional information (Optional)"
                    multiline
                    rows={4}
                    sx={{ mt: 2, width: '100%' }}
                />
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="error" onClick={onClose}>
                    Close
                </Button>
                <Button variant="contained" color="primary" type="submit" onClick={onSubmit}>
                    Reschedule interview
                </Button>
            </DialogActions>
        </Dialog>
    );
};

RescheduleInterview.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};
