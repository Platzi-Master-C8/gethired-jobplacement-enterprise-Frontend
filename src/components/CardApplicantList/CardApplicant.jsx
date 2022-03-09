import React from 'react';
import PropTypes from 'prop-types';

import { Button, Box, Typography, Card, Chip, Avatar } from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';

import { LinkStyled } from './styles';

export const CardApplicant = ({ applicant, isStatus, isInterview, isList }) => {
    return (
        <Card sx={{ p: 2, m: 1 }} elevation={3}>
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
                    <Typography variant="h3">
                        {applicant.name} {applicant.paternal_last_name}
                    </Typography>
                    <Typography variant="body2">{applicant.job_title}</Typography>
                </Box>
                {isStatus && !isList && (
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography variant="body2">Status</Typography>
                        <Chip label={applicant.postulation_status.name} color="secondary" size="small" />
                    </Box>
                )}
                {!isStatus && (
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <LinkStyled to={`/postulants/${applicant.id}`}>
                            <AddCircleOutlineSharpIcon />
                        </LinkStyled>
                    </Box>
                )}
            </Box>
            <Box
                sx={{
                    display: 'flex',
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
                            {applicant.email}
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
                            {applicant.cellphone}
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
                            {applicant.city} - {applicant.country}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            {isInterview && isList && (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography variant="body2">Status</Typography>
                        <Chip label={applicant.postulation_status.name} color="secondary" size="small" />
                    </Box>
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

CardApplicant.propTypes = {
    applicant: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        name: PropTypes.string.isRequired,
        paternal_last_name: PropTypes.string.isRequired,
        job_title: PropTypes.string,
        email: PropTypes.string.isRequired,
        cellphone: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        postulation_status: PropTypes.shape({
            name: PropTypes.string,
        }).isRequired,
        vacancy_id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    }),
    isStatus: PropTypes.bool.isRequired,
    isInterview: PropTypes.bool.isRequired,
    isList: PropTypes.bool.isRequired,
};

CardApplicant.defaultProps = {
    applicant: {
        job_title: '',
    },
};
