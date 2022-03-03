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
    const [currentVacancy, setCurrentVacancy] = useState({
        name: '',
        description: '',
        status: true,
        salary: 0,
        typeWork: '',
        skillsRaw: '',
        hoursWeek: 0,
        experience: 0,
    });
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
                    <Typography variant="h2" mb={2}>
                        Vacancy Details
                    </Typography>
                    <OfferDetails
                        name={currentVacancy.name}
                        description={currentVacancy.description}
                        status={currentVacancy.status}
                        salary={currentVacancy.salary}
                        typeWork={currentVacancy.typeWork}
                        skillsRaw={currentVacancy.skillsRaw}
                        hoursWeek={currentVacancy.hoursWeek}
                        experience={currentVacancy.experience}
                    />
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
                                    key={applicant.id}
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
