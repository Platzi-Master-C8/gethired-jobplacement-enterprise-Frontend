import React from 'react';
import styled from 'styled-components';

import { ListOfVacancies } from 'Components/ListOfVacancies';
import { Filters } from 'Components/Filters';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
`;

export const VacanciesHistory = () => {
    return (
        <Container>
            <Filters />
            <ListOfVacancies />
        </Container>
    );
};
