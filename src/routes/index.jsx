import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import NotFound from 'Pages/NotFound';
import { CreateVacancies } from 'Pages/CreateVacancies';
import { EditVacancies } from 'Pages/EditVacancies';
import VacanciesHistory from '../pages/VacanciesHistory';
import Layout from '../components/Layout';

const Routes = () => (
    <BrowserRouter>
        <Layout>
          <Switch>
              <Route path="/" element={<VacanciesHistory />} />
              <Route path="/vacancies" element={<CreateVacancies />} />
              <Route path="/edit-vacancies" element={<EditVacancies />} />
              <Route path="*" element={<NotFound />} />
          </Switch>
        </Layout>
    </BrowserRouter>
);

export default Routes;
