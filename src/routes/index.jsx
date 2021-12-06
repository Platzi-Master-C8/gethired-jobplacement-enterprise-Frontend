import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import NotFound from 'Pages/NotFound';
import { CreateVacancies } from 'Pages/CreateVacancies';
import { EditVacancies } from 'Pages/EditVacancies';
import VacanciesHistory from '../pages/VacanciesHistory';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" element={<VacanciesHistory />} />
            <Route path="/vacancies" element={<CreateVacancies />} />
            <Route path="/edit-vacancies" element={<EditVacancies />} />
            <Route path="*" element={<NotFound />} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
