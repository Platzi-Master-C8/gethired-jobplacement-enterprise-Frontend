import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Theme from 'Pages/Theme';
import NotFound from 'Pages/NotFound';
import VacanciesHistory from '../pages/VacanciesHistory';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Theme />} />
            <Route path="/list-of-vacancies" element={<VacanciesHistory />} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
