import React from 'react';
import { Grid, Divider, Box, FilledInput, InputLabel, Input, Button, IconButton, Modal } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import PropTypes from 'prop-types';
import { CountrySelect } from './CountrySelect';

import { StyledFormControl, StyledLabel, StyledTypography, ButtonStyles, boxStyles } from './styles';

const RegisterApplicantModal = ({ open, handleClose, handleSubmit, setApplicantData, applicantData, handleInput }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box component="form" sx={boxStyles} onSubmit={handleSubmit}>
                <Grid container>
                    <Grid item md={12} margin="1.5rem 7% 1rem">
                        <StyledTypography fontSize={21} fontWeight="600" lineHeight={2}>
                            Job title
                        </StyledTypography>
                        <StyledTypography fontSize={18} fontWeight="400">
                            Company name - Location
                        </StyledTypography>
                    </Grid>
                    <Grid item md={12}>
                        <Divider variant="middle" />
                    </Grid>
                    <Grid item md={12} margin="15px 0 10px 7%">
                        <StyledTypography fontSize={16} fontWeight="300">
                            * These fields are required
                        </StyledTypography>
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        width: '93%',
                        margin: '10px auto',
                        padding: '20px 0',
                        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(173, 173, 173) 0px 0px 0px 1px inset;',
                    }}
                >
                    <Grid container marginLeft="0.1rem" marginBottom="2rem" spacing={3}>
                        <Grid item md={12}>
                            <StyledLabel htmlFor="input-1" shrink>
                                Name *
                            </StyledLabel>
                            <StyledFormControl required>
                                <FilledInput id="input-1" name="name" onChange={handleInput} />
                            </StyledFormControl>
                        </Grid>
                        <Grid item md={12}>
                            <StyledLabel htmlFor="input-2" shrink>
                                Paternal last name *
                            </StyledLabel>
                            <StyledFormControl required>
                                <FilledInput id="input-2" name="paternal_last_name" onChange={handleInput} />
                            </StyledFormControl>
                        </Grid>
                        <Grid item md={12}>
                            <StyledLabel htmlFor="input-3" shrink>
                                Maternal last name *
                            </StyledLabel>
                            <StyledFormControl required>
                                <FilledInput id="input-3" name="maternal_last_name" onChange={handleInput} />
                            </StyledFormControl>
                        </Grid>
                        <Grid item md={12}>
                            <StyledLabel htmlFor="input-4" shrink>
                                Email *
                            </StyledLabel>
                            <StyledFormControl required>
                                <FilledInput id="input-4" name="email" onChange={handleInput} />
                            </StyledFormControl>
                        </Grid>
                        <Grid item md={12}>
                            <StyledLabel htmlFor="input-5" shrink>
                                Phone Number *
                            </StyledLabel>
                            <StyledFormControl>
                                <FilledInput
                                    id="input-5"
                                    name="cellphone"
                                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                    onChange={handleInput}
                                />
                            </StyledFormControl>
                        </Grid>
                        <Grid item md={12}>
                            <StyledLabel htmlFor="input-6" shrink>
                                linkedin_url *
                            </StyledLabel>
                            <StyledFormControl>
                                <FilledInput id="input-6" name="linkedin_url" onChange={handleInput} />
                            </StyledFormControl>
                        </Grid>
                        <Grid item md={12}>
                            <StyledLabel htmlFor="input-7" shrink>
                                Country *
                            </StyledLabel>
                            <CountrySelect setApplicantData={setApplicantData} applicantData={applicantData} />
                        </Grid>
                        {applicantData.country && (
                            <Grid item md={12}>
                                <StyledLabel htmlFor="input-8" shrink>
                                    City *
                                </StyledLabel>
                                <CountrySelect setApplicantData={setApplicantData} applicantData={applicantData} />
                            </Grid>
                        )}
                    </Grid>
                    <Divider
                        sx={{
                            margin: '1rem 0 1.5rem',
                            backgroundColor: 'rgba(0, 0, 0, 0.2)',
                            boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.1)',
                        }}
                    />
                    <Grid container marginLeft="0.1rem" marginBottom="1rem" spacing={3}>
                        <Grid item md={12}>
                            <StyledTypography fontSize={16} fontWeight="700" lineHeight={2}>
                                Relevant experience
                            </StyledTypography>
                        </Grid>
                        <Grid item md={12}>
                            <StyledLabel htmlFor="input-9" shrink>
                                Job Title
                            </StyledLabel>
                            <StyledFormControl>
                                <FilledInput id="input-9" name="job_title" onChange={handleInput} />
                            </StyledFormControl>
                        </Grid>
                        <Grid item md={12}>
                            <StyledLabel htmlFor="input-10" shrink>
                                Company
                            </StyledLabel>
                            <StyledFormControl>
                                <FilledInput id="input-10" name="company" onChange={handleInput} />
                            </StyledFormControl>
                        </Grid>
                    </Grid>
                </Box>
                <Grid container padding="1rem 0 2rem 0">
                    <Grid item md={12} marginLeft="1rem">
                        <StyledLabel htmlFor="button-file" shrink>
                            Resume *
                        </StyledLabel>
                        <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                            <Button variant="outlined" component="label" sx={ButtonStyles}>
                                Choose File
                                <Input
                                    id="button-file"
                                    type="file"
                                    sx={{ display: 'none' }}
                                    onChange={(e) => setApplicantData({ ...applicantData, cv_file: e.target.files[0] })}
                                    // required
                                />
                            </Button>
                            {applicantData.cv_file ? (
                                <StyledTypography fontSize={16} fontWeight="300" marginLeft={3}>
                                    {applicantData.cv_file.name}
                                </StyledTypography>
                            ) : (
                                <StyledTypography fontSize={16} fontWeight="300" marginLeft={3}>
                                    No file chosen
                                </StyledTypography>
                            )}
                        </Grid>
                    </Grid>
                    <Grid item md={12} margin="1rem">
                        <InputLabel htmlFor="icon-button-file" style={{ display: 'flex', alignItems: 'center' }}>
                            <Input
                                id="icon-button-file"
                                type="file"
                                sx={{ display: 'none' }}
                                onChange={(e) =>
                                    setApplicantData({ ...applicantData, motivation_letter_file: e.target.files[0] })
                                }
                            />
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <AttachFileIcon sx={{ transform: 'rotate(45deg)', color: '#555BFF' }} />
                            </IconButton>
                            <StyledTypography
                                fontSize={16}
                                fontWeight="300"
                                sx={{ color: '#555BFF', '&:hover': { cursor: 'pointer' } }}
                            >
                                Attach aditional documents
                            </StyledTypography>
                        </InputLabel>
                    </Grid>
                    <Grid item md={12}>
                        <Divider variant="middle" />
                    </Grid>
                    <Grid item md={12} marginLeft="1rem">
                        <StyledTypography lineHeight={4} fontSize={12} fontWeight="300">
                            By pressing continue you agree with our terms, conditions and personal data policy
                        </StyledTypography>
                        <Grid container>
                            <Button
                                variant="contained"
                                type="submit"
                                size="medium"
                                sx={{ marginRight: '1rem', width: '6rem' }}
                            >
                                Continue
                            </Button>
                            <Button variant="outlined" size="medium" sx={{ width: '6rem' }}>
                                Cancel
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
};

RegisterApplicantModal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    setApplicantData: PropTypes.func.isRequired,
    handleInput: PropTypes.func.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    applicantData: PropTypes.object.isRequired,
};

export default RegisterApplicantModal;
