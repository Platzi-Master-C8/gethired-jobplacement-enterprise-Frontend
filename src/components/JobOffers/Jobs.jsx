import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';

import usePagination from 'Hooks/usePagination';

import JobCard from './JobCard';
import { countPage } from './helpers';
import GroupSkeleton from './JobSkeleton';

const Jobs = ({ loading, error, data }) => {
    const { handleChange, sliceData } = usePagination(data);
    const enumPage = countPage(data);

    if (error && !loading)
        return (
            <Typography variant="h6" sx={{ textAlign: 'center', mt: 4 }}>
                {error} 🥲
            </Typography>
        );

    return (
        <Fragment>
            {loading && <GroupSkeleton />}
            {sliceData.length < 1 && !loading && (
                <Typography variant="h6" sx={{ textAlign: 'center', mt: 4 }}>
                    No jobs found 🥲
                </Typography>
            )}
            {sliceData?.map((job) => (
                <JobCard key={job.id} job={job} />
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
            salary: PropTypes.number,
            company_id: PropTypes.number,
            typeWork: PropTypes.string,
            job_location: PropTypes.string,
            skills: PropTypes.arrayOf(PropTypes.string),
            hours_per_week: PropTypes.number,
            minimum_experience: PropTypes.number,
        }),
    ).isRequired,
};

Jobs.defaultProps = {
    error: '',
};

export default Jobs;
