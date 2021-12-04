import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Theme from 'Pages/Theme';
import NotFound from 'Pages/NotFound';
import { CreateVacancies } from 'Pages/CreateVacancies';
import { EditVacancies } from 'Pages/EditVacancies';
import VacanciesHistory from '../pages/VacanciesHistory';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" element={<Theme />} />
            <Route path="/vacancies" element={<CreateVacancies />} />
            <Route path="/edit-vacancies" element={<EditVacancies />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/vacancies-history" element={<VacanciesHistory />} />
        </Switch>
    </BrowserRouter>
);

export default Routes;