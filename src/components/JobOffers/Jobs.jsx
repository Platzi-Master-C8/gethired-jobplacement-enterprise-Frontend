import React, { useState, useCallback, useEffect, Fragment } from 'react';
import Typography from '@mui/material/Typography';

import { getJobs } from 'Api/Vacancies/allVacancies';
import JobCard from './JobCard';

const Jobs = () => {
    const [listJobs, setListJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    const getJobsList = useCallback(async () => {
        const jobs = await getJobs();
        setListJobs(jobs);
    }, []);

    useEffect(() => {
        setLoading(true);
        getJobsList();
        setLoading(false);
    }, [getJobsList]);

    const handleClick = () => {
        // TODO: redirect to job detail
        console.log('clicked');
    };
    console.log(listJobs);
    return (
        <Fragment>
            {!listJobs && !loading && (
                <Typography variant="h4" component="h4">
                    Loading...
                </Typography>
            )}
            {listJobs < 1 && loading && (
                <Typography variant="h4" component="h4">
                    No jobs found
                </Typography>
            )}
            {listJobs && listJobs.map((job) => <JobCard key={job.id} job={job} onClick={handleClick} />)}
        </Fragment>
    );
};

export default Jobs;
