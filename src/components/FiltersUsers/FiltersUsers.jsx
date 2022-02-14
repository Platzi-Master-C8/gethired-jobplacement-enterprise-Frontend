import React, { Fragment, useState } from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import ModalCode from 'Components/ModalCode';

const FiltersUsers = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
            <ModalCode open={open} handleClose={handleClose} />
        </Fragment>
    );
};

export default FiltersUsers;
