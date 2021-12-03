import React, { Fragment } from 'react';
import { Vacancy } from '../Vacancy';

import { Title } from './styles';

export const ListOfVacancies = () => {
    return (
        <Fragment>
            <Title>History</Title>
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
        </Fragment>
    );
};
