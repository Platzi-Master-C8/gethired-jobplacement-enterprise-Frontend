import React from 'react';
import Button from '@mui/material/Button';

import { Vacancy } from '../Vacancy';
import { Container, Title, Header } from './styles';

export const ListOfVacancies = () => {
    return (
        <Container>
            <Header>
                <Title>History</Title>
                <Button type="button" variant="contained">
                    Create new vacancy
                </Button>
            </Header>
            <Vacancy
                title="Job title"
                date={new Date()}
                salary={{ min: 500, max: 1000 }}
                modality="remote"
                applies={100}
                seen={300}
                description="Lorem ipsum"
            />
            <Vacancy
                title="Job title"
                date={new Date()}
                salary={{ min: 500, max: 1000 }}
                modality="remote"
                applies={100}
                seen={300}
                description="Lorem ipsum"
            />
            <Vacancy
                title="Job title"
                date={new Date()}
                salary={{ min: 500, max: 1000 }}
                modality="remote"
                applies={100}
                seen={300}
                description="Lorem ipsum"
            />
        </Container>
    );
};
