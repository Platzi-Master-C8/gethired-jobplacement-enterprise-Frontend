import React from 'react';
import PropTypes from 'prop-types';

import { Button, Box, Typography, Card, Chip, Avatar } from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';

import { LinkStyled } from './styles';

export const CardApplicantList = ({
    name,
    profile,
    email,
    phone,
    locationCity,
    locationCountry,
    status,
    isStatus,
    isInterview,
}) => {
    return (
        <Card sx={{ p: 2, mb: 2 }} elevation={3}>
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
                        ml: isStatus ? 'none' : '0.5rem',
                    }}
                >
                    <Avatar alt="Applicant avatar" sx={{ mr: 2 }}>
                        <AccountCircleRoundedIcon />
                    </Avatar>
                </Box>
                <Box>
                    <Typography variant="h3">{name}</Typography>
                    <Typography variant="body2">{profile}</Typography>
                </Box>
                {isStatus ? (
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography variant="body2">Status</Typography>
                        <Chip label={status.name} color="secondary" size="small" />
                    </Box>
                ) : (
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <LinkStyled to="/postulants">
                            <AddCircleOutlineSharpIcon />
                        </LinkStyled>
                    </Box>
                )}
            </Box>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: isInterview ? '2fr 1fr' : 'none',
                    alignSelf: 'center',
                    alignItems: 'center',
                    mb: isInterview ? 2 : 'none',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        mx: !isStatus ? 'none' : '1rem',
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
                            {locationCity} - {locationCountry}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            {isInterview && (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
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
            )}
        </Card>
    );
};

CardApplicantList.propTypes = {
    name: PropTypes.string.isRequired,
    profile: PropTypes.string,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    locationCity: PropTypes.string.isRequired,
    locationCountry: PropTypes.string.isRequired,
    status: PropTypes.shape({
        name: PropTypes.string,
    }).isRequired,
    isStatus: PropTypes.bool.isRequired,
    isInterview: PropTypes.bool.isRequired,
};

CardApplicantList.defaultProps = {
    profile: '',
};
