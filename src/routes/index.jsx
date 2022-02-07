import React from 'react';
import { HashRouter, Routes as Switch, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import { NotFound } from 'Pages/NotFound';
import { EnterpriseHome } from 'Pages/EnterpriseHome';
import { CreateVacancies } from 'Pages/CreateVacancies';
import { EditVacancies } from 'Pages/EditVacancies';
import { InterviewPlanning } from 'Pages/InterviewPlanning';
import { VacanciesHistory } from 'Pages/VacanciesHistory';
import { ListCandidatesVacancies } from 'Pages/ListCandidatesVacancies';
import { Interviews } from 'Pages/Interviews';
import Offers from 'Pages/Offers';
import Layout from 'Components/Layout';

const Routes = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <HashRouter>
            <Layout>
                {isAuthenticated ? (
                    <Switch>
                        <Route path="/" element={<EnterpriseHome />} />
                        <Route path="/vacancies" element={<VacanciesHistory />} />
                        <Route path="/vacancies/create" element={<CreateVacancies />} />
                        <Route path="/vacancies/:id/edit" element={<EditVacancies />} />
                        <Route path="/candidates" element={<ListCandidatesVacancies />} />
                        <Route path="/interview-planning" element={<InterviewPlanning />} />
                        <Route path="/interviews" element={<Interviews />} />
                        <Route path="/offers" element={<Offers />} />
                        <Route path="*" element={<NotFound />} />
                    </Switch>
                ) : (
                    <Switch>
                        <Route path="/" element={<VacanciesHistory />} />
                        <Route path="*" element={<NotFound />} />
                    </Switch>
                )}
            </Layout>
        </HashRouter>
    );
};

export default Routes;
