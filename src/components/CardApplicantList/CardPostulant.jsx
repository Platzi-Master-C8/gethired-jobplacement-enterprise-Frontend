import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Box, Typography, Card, Chip, Avatar } from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

import { LoadingCardSkeleton } from './CardApplicantSkeleton';

export const CardPostulant = ({ postulant }) => {
    const data = Object.keys(postulant);

    return (
        <Card sx={{ p: 2 }} elevation={3}>
            {data.length > 0 ? (
                <Fragment>
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: '0.5fr 2fr 0.3fr',
                            mb: 4,
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Avatar alt="Applicant avatar" sx={{ mr: 2 }}>
                                <AccountCircleRoundedIcon />
                            </Avatar>
                        </Box>
                        <Box>
                            <Typography variant="h3">
                                {postulant.name} {postulant.lastName}
                            </Typography>
                            <Typography variant="body2">{postulant.job}</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}
                        >
                            <Typography variant="body2">Status</Typography>
                            <Chip label={postulant.status} color="secondary" size="small" />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 2,
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                mx: '1rem',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    gap: 2,
                                }}
                            >
                                <MailRoundedIcon />
                                <Typography variant="body2" sx={{ py: 0.3 }}>
                                    {postulant.email}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    gap: 2,
                                }}
                            >
                                <LocalPhoneRoundedIcon />
                                <Typography variant="body2" sx={{ py: 0.3 }}>
                                    {postulant.cellPhone}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    gap: 2,
                                }}
                            >
                                <LocationOnRoundedIcon />
                                <Typography variant="body2" sx={{ py: 0.3 }}>
                                    {postulant.city} - {postulant.country}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Fragment>
            ) : (
                <LoadingCardSkeleton />
            )}
        </Card>
    );
};

CardPostulant.propTypes = {
    postulant: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        name: PropTypes.string,
        lastName: PropTypes.string,
        job: PropTypes.string,
        email: PropTypes.string,
        cellPhone: PropTypes.string,
        city: PropTypes.string,
        country: PropTypes.string,
        status: PropTypes.string,
        vacancyId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }).isRequired,
};
