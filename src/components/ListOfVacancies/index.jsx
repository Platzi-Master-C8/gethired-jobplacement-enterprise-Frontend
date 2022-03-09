import React, { useState, useEffect } from 'react';
import { Divider, Button } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';

import getVacanciesByUser from 'Api/Vacancies/getVacanciesByUser';

import { Container, Title, Header, LinkStyled } from './styles';
import SkeletonVacancyHistory from '../SkeletonVacancyHistory';
import { Vacancy } from '../Vacancy';

export const ListOfVacancies = () => {
    const [data, setData] = useState();
    const { user } = useAuth0();

    useEffect(() => {
        getVacanciesByUser(user.sub).then((response) => {
            setData(response);
        });
    }, []);

    return (
        <Container>
            <Header>
                <Title>History</Title>
                <Button type="button" variant="contained">
                    <LinkStyled color="#FFF" to="/vacancies/create">
                        Create new vacancy
                    </LinkStyled>
                </Button>
            </Header>
            {data?.length > 0 ? (
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
