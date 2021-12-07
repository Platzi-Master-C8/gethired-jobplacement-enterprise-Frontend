import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

import { Vacancy } from '../Vacancy';
import { Container, Title, Header, LinkStyled } from './styles';

export const ListOfVacancies = () => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch('https://61a82e0b387ab200171d3002.mockapi.io/api/v1/vacancies')
            .then((vacancies) => vacancies.json())
            .then((response) => setData(response));
    }, []);

    return (
        <Container>
            <Header>
                <Title>History</Title>
                <Button type="button" variant="contained">
                    <LinkStyled color="#FFF" to="/vacancies">
                        Create new vacancy
                    </LinkStyled>
                </Button>
            </Header>
            {data ? (
                data.map((vacancy) => (
                    <Vacancy
                        title={vacancy.title_of_vacancies}
                        date={new Date()}
                        salary={vacancy.salary}
                        modality="Remote"
                        applies={100}
                        seen={300}
                        description={vacancy.details}
                    />
                ))
            ) : (
                <p>Loading...</p>
            )}
        </Container>
    );
};
