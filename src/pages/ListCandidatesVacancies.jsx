import { Container } from '@mui/material';
import React from 'react';

import { CardApplicantList } from '../components/CardApplicantList/CardApplicantList';
import { HeaderNotLogin } from '../components/Header/HeaderNotLogin';

export const ListCandidatesVacancies = () => {
    return (
        <Container>
            <HeaderNotLogin />
            <CardApplicantList />
            <CardApplicantList />
            <CardApplicantList />
        </Container>
    );
};
