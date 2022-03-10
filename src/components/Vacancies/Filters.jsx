import React from 'react';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const Filters = () => {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }} component="form">
            <TextField id="outlined-uncontrolled" label="Job title, company and keywords" />
            <TextField id="outlined-uncontrolled" label="Location" />
            <TextField id="outlined-uncontrolled" label="Job title" />
            <TextField id="outlined-uncontrolled" label="More filters" />
            <Button type="button" variant="contained">
                Search
            </Button>
        </Box>
    );
};
