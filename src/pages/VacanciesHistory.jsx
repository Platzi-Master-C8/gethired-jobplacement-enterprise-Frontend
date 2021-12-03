import React, { Fragment } from 'react';

import { ListOfVacancies } from '../components/ListOfVacancies';
import { Filters } from '../components/Filters';

const VacanciesHistory = () => {
    return (
        <Fragment>
            <Filters />
            <ListOfVacancies />
        </Fragment>
    );
};

export default VacanciesHistory;
