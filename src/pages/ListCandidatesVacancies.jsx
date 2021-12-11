import { Container } from '@mui/material';
import React from 'react';

import { CardApplicantList } from '../components/CardApplicantList/CardApplicantList';

export const ListCandidatesVacancies = () => {
    return (
        <Container>
            <CardApplicantList />
            <CardApplicantList />
            <CardApplicantList />
        </Container>
    );
};
