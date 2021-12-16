import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

import axios from 'axios';

import { Vacancy } from '../Vacancy';
import { Container, Title, Header, LinkStyled } from './styles';

export const ListOfVacancies = () => {
    const [data, setData] = useState();

    useEffect(() => {
        axios.get('https://gethired-enterprise.herokuapp.com/vacancies/').then((response) => {
            setData(response.data);
        });
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
                        title={vacancy.title_of_vacancie}
                        date={new Date()}
                        salary={vacancy.salary}
                        modality="remote"
                        applies={100}
                        seen={300}
                        description={vacancy.vacancie_details}
                        key={vacancy.id}
                        id={vacancy.id}
                    />
                ))
            ) : (
                <p>Loading...</p>
            )}
        </Container>
    );
};
