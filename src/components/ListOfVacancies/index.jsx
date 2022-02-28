import React, { useState, useEffect } from 'react';
import { Divider, Button } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';

import { Container, Title, Header, LinkStyled } from './styles';
import SkeletonVacancyHistory from '../SkeletonVacancyHistory';
import { Vacancy } from '../Vacancy';

import { getAllVacancy } from '../../api/Vacancies/allVacancies';
import getVacanciesByUser from '../../api/Vacancies/getVacanciesByUser';

export const ListOfVacancies = () => {
    const [data, setData] = useState();
    const { isAuthenticated, user } = useAuth0();

    useEffect(() => {
        if (isAuthenticated) {
            getVacanciesByUser(user.sub).then((response) => {
                setData(response);
            });
        } else {
            getAllVacancy().then((response) => {
                setData(response.data.data);
            });
        }
    }, [isAuthenticated]);

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
