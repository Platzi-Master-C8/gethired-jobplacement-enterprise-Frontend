import React from 'react';
import { HashRouter, Routes as Switch, Route } from 'react-router-dom';

import { NotFound } from 'Pages/NotFound';
import { CreateVacancies } from 'Pages/CreateVacancies';
import { EditVacancies } from 'Pages/EditVacancies';
import { InterviewPlanning } from 'Pages/InterviewPlanning';
import { VacanciesHistory } from 'Pages/VacanciesHistory';
import { ListCandidatesVacancies } from 'Pages/ListCandidatesVacancies';
import { Interviews } from 'Pages/Interviews';

import { HeaderEnterprise } from 'Components/Header';
import { ScrollToTop } from 'Components/ScrollTop';

const Routes = () => (
    <HashRouter>
        <HeaderEnterprise />
        <Switch>
            <Route path="/" element={<VacanciesHistory />} />
            <Route path="/vacancies" element={<CreateVacancies />} />
            <Route path="/vacancies/:id" element={<EditVacancies />} />
            <Route path="/candidates" element={<ListCandidatesVacancies />} />
            <Route path="/interview-planning" element={<InterviewPlanning />} />
            <Route path="/interviews" element={<Interviews />} />
            <Route path="*" element={<NotFound />} />
        </Switch>
        <ScrollToTop />
    </HashRouter>
);

export default Routes;
