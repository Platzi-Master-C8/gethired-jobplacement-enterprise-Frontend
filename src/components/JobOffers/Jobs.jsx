import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';

import usePagination from 'Hooks/usePagination';

import JobCard from './JobCard';
import { countPage } from './helpers';

const Jobs = ({ loading, error, data }) => {
    const { handleChange, sliceData } = usePagination(data);
    const enumPage = countPage(data);

    const handleClick = () => {
        // TODO: redirect to job detail
        console.log('clicked');
    };

    if (error && !loading) return error;

    return (
        <Fragment>
            {!sliceData.length && loading && (
                <Typography variant="h4" component="h4">
                    Loading...
                </Typography>
            )}
            {sliceData.length < 1 && !loading && (
                <Typography variant="h4" component="h4">
                    No jobs found
                </Typography>
            )}
            {sliceData?.map((job) => (
                <JobCard key={job.id} job={job} onClick={handleClick} />
            ))}
            {!!sliceData.length && (
                <Box sx={{ mt: 3, mb: 4, display: 'flex', justifyContent: 'center' }}>
                    <Pagination count={enumPage} shape="rounded" color="primary" onChange={handleChange} />
                </Box>
            )}
        </Fragment>
    );
};

Jobs.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            userId: PropTypes.string,
            name: PropTypes.string,
            postulation_deadline: PropTypes.string,
            description: PropTypes.string,
            status: PropTypes.bool,
            salary: PropTypes.string,
            company_id: PropTypes.number,
            typeWork: PropTypes.string,
            job_location: PropTypes.string,
            skills: PropTypes.string,
            hours_per_week: PropTypes.string,
            minimum_experience: PropTypes.string,
        }),
    ).isRequired,
};

Jobs.defaultProps = {
    error: '',
};

export default Jobs;
