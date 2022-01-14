/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TimePicker from '@mui/lab/TimePicker';
import { FormButton } from '../FormVacancies/styles';

const style = {
    fontWeight: 'bold',
};

export const RescheduleInterview = () => {
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState(null);
    const [hour, setHour] = useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Box component="form">
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle sx={style}>Specify the new information for the meeting</DialogTitle>
                    <DialogContent sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ mt: 2 }}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <Box sx={{ width: '40%' }}>
                                    <DatePicker
                                        label="Choose date"
                                        value={date}
                                        onChange={(newValue) => {
                                            setDate(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </Box>
                            </LocalizationProvider>
                        </Box>
                        <Box sx={{ mt: 2 }}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <Box sx={{ width: '40%' }}>
                                    <TimePicker
                                        label="Choose hour"
                                        value={hour}
                                        onChange={(newValue) => {
                                            setHour(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </Box>
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
                        <FormButton variant="contained" color="error" onClick={handleClose}>
                            Cancel
                        </FormButton>
                        <FormButton variant="contained" color="primary" type="submit" onClick={handleClose}>
                            Send {'>'}
                        </FormButton>
                    </DialogActions>
                </Dialog>
            </Box>
        </div>
    );
};
