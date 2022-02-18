import React, { Fragment, useState } from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import ModalCode from 'Components/ModalCode';
import { getStateVacancy } from 'Api/Vacancies/stateVacancy';
import JobDetailsModal from '../JobDetailsModal';

const FiltersUsers = () => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [openDetails, setOpenDetails] = useState(false);
    const [offer, setOffer] = useState(false);
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

    return (
        <Fragment>
            <Card sx={{ p: 2, boxShadow: 3, mt: 2 }}>
                <Typography sx={{ mb: 2 }} variant="h2">
                    Filters
                </Typography>
            </Card>
            <Button sx={{ mt: 3 }} onClick={handleOpen}>
                Status of my offer
            </Button>
            <ModalCode open={open} handleClose={handleClose} onSubmit={onSubmit} loading={loading} error={error} />
            {openDetails && (
                <JobDetailsModal showDetail={openDetails} handleOpenClose={handleCloseDetails} vacancyInfo={offer} />
            )}
        </Fragment>
    );
};

export default FiltersUsers;
