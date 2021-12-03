import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Theme from 'Pages/Theme';
import NotFound from 'Pages/NotFound';
import { CreateVacancies } from 'Pages/CreateVacancies';
import { EditVacancies } from 'Pages/EditVacancies';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" element={<Theme />} />
            <Route path="/vacancies" element={<CreateVacancies />} />
            <Route path="/edit-vacancies" element={<EditVacancies />} />
            <Route path="*" element={<NotFound />} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
