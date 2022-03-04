/* eslint-disable camelcase */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { InterviewCard } from './InterviewCard';
import { GroupSkeleton } from './InterviewCardSkeleton';

export const InterviewsList = ({
    isLoading,
    interviews,
    cancelModal,
    scheduleModal,
    notificationModal,
    setCurrentInterview,
}) => {
    return (
        <Fragment>
            {isLoading && <GroupSkeleton />}

            {interviews.length < 1 && !isLoading && (
                <Typography variant="h6" sx={{ textAlign: 'center', mt: 4 }}>
                    No interviews found 🥲
                </Typography>
            )}

            {interviews.length > 0 && (
                <Grid container spacing={3} sx={{ my: 2 }}>
                    {interviews.map(({ id, platform, status_finished, url, type, date }) => (
                        <Grid item xs={12} sm={6} lg={4} xl={4} key={id}>
                            <InterviewCard
                                id={id}
                                platform={platform}
                                statusFinished={status_finished}
                                url={url}
                                type={type}
                                date={date}
                                cancelModal={cancelModal}
                                scheduleModal={scheduleModal}
                                notificationModal={notificationModal}
                                setCurrentInterview={setCurrentInterview}
                            />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Fragment>
    );
};

InterviewsList.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    interviews: PropTypes.arrayOf(PropTypes.object).isRequired,
    cancelModal: PropTypes.func.isRequired,
    scheduleModal: PropTypes.func.isRequired,
    notificationModal: PropTypes.func.isRequired,
    setCurrentInterview: PropTypes.func.isRequired,
};
