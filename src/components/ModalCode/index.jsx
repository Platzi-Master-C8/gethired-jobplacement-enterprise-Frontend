import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';

const ModalCode = ({ handleClose, open, onSubmit, loading }) => {
    const { register, handleSubmit, formState } = useForm();
    const { errors } = formState;

    // eslint-disable-next-line no-console

    const valueRequired = {
        required: {
            value: true,
            message: 'This field is required',
        },
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle sx={{ textAlign: 'center', mt: 2, fontWeight: 600 }}>
                What is the status of my offer?
            </DialogTitle>
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                <DialogContent sx={{ gap: '1em', display: 'flex' }}>
                    <TextField
                        label="Code offer"
                        {...register('code', valueRequired)}
                        error={!!errors?.code}
                        helperText={errors?.code?.message}
                    />
                    <TextField
                        label="Last Name"
                        {...register('lastName', valueRequired)}
                        error={!!errors?.lastName}
                        helperText={errors?.lastName?.message}
                    />
                </DialogContent>
                <DialogActions sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                    <Button onClick={handleClose}>Cancel</Button>
                    <LoadingButton type="submit" variant="contained" size="large" loading={loading}>
                        View Status
                    </LoadingButton>
                </DialogActions>
            </Box>
        </Dialog>
    );
};

ModalCode.propTypes = {
    handleClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default ModalCode;
