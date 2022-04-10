import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid, Typography } from '@mui/material';

import { CardPostulant } from 'Components/CardApplicantList/CardPostulant';
import { OfferDetails } from 'Components/OfferDetails/index';
import { RecruitmentProcess } from 'Components/RecruitmentProcess';
import { OtherPostulations } from 'Components/OtherPostulations';
import { getApplicantById } from 'Api/Applicants';
import { getVacancyById } from 'Api/Vacancies';
import { getPostulationStatus } from 'Api/Applicants/getPostulationStatus';
import { formatProcess } from 'Components/RecruitmentProcess/helpers';

export const PostulationDetail = () => {
    const { id } = useParams();
    const [data, setData] = useState({
        postulant: {},
        vacancy: {},
        process: [],
    });

    const fetchData = async () => {
        try {
            const postulant = await getApplicantById(id);
            const vacancy = await getVacancyById(postulant.vacancyId);
            const postulation = await getPostulationStatus();
            const process = formatProcess(postulation, postulant);

            setData({ postulant, vacancy, process });
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    return (
        <Container sx={{ pt: 2 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <Typography variant="h2" mb={2}>
                        Postulant
                    </Typography>
                    <Grid sx={{ mb: 3 }}>
                        <CardPostulant postulant={data.postulant} />
                    </Grid>
                    <Grid>
                        <Typography variant="h2" mb={2}>
                            Vacancy Details
                        </Typography>
                        <OfferDetails offerInfo={data.vacancy} />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={8}>
                    <RecruitmentProcess process={data.process} />
                    <OtherPostulations />
                </Grid>
            </Grid>
        </Container>
    );
};
