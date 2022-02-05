import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { FormVacancies } from 'Components/FormVacancies';

import { getVacancy, updateVacancy } from '../api/Vacancies/updateVacancy';

export const EditVacancies = () => {
    const { id } = useParams();
    const [currentVacancy, setCurrentVacancy] = useState({});

    const updateVacancyData = (data) => {
        const formData = {
            id: data.id,
            title_of_vacancie: data.name,
            published_at: new Date(),
            status: 'open',
            salary: parseInt(data.salary, 10),
            vacancie_details: data.description,
            rol_id: 1,
            postulation_deadline: new Date(),
        };

        updateVacancy(data.id, formData)
            .then((res) => {
                console.log(res.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    useEffect(() => {
        getVacancy(id)
            .then((res) => {
                setCurrentVacancy({
                    id: res.data.id,
                    name: res.data.title_of_vacancie,
                    salary: res.data.salary,
                    description: res.data.vacancie_details,
                    company: '1',
                    typeWork: '1',
                    'job-location': 'Platzi',
                    skills: 'react',
                    'hours-per-week': '40',
                    'minimum-experience': '2 years',
                });
            })
            .catch((e) => {
                console.log(e);
            });
    }, [id]);

    return (
        <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
            <Paper sx={{ p: 3 }}>
                <Typography variant="h1" align="center" sx={{ mb: 2 }}>
                    Edit a vacancy
                </Typography>

                <FormVacancies mainButtonText="Save" defaultValues={currentVacancy} onSubmit={updateVacancyData} />
            </Paper>
        </Container>
    );
};
