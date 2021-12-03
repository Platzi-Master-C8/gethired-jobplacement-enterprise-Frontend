import React from 'react';
import styled from 'styled-components';

import { ListOfVacancies } from '../components/ListOfVacancies';
import { Filters } from '../components/Filters';

import Header from '../components/Header/header';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const VacanciesHistory = () => {
    return (
        <Container>
            <Header />
            <Filters />
            <ListOfVacancies />
        </Container>
    );
};

export default VacanciesHistory;
