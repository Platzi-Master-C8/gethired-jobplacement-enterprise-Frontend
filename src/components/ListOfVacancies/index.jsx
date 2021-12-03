import React from 'react';
import { Vacancy } from '../Vacancy';

export const ListOfVacancies = () => {
    return (
        <Vacancy
            title="Job title"
            date={new Date()}
            salary={{ min: 500, max: 1000 }}
            modality="remote"
            applies={100}
            seen={300}
            description="Lorem ipsum"
        />
    );
};
