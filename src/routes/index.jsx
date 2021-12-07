import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Theme from 'Pages/Theme';
import NotFound from 'Pages/NotFound';
import VacanciesHistory from '../pages/VacanciesHistory';
import Layout from '../components/Layout';

const Routes = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Theme />} />
                <Route path="/vacancies-history" element={<VacanciesHistory />} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default Routes;
