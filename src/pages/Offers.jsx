import React, { useState } from 'react';
import ModalCode from 'Components/ModalCode';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const Offers = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Grid container>
            <Button onClick={handleOpen}>Status of my offer</Button>
            <ModalCode open={open} handleClose={handleClose} />
        </Grid>
    );
};

export default Offers;
