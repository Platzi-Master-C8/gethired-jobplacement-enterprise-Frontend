import React from 'react';
import { HashRouter, Routes as Switch, Route } from 'react-router-dom';

import NotFound from 'Pages/NotFound';
import { CreateVacancies } from 'Pages/CreateVacancies';
import { EditVacancies } from 'Pages/EditVacancies';
import VacanciesHistory from '../pages/VacanciesHistory';
import Layout from '../components/Layout';
import { ListCandidatesVacancies } from '../pages/ListCandidatesVacancies';

const Routes = () => (
    <HashRouter>
        <Layout>
            <Switch>
                <Route path="/" element={<VacanciesHistory />} />
                <Route path="/vacancies" element={<CreateVacancies />} />
                <Route path="/vacancies/:id" element={<EditVacancies />} />
                <Route path="/candidates" element={<ListCandidatesVacancies />} />
                <Route path="*" element={<NotFound />} />
            </Switch>
        </Layout>
    </HashRouter>
);

export default Routes;
