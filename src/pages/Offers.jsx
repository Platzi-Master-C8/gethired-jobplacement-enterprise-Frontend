import React, { useState } from 'react';
import ModalCode from 'Components/ModalCode';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import JobDetailsModal from '../components/JobDetailsModal';

const Offers = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openDetail, setOpenDetail] = useState(false);
    const handleOpenDetail = () => setOpenDetail(true);
    const handleCloseDetail = () => setOpenDetail(false);

    const vacancyInfo = {
        companyName: 'Super Company Co.',
        location: 'New York',
        description:
            'Duis dolore ullamco cupidatat et magna commodo non esse elit sit elit. Amet ea consequat cupidatat fugiat ad laborum nulla dolore. Aute sit velit amet magna ullamco id cillum incididunt duis velit consequat aliqua nisi ea. Laboris ullamco non eu occaecat ut nisi velit velit ex. Laboris est in nisi sunt in exercitation consequat et sunt dolore tempor. Labore tempor id exercitation consequat velit ullamco quis commodo elit id ex aliqua ex deserunt. Velit nulla non mollit dolor cillum exercitation irure non culpa anim deserunt non.',
        skills: 'Ipsum similique mollitia et voluptate adipisci impedit et.',
        name: 'UX Design',
        postulation_deadline: '1971-06-07',
        status: true,
        salary: '9053723',
        company_id: 1,
        typeWork: 'Fully Remote',
        job_location: '5621 Hayes Ford',
        hoursPerWeek: '27',
        minimumExperience: '3',
        created_at: '2022-01-22T16:02:04.000000Z',
        updated_at: '2022-01-22T16:02:04.000000Z',
    };

    return (
        <Grid container>
            <Button onClick={handleOpen}>Status of my offer</Button>
            <ModalCode open={open} handleClose={handleClose} />
            <Button onClick={handleOpenDetail}>See detail of offer</Button>
            <JobDetailsModal open={openDetail} handleClose={handleCloseDetail} vacancyInfo={vacancyInfo} />
        </Grid>
    );
};

export default Offers;
