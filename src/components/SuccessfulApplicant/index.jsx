import React, { Fragment } from 'react';

import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';

import { Container } from './styles';

export const SuccessfulApplicant = () => {
    return (
        <Fragment>
            <Typography variant="h2" mb={4}>
                Add successful applicant
            </Typography>
            <form>
                <Container sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label="Applicant name" variant="standard" />
                    <IconButton aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Container>
            </form>
        </Fragment>
    );
};
