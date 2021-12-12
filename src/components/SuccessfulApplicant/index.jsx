import React, { Fragment } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export const SuccessfulApplicant = () => {
    return (
        <Fragment>
            <h2>Add successful applicant</h2>
            <div>
                <form>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" label="Applicant name" variant="standard" />
                        <IconButton aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Box>
                </form>
            </div>
        </Fragment>
    );
};
