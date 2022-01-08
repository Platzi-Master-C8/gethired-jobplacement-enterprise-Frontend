import React, { useEffect, useState } from 'react';
import { useParams } from 'react-roouter-dom';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import FormInputText from 'Components/FormVacancies/FormInputText';
import { FormSelect } from 'Components/FormVacancies/FormSelect';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { getVacancy, updateVacancy } from '../../api/Vacancies/updateVacancy';
import { FormButton, FormEditSwitch } from './styles';

const dataTypeWork = [
    { value: '1', label: 'Remote' },
    { value: '2', label: 'Full-time' },
    { value: '3', label: 'Part-time' },
];

const dataCompany = [
    { value: '1', label: 'Company 1' },
    { value: '2', label: 'Company 2' },
    { value: '3', label: 'Company 3' },
];

const EditVacanciesForm = ({ title, editDisplay, editButtonText, mainButtonText }) => {
    const { control } = useForm();

    const initialVacancyState = {
        id: null,
        title_of_vacancie: '',
        salary: '',
        vacancie_details: '',
    };

    const [currentVacancy, setCurrentVacancy] = useState(initialVacancyState);

    const { id } = useParams();

    const getVacancyData = () => {
        getVacancy(id)
            .then((res) => {
                setCurrentVacancy(res.data);
                console.log(res.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const updateVacancyData = () => {
        updateVacancy(currentVacancy.id, currentVacancy)
            .then((res) => {
                console.log(res.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    useEffect(() => {
        getVacancyData(id);
    });

    return (
        <Paper sx={{ p: 3 }}>
            {currentVacancy ? (
                <div>
                    <Typography variant="h1" align="center" sx={{ mb: 2 }}>
                        {title}
                    </Typography>

                    <Box component="form">
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <FormInputText
                                    name="name"
                                    label="Vacancy name"
                                    control={control}
                                    value="default"
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormSelect
                                    name="company"
                                    label="Company"
                                    control={control}
                                    options={dataCompany}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormSelect
                                    name="typeWork"
                                    label="Type of work"
                                    control={control}
                                    options={dataTypeWork}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormInputText name="job-location" label="Job location" control={control} required />
                            </Grid>
                            <Grid item xs={12}>
                                <FormInputText
                                    name="description"
                                    label="Description"
                                    control={control}
                                    rows={4}
                                    multiline
                                    value={currentVacancy.vacancie_details}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormInputText name="skills" label="Skills and abilities" control={control} required />
                            </Grid>
                            <Grid item xs={12}>
                                <FormInputText
                                    name="salary"
                                    label="Salary"
                                    control={control}
                                    value={currentVacancy.salary}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormInputText
                                    name="hours-per-week"
                                    label="Hours per week"
                                    control={control}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormInputText
                                    name="minimum-experience"
                                    label="Minimum experience"
                                    control={control}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormEditSwitch label="Vacancy active" display="none" />
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{ display: 'flex', justifyContent: 'end', gap: '20px' }}>
                                    <FormButton variant="contained" color="error" href="/" display={editDisplay}>
                                        {editButtonText}
                                    </FormButton>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        onClick={updateVacancyData}
                                    >
                                        {mainButtonText}
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            ) : (
                <div>
                    <br />
                    <p>Please click on a Vacancy...</p>
                </div>
            )}
        </Paper>
    );
};

EditVacanciesForm.propTypes = {
    title: PropTypes.string.isRequired,
    editDisplay: PropTypes.string.isRequired,
    editButtonText: PropTypes.string.isRequired,
    mainButtonText: PropTypes.string.isRequired,
};

export default EditVacanciesForm;
