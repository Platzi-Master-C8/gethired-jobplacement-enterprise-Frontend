/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@mui/material/Grid';

import { InterviewCard } from './InterviewCard';

export const InterviewsList = ({ interviews, cancelModal, scheduleModal, notificationModal, setCurrentInterview }) => {
    return (
        <React.Fragment>
            {interviews.map(({ id, platform, status_finished, url, type, date }) => (
                <Grid item xs={12} sm={6} lg={4} xl={3} key={id}>
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
        </React.Fragment>
    );
};

InterviewsList.propTypes = {
    interviews: PropTypes.arrayOf(PropTypes.object).isRequired,
    cancelModal: PropTypes.func.isRequired,
    scheduleModal: PropTypes.func.isRequired,
    notificationModal: PropTypes.func.isRequired,
    setCurrentInterview: PropTypes.func.isRequired,
};
