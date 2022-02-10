import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';

import axios from 'axios';

import { Vacancy } from '../Vacancy';
import { Container, Title, Header, LinkStyled } from './styles';
import SkeletonVacancyHistory from '../SkeletonVacancyHistory';

export const ListOfVacancies = () => {
    const [data, setData] = useState();

    useEffect(() => {
        axios.get('https://gethiredplatzi.herokuapp.com/api/v1/vacancies').then((response) => {
            setData(response.data.data);
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
                    <Container>
                        <Vacancy
                            title={vacancy.name}
                            date={new Date()}
                            checked={vacancy.status}
                            salary={vacancy.salary}
                            modality={vacancy.typeWork}
                            applies={100}
                            description={vacancy.description}
                            key={vacancy.id}
                            id={vacancy.id}
                        />
                        <Divider />
                    </Container>
                ))
            ) : (
                <SkeletonVacancyHistory />
            )}
        </Container>
    );
};
