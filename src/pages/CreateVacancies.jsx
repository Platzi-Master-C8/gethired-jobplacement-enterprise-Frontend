import React from 'react';

import FormVacancies from 'Components/FormVacancies';
import Container from '@mui/material/Container';

import { postNewVacancy } from '../api/Vacancies/postNewVacancy';

export const CreateVacancies = () => {
    const onSubmit = (data) => {
        const formData = {
            title_of_vacancie: data.name,
            published_at: new Date(),
            status: 'open',
            salary: parseInt(data.salary, 10),
            vacancie_details: data.description,
            rol_id: 1,
            postulation_deadline: new Date(),
        };

        postNewVacancy(formData).then((res) => console.log('Datos guardados', res));
    };
    return (
        <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
            <FormVacancies
                title="Create Vacancy"
                editDisplay="none"
                editButtonText="Cancel"
                mainButtonText="Save"
                onSubmit={onSubmit}
            />
        </Container>
    );
};
