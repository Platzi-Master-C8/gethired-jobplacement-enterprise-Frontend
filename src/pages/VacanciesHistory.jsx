import React from 'react';
import styled from 'styled-components';

import { ListOfVacancies } from '../components/ListOfVacancies';
import { Filters } from '../components/Filters';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const VacanciesHistory = () => {
    return (
        <Container>
            <Filters />
            <ListOfVacancies />
        </Container>
    );
};
