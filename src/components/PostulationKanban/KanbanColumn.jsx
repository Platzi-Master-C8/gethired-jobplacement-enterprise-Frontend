import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Box, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { CardApplicant } from 'Components/CardApplicantList/CardApplicant';

export const KanbanColumn = ({ columnData: { name, appIds } }) => {
    return (
        <Box>
            <Typography variant="h2" align="center" sx={{ mb: 2 }}>
                {name}
            </Typography>
            {appIds.map((app, index) => {
                return (
                    <Grid sx={{ mb: 2 }} key={uuidv4()}>
                        <CardApplicant
                            id={app.id}
                            key={app.id}
                            app={app}
                            name={app.name}
                            profile={app.profile}
                            email={app.email}
                            phone={app.phone}
                            location={app.location}
                            status={app.status}
                            index={index}
                            isStatus={false}
                            isInterview={false}
                        />
                    </Grid>
                );
            })}
        </Box>
    );
};

KanbanColumn.propTypes = {
    columnData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        appIds: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                profile: PropTypes.string.isRequired,
                email: PropTypes.string.isRequired,
                phone: PropTypes.string.isRequired,
                location: PropTypes.shape({
                    city: PropTypes.string,
                    country: PropTypes.string,
                }).isRequired,
                status: PropTypes.string.isRequired,
            }),
        ).isRequired,
    }).isRequired,
};
