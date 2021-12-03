import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Theme from 'Pages/Theme';
import NotFound from 'Pages/NotFound';
import Vacancies from '../pages/vacancies';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Theme />} />
            <Route path="/Vacancies" element={<Vacancies />} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
