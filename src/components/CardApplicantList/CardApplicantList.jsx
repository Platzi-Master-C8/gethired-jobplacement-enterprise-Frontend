import React from 'react';
import PropTypes from 'prop-types';

import { Button, Box, Typography, Card, Chip } from '@mui/material';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

import Contact from '../../img/icon-contacts.png';
import { LinkStyled, ImageProfile } from './styles';

export const CardApplicantList = ({ name, profile, email, phone, location, status }) => {
    return (
        <Card sx={{ p: 2 }} elevation={3}>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: '0.5fr 2fr 1fr',
                    mb: 4,
                    alignItems: 'center',
                }}
            >
                <ImageProfile>
                    <img src={Contact} alt="Profile" />
                </ImageProfile>
                <Box>
                    <Typography variant="h3">{name}</Typography>
                    <Typography variant="body2">{profile}</Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: 1,
                    }}
                >
                    <Typography variant="body2">Status</Typography>
                    <Chip label={status} color="secondary" size="small" />
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr',
                    alignSelf: 'center',
                    alignItems: 'center',
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
                            {email}
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
                            {phone}
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
                            {location.city} - {location.country}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                    }}
                >
                    <Button size="small" variant="contained">
                        <LinkStyled color="#FFF" to="/interviews/create">
                            Interview
                        </LinkStyled>
                    </Button>
                </Box>
            </Box>
        </Card>
    );
};

CardApplicantList.propTypes = {
    name: PropTypes.string.isRequired,
    profile: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    location: PropTypes.shape({
        city: PropTypes.string,
        country: PropTypes.string,
    }).isRequired,
    status: PropTypes.string.isRequired,
};
