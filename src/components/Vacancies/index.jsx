import React, { useState, useEffect, Fragment } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { Button } from '@mui/material';

import getVacanciesByUser from 'Api/Vacancies/getVacanciesByUser';

import { Filters } from './Filters';
import { NoVacancies } from './NoVacancies';
import { SkeletonVacancy } from './SkeletonVacancy';
import { VacancyCard } from './VacancyCard';

import { Title, Header, LinkStyled } from './styles';

export const Vacancies = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth0();

    useEffect(() => {
        getVacanciesByUser(user.sub).then((response) => {
            setLoading(false);
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

            {loading && <SkeletonVacancy />}

            {data.length > 0 &&
                data.map((vacancy) => (
                    <VacancyCard
                        title={vacancy.name}
                        date={new Date()}
                        checked={vacancy.status}
                        salary={vacancy.salary}
                        modality={vacancy.typeWork}
                        applies={100}
                        description={vacancy.description}
                        id={vacancy.id}
                        key={vacancy.id}
                    />
                ))}

            {data.length === 0 && !loading && <NoVacancies />}
        </Fragment>
    );
};
