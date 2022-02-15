import React, { useState, useEffect } from 'react';
import { Divider, Button } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';

import { Container, Title, Header, LinkStyled } from './styles';
import SkeletonVacancyHistory from '../SkeletonVacancyHistory';
import { Vacancy } from '../Vacancy';

import { getAllVacancy } from '../../api/Vacancies/allVacancies';

export const ListOfVacancies = () => {
    const [data, setData] = useState();
    const { isAuthenticated } = useAuth0();
    useEffect(() => {
        getAllVacancy().then((response) => {
            setData(response.data.data);
        });
    }, []);

    return (
        <Container>
            <Header>
                <Title>History</Title>
                {isAuthenticated && (
                    <Button type="button" variant="contained">
                        <LinkStyled color="#FFF" to="/vacancies/create">
                            Create new vacancy
                        </LinkStyled>
                    </Button>
                )}
            </Header>
            {data ? (
                data.map((vacancy) => (
                    <Container key={vacancy.id}>
                        <Vacancy
                            title={vacancy.name}
                            date={new Date()}
                            checked={vacancy.status}
                            salary={vacancy.salary}
                            modality={vacancy.typeWork}
                            applies={100}
                            description={vacancy.description}
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
