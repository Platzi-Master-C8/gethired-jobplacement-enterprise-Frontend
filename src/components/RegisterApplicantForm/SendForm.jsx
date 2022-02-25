import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, CircularProgress, Grid, Modal, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const boxStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '17rem',
    height: '11rem',
    bgcolor: 'white',
    boxShadow: 24,
    borderRadius: '12px',
    overflow: 'hidden',
};

const closeButton = {
    display: 'flex',
    justifyContent: 'flex-end',
};

const SendForm = ({ open, error, loading, handleClose, message }) => {
    if (loading) {
        return (
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="send-modal-title"
                aria-describedby="send-modal-description"
            >
                <Box sx={boxStyles}>
                    <Grid item sx={closeButton}>
                        <Button variant="text" onClick={handleClose}>
                            <CloseIcon />
                        </Button>
                    </Grid>
                    <Grid
                        container
                        spacing={2}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ padding: '20px' }}
                    >
                        <Grid item>
                            <Typography variant="subtitle1">Sending your application</Typography>
                        </Grid>
                        <Grid item>
                            <CircularProgress color="secondary" />
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        );
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="send-modal-title"
            aria-describedby="send-modal-description"
        >
            <Box sx={boxStyles}>
                <Grid item sx={closeButton}>
                    <Button variant="text" onClick={handleClose}>
                        <CloseIcon />
                    </Button>
                </Grid>
                {error && (
                    <Grid
                        container
                        spacing={2}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ padding: '20px' }}
                    >
                        <Grid container item spacing={1}>
                            <Grid item>
                                <Typography variant="subtitle1">¡Error!: Try again</Typography>
                            </Grid>
                            <Grid item>
                                <ErrorOutlineIcon color="error" />
                            </Grid>
                        </Grid>
                        <Grid container item>
                            <Typography variant="subtitle2">There was an error sending your application</Typography>
                        </Grid>
                    </Grid>
                )}
                {!error && (
                    <Grid
                        container
                        spacing={3}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ padding: '20px', textAlign: 'center' }}
                    >
                        <Grid item>
                            <Typography variant="subtitle1">{message}</Typography>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" onClick={handleClose}>
                                Return
                            </Button>
                        </Grid>
                    </Grid>
                )}
            </Box>
        </Modal>
    );
};

SendForm.propTypes = {
    open: PropTypes.bool.isRequired,
    loading: PropTypes.bool,
    error: PropTypes.bool,
    handleClose: PropTypes.func.isRequired,
    message: PropTypes.string,
};

SendForm.defaultProps = {
    loading: true,
    error: false,
    message: 'Your application has been successfully registered',
};

export default SendForm;
