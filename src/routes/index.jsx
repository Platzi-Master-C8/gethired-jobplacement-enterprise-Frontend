import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import { Loader } from 'Components/Loader';
import { EnterpriseHome } from 'Pages/EnterpriseHome';
import { CreateVacancies } from 'Pages/CreateVacancies';
import { EditVacancies } from 'Pages/EditVacancies';
import { InterviewPlanning } from 'Pages/InterviewPlanning';
import { VacanciesHistory } from 'Pages/VacanciesHistory';
import { ListCandidatesVacancies } from 'Pages/ListCandidatesVacancies';
import { Interviews } from 'Pages/Interviews';
import { PostulationDetail } from 'Pages/PostulationDetail';
import Offers from 'Pages/Offers';
import { NotFound } from 'Pages/NotFound';
import Layout from 'Components/Layout';

const Routes = () => {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <Loader />;
    }

    return (
        <BrowserRouter basename="/gethired-jobplacement-enterprise-Frontend">
            <Layout>
                {isAuthenticated ? (
                    <Switch>
                        <Route path="/" element={<EnterpriseHome />} />
                        <Route path="/vacancies" element={<VacanciesHistory />} />
                        <Route path="/vacancies/create" element={<CreateVacancies />} />
                        <Route path="/vacancies/:id/edit" element={<EditVacancies />} />
                        <Route path="/vacancies/:id" element={<ListCandidatesVacancies />} />
                        <Route path="/interviews" element={<Interviews />} />
                        <Route path="/interviews/create" element={<InterviewPlanning />} />
                        <Route path="/postulants" element={<PostulationDetail />} />
                        <Route path="*" element={<NotFound />} />
                    </Switch>
                ) : (
                    <Switch>
                        <Route path="/" element={<Offers />} />
                        <Route path="*" element={<NotFound />} />
                    </Switch>
                )}
            </Layout>
        </BrowserRouter>
    );
};

export default Routes;
