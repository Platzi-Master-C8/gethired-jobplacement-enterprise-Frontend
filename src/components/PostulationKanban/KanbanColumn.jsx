import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Box, Typography, Card } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { CardApplicant } from 'Components/CardApplicantList/CardApplicant';
import { LoadingCardsSkeleton } from 'Components/CardApplicantList/CardApplicantSkeleton';

export const KanbanColumn = ({ columnData: { name, data } }) => {
    return (
        <Box>
            <Typography variant="h2" align="center" sx={{ mb: 2 }}>
                {name}
            </Typography>
            <Card sx={{ maxHeight: 700, overflow: 'auto' }} elevation={3}>
                {data.length > 0 ? (
                    data.map((app) => (
                        <Grid sx={{ mb: 2 }} key={uuidv4()}>
                            <CardApplicant
                                key={app.id}
                                applicant={app}
                                isStatus={false}
                                isInterview={false}
                                isList={false}
                            />
                        </Grid>
                    ))
                ) : (
                    <LoadingCardsSkeleton />
                )}
            </Card>
        </Box>
    );
};

KanbanColumn.propTypes = {
    columnData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        data: PropTypes.arrayOf(
            PropTypes.shape({
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
            }).isRequired,
        ),
    }).isRequired,
};
