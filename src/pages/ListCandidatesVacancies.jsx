import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Container, Grid, Typography, Box } from '@mui/material';
import { getVacancyById } from 'Services/Vacancies';

import { ApplicantComparison } from '../components/ApplicantComparison';
import { CardApplicantList } from '../components/CardApplicantList/CardApplicantList';
import { OfferDetails } from '../components/OfferDetails/index';
import { Filters } from '../components/Filters';
import { RecommendedApplicant } from '../components/RecomendedApplicant';
import { SuccessfulApplicant } from '../components/SuccessfulApplicant';

import '../style/listCandidatesVacancies.scss';
import getApplicantByVacancy from '../api/Applicant/getApplicantByVacancy';
import { CardNoApplicant } from '../components/CardNoApplicant';

export const ListCandidatesVacancies = () => {
    const { id } = useParams();
    const [currentVacancy, setCurrentVacancy] = useState({});
    const [applicants, setApplicants] = useState([]);

    useEffect(() => {
        Promise.all([getVacancyById(id), getApplicantByVacancy(id)])
            .then(([vacancy, applicantVacancy]) => {
                setCurrentVacancy(vacancy);
                setApplicants(applicantVacancy);
            })
            .catch(console.error);
    }, [id]);

    return (
        <Container sx={{ mt: 5, mb: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{ m: 'auto' }}>
                    <Filters />
                </Grid>
                <Grid item xs={12} md={3}>
                    <OfferDetails {...currentVacancy} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <ApplicantComparison applicants={applicants} />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h2" mb={2}>
                        Applicant List
                    </Typography>
                    {applicants.message === 'No Applicants have been added to the vacancy' ? (
                        <CardNoApplicant {...applicants} />
                    ) : (
                        applicants.map((applicant) => {
                            return (
                                <CardApplicantList
                                    name={applicant.name}
                                    profile={applicant.job_title}
                                    email={applicant.email}
                                    phone={applicant.cellphone}
                                    locationCity={applicant.city}
                                    locationCountry={applicant.country}
                                    status={applicant.postulation_status}
                                    isStatus
                                    isInterview
                                />
                            );
                        })
                    )}
                </Grid>
                {/* hide the session */}
                {true ? (
                    <Box />
                ) : (
                    <Box>
                        <Grid item xs={3.5}>
                            <SuccessfulApplicant />
                        </Grid>
                        <Grid item xs={4}>
                            <RecommendedApplicant />
                        </Grid>
                    </Box>
                )}
            </Grid>
        </Container>
    );
};
