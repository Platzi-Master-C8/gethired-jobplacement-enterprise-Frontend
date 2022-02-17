import React from 'react';
import PropTypes from 'prop-types';

import { Button, Box, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

import Contact from '../../img/icon-contacts.png';
import { LinkStyled, ImageProfile } from './styles';

export const CardApplicantList = ({ name, profile, email, phone, location }) => {
    return (
        <Card sx={{ p: 2 }} elevation={3}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}
            >
                <ImageProfile>
                    <img src={Contact} alt="Profile" />
                </ImageProfile>
                <Box
                    sx={{
                        mb: '1rem',
                    }}
                >
                    <Typography variant="h3">{name}</Typography>
                    <Typography variant="body2">{profile}</Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr',
                    alignSelf: 'center',
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
                        alignItems: 'center',
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
};
