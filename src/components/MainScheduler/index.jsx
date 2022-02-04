import * as React from 'react';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';
import { ViewState } from '@devexpress/dx-react-scheduler';
import { Scheduler, MonthView, Appointments } from '@devexpress/dx-react-scheduler-material-ui';

export const MainScheduler = ({ monthData, currentDate }) => (
    <Paper>
        <Scheduler data={monthData}>
            <ViewState currentDate={currentDate} />
            <MonthView />
            <Appointments />
        </Scheduler>
    </Paper>
);

MainScheduler.propTypes = {
    monthData: PropTypes.oneOfType([PropTypes.array]).isRequired,
    currentDate: PropTypes.string.isRequired,
};
