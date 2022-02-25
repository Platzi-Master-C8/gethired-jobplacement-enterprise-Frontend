import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Skeleton from '@mui/material/Skeleton';
import { useForm, Controller } from 'react-hook-form';

import ModalCode from 'Components/ModalCode';
import { getStateVacancy } from 'Api/Vacancies/stateVacancy';
import { getListCompanies, getListTypeWork, getListLocations } from 'Api/Filters/getFilters';
import JobDetailsModal from '../JobDetailsModal';

const initialValues = {
    typeWork: null ?? '',
    company: null,
    job_location: null,
    min_salary: null,
    max_salary: null,
};

const FiltersUsers = ({ setFilters }) => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [errorFilters, setErrorFilters] = useState(null);
    const [loadingFilters, setLoadingFilters] = useState(false);
    const [openDetails, setOpenDetails] = useState(false);
    const [offer, setOffer] = useState(false);
    const { register, handleSubmit, formState, control, getValues, reset } = useForm({
        defaultValues: initialValues,
    });
    const { errors } = formState;
    const [dataFilters, setDataFilters] = useState({
        companies: [],
        type_work: [],
        locations: [],
    });

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleOpenDetails = () => setOpenDetails(true);
    const handleCloseDetails = () => setOpenDetails(false);

    const onSubmit = async (data) => {
        const { code, lastName } = data;
        setLoading(true);
        try {
            const info = await getStateVacancy({ code, lastName });
            setOffer(info);
            handleClose();
            handleOpenDetails();
            setError(null);
        } catch {
            setError('We have not found any application with this data');
        } finally {
            setLoading(false);
        }
    };

    const getFilters = async () => {
        setLoadingFilters(true);
        try {
            const listCompanies = await getListCompanies();
            const listTypeWork = await getListTypeWork();
            const listLocations = await getListLocations();
            setDataFilters((prevState) => ({
                ...prevState,
                companies: listCompanies,
                type_work: listTypeWork,
                locations: listLocations,
            }));
        } catch {
            setErrorFilters('Not found filters 😢');
        } finally {
            setLoadingFilters(false);
        }
    };

    useEffect(() => {
        getFilters();
    }, []);

    const onSubmitFilter = (data) => {
        const { company, ...rest } = data;
        const info = {
            ...rest,
            'company[]': company?.id,
        };
        setFilters((prevState) => ({
            ...prevState,
            ...info,
        }));
    };

    const handleReset = () => {
        reset(initialValues);
        setFilters(initialValues);
    };

    const disabledButton = () => {
        return Object.entries(getValues()).every(([, value]) => value === null || value === '');
    };

    return (
        <Fragment>
            <Card sx={{ p: 2, boxShadow: 3, mt: 2 }}>
                <Typography sx={{ mb: 2 }} variant="h2">
                    Filters
                </Typography>
                {errorFilters && (
                    <Typography sx={{ mb: 2 }} variant="p">
                        Not found filters 😢
                    </Typography>
                )}
                {loadingFilters && !errorFilters && (
                    <Typography variant="h2">
                        <Skeleton sx={{ height: 60 }} />
                        <Skeleton sx={{ height: 60 }} />
                        <Skeleton sx={{ height: 60 }} />
                    </Typography>
                )}
                {!loadingFilters && !errorFilters && (
                    <Box component="form" onSubmit={handleSubmit(onSubmitFilter)}>
                        <FormControl fullWidth sx={{ mb: 2 }}>
                            <InputLabel>Type Work</InputLabel>
                            <Controller
                                name="typeWork"
                                control={control}
                                render={({ field }) => (
                                    <Select label="Type Work" {...field}>
                                        {dataFilters.type_work?.map(({ id, name }) => (
                                            <MenuItem key={id} value={id}>
                                                {name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                )}
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ mb: 2 }}>
                            <Controller
                                name="company"
                                control={control}
                                render={({ field: { value, ref, onChange, ...field } }) => (
                                    <Autocomplete
                                        {...field}
                                        onChange={(e, data) => onChange(data)}
                                        freeSolo
                                        disableClearable
                                        options={dataFilters.companies}
                                        getOptionLabel={(option) => option?.name || ''}
                                        renderInput={(params) => (
                                            <TextField inputRef={ref} {...params} label="Companies" />
                                        )}
                                    />
                                )}
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ mb: 2 }}>
                            <Controller
                                name="job_location"
                                control={control}
                                render={({ field: { ref, onChange, ...field } }) => (
                                    <Autocomplete
                                        {...field}
                                        onChange={(e, data) => onChange(data)}
                                        freeSolo
                                        disableClearable
                                        options={dataFilters.locations?.map((location) => location.job_location)}
                                        renderInput={(params) => (
                                            <TextField inputRef={ref} {...params} label="Job Location" />
                                        )}
                                    />
                                )}
                            />
                        </FormControl>
                        <FormControl sx={{ mb: 2, display: 'flex', gap: '10px', flexDirection: 'inherit' }}>
                            <TextField
                                label="Min Price"
                                InputProps={{ inputProps: { min: '0' } }}
                                type="number"
                                error={!!errors?.min_salary}
                                helperText={errors?.min_salary && 'Minimum price less at max price'}
                                {...register('min_salary', {
                                    validate: () =>
                                        Number(getValues('max_salary'))
                                            ? Number(getValues('max_salary')) >= Number(getValues('min_salary'))
                                            : true,
                                })}
                            />
                            <TextField
                                label="Max Price"
                                InputProps={{ inputProps: { min: '0' } }}
                                type="number"
                                error={!!errors?.max_salary}
                                helperText={errors?.max_salary && 'Max price greater at minimum price'}
                                {...register('max_salary', {
                                    validate: () =>
                                        !Number(getValues('min_salary'))
                                            ? Number(getValues('min_salary')) <= Number(getValues('max_salary'))
                                            : true,
                                })}
                            />
                        </FormControl>
                        <Button
                            sx={{ mb: 2 }}
                            disabled={!formState.isDirty}
                            variant="contained"
                            size="large"
                            fullWidth
                            type="submit"
                        >
                            Filter
                        </Button>
                        <Button disabled={disabledButton()} fullWidth onClick={handleReset}>
                            Clear Filters
                        </Button>
                    </Box>
                )}
            </Card>
            <Button sx={{ mt: 3 }} onClick={handleOpen} fullWidth variant="outlined">
                Status of my offer
            </Button>
            <ModalCode open={open} handleClose={handleClose} onSubmit={onSubmit} loading={loading} error={error} />
            {openDetails && (
                <JobDetailsModal showDetail={openDetails} handleOpenClose={handleCloseDetails} vacancyInfo={offer} />
            )}
        </Fragment>
    );
};

FiltersUsers.propTypes = {
    setFilters: PropTypes.func.isRequired,
};

export default FiltersUsers;
