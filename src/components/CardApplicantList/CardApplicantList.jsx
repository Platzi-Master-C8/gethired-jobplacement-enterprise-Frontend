import React from 'react';
import { Button, Box, Typography } from '@mui/material';

import Contact from '../../img/icon-contacts.png';
import { LinkStyled, CardContainer, ImageProfile, Divider } from './styles';

export const CardApplicantList = () => {
    return (
        <CardContainer>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <ImageProfile>
                    <img src={Contact} alt="Profile" />
                </ImageProfile>
                <Box>
                    <Typography
                        component="p"
                        sx={{
                            py: 0.3,
                        }}
                    >
                        Name
                    </Typography>
                    <Typography
                        component="p"
                        sx={{
                            py: 0.3,
                        }}
                    >
                        Profile name
                    </Typography>
                </Box>
            </Box>
            <Divider />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                }}
            >
                <Typography
                    component="p"
                    sx={{
                        pr: 1.3,
                    }}
                >
                    Status
                </Typography>
                <Typography
                    component="p"
                    sx={{
                        pr: 1.3,
                    }}
                >
                    date
                </Typography>

                <Button size="small" variant="contained">
                    <LinkStyled color="#FFF" to="/interviews/create">
                        Interview
                    </LinkStyled>
                </Button>
            </Box>
        </CardContainer>
    );
};
