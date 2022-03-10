import React, { useState, useEffect, Fragment } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { Divider, Button } from '@mui/material';

import getVacanciesByUser from 'Api/Vacancies/getVacanciesByUser';

import { Filters } from './Filters';
import SkeletonVacancyHistory from '../SkeletonVacancyHistory';
import { Vacancy } from '../Vacancy';

import { Container, Title, Header, LinkStyled } from './styles';

export const Vacancies = () => {
    const [data, setData] = useState();
    const { user } = useAuth0();

    useEffect(() => {
        getVacanciesByUser(user.sub).then((response) => {
            setData(response);
        });
    }, []);

    return (
        <Fragment>
            <Filters />
            <Header>
                <Title>History</Title>
                <LinkStyled color="#FFF" to="/vacancies/create">
                    <Button type="button" variant="contained">
                        Create new vacancy
                    </Button>
                </LinkStyled>
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
        </Fragment>
    );
};
