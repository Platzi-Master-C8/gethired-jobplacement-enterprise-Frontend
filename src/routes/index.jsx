import React from 'react';
import { HashRouter, Routes as Switch, Route } from 'react-router-dom';

import NotFound from 'Pages/NotFound';
import { CreateVacancies } from 'Pages/CreateVacancies';
import { EditVacancies } from 'Pages/EditVacancies';
import VacanciesHistory from '../pages/VacanciesHistory';
import Layout from '../components/Layout';
import { ListCandidatesVacancies } from '../pages/ListCandidatesVacancies';
import { Interview } from '../pages/Interview';

const Routes = () => (
    <HashRouter>
        <Layout>
            <Switch>
                <Route path="/" element={<VacanciesHistory />} />
                <Route path="/vacancies" element={<CreateVacancies />} />
                <Route path="/edit-vacancies" element={<EditVacancies />} />
                <Route path="/candidates" element={<ListCandidatesVacancies />} />
                <Route path="/interview" element={<Interview />} />
                <Route path="*" element={<NotFound />} />
            </Switch>
        </Layout>
    </HashRouter>
);

export default Routes;
