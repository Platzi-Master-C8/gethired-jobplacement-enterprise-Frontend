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
    const [data, setData] = useState({
        vacancy: {},
        postulants: [],
    });

    const [hidden] = useState(true);

    const fetchData = async () => {
        try {
            const vacancy = await getVacancyById(id);
            const postulants = await getApplicantByVacancy(id);
            setData({ vacancy, postulants });
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    return (
        <Container sx={{ mt: 5, mb: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{ m: 'auto' }}>
                    <Filters />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h2" mb={2}>
                        Vacancy Details
                    </Typography>
                    <OfferDetails offerInfo={data.vacancy} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <ApplicantComparison applicants={data.postulants} />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h2" mb={2}>
                        Applicant List
                    </Typography>
                    {data.postulants.message ? (
                        <CardNoApplicant {...data.postulants} />
                    ) : (
                        data.postulants.map((applicant) => {
                            return (
                                <CardApplicantList
                                    key={applicant.id}
                                    id={applicant.id}
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
                {hidden ? (
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
