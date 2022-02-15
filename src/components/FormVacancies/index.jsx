import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';

import { initialValues } from 'Constants/formVacancies';
import { getAllTypesOfWork } from 'Services/TypesOfWork';
import { getAllSkills } from 'Services/Skills';
import { getAllCompaniesToSelect } from 'Services/Companies';
import { InputText } from 'Components/Commons/InputText';
import { Select } from 'Components/Commons/Select';
import { Tags } from 'Components/Commons/Tags';

export const FormVacancies = ({ mainButtonText, defaultValues, onSubmit }) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [skillsList, setSkills] = useState([]);
    const [companiesList, setCompanies] = useState([]);
    const [typesOfWorkList, setTypesOfWork] = useState([]);
    const { user } = useAuth0();
    const navigate = useNavigate();

    const { handleSubmit, control, reset } = useForm({ defaultValues: initialValues });

    useEffect(() => {
        Promise.all([getAllSkills(), getAllCompaniesToSelect(), getAllTypesOfWork()])
            .then(([skills, companies, typesWork]) => {
                setSkills(skills.data);
                setCompanies(companies.data);
                setTypesOfWork(typesWork.data);
            })
            .catch(() => {
                setMessage('Occurs an error trying to get the data');
                setOpen(true);
            });
    }, []);

    useEffect(() => {
        reset(defaultValues);
    }, [reset, defaultValues]);

    const handleForm = (data) => {
        onSubmit({ user_id: user.sub, ...data })
            .then(navigate('/vacancies'))
            .catch(() => {
                setMessage('There was an error creating the vacancy');
                setOpen(true);
            });
    };

    return (
        <React.Fragment>
            <Box component="form" onSubmit={handleSubmit(handleForm)}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <InputText
                            name="name"
                            label="Vacancy name"
                            helperText="Please enter the name of the vacancy"
                            control={control}
                            autofocus
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Select
                            name="company"
                            label="Company"
                            helperText="Please select an option"
                            control={control}
                            options={companiesList}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Select
                            name="type-work"
                            label="Type of work"
                            helperText="Please select an option"
                            control={control}
                            options={typesOfWorkList}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <InputText
                            name="job-location"
                            label="Job location"
                            helperText="Please enter the location"
                            control={control}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <InputText
                            name="description"
                            label="Description"
                            rows={4}
                            multiline
                            helperText="Please enter the description of the vacancy"
                            control={control}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Tags
                            name="skills"
                            label="Skills and abilities"
                            helperText="Please select the skills and abilities"
                            control={control}
                            options={skillsList}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <InputText
                            name="salary"
                            label="Salary"
                            helperText="Please enter the salary"
                            control={control}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputText
                            name="hours-per-week"
                            label="Hours per week"
                            helperText="Please enter the hours"
                            control={control}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputText
                            name="minimum-experience"
                            label="Minimum experience"
                            helperText="Please enter the necessary experience"
                            control={control}
                            required
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Box sx={{ display: 'flex', justifyContent: 'end', gap: '20px' }}>
                            <Link to="/vacancies">
                                <Button variant="contained" color="error">
                                    Cancel
                                </Button>
                            </Link>
                            <Button variant="contained" color="primary" type="submit">
                                {mainButtonText}
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={() => setOpen(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
                <Alert severity="error">
                    <AlertTitle>Ops!</AlertTitle>
                    {message}
                </Alert>
            </Snackbar>
        </React.Fragment>
    );
};

FormVacancies.propTypes = {
    mainButtonText: PropTypes.string.isRequired,
    defaultValues: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        name: PropTypes.string,
        salary: PropTypes.string,
        description: PropTypes.string,
        company: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        'type-work': PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        'job-location': PropTypes.string,
        skills: PropTypes.arrayOf(PropTypes.string),
        'hours-per-week': PropTypes.string,
        'minimum-experience': PropTypes.string,
    }),
    onSubmit: PropTypes.func.isRequired,
};

FormVacancies.defaultProps = {
    defaultValues: initialValues,
};
