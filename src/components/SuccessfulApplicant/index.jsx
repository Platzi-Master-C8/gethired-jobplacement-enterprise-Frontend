import React, { Fragment } from 'react';

import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import { Title, Container } from './styles';

export const SuccessfulApplicant = () => {
    return (
        <Fragment>
            <Title>Add successful applicant</Title>
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
