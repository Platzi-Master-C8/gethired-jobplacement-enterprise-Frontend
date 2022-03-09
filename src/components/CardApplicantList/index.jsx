import React from 'react';
import PropTypes from 'prop-types';

import { Card } from '@mui/material';
import { LoadingCardsSkeleton } from './CardApplicantSkeleton';

import { CardApplicant } from './CardApplicant';

export const Applicants = ({ data }) => {
    return (
        <Card sx={{ maxHeight: 500, overflow: 'auto' }} elevation={3}>
            {data.length > 0 ? (
                data?.map((applicant) => (
                    <CardApplicant key={applicant.id} applicant={applicant} isStatus isInterview isList />
                ))
            ) : (
                <LoadingCardsSkeleton />
            )}
        </Card>
    );
};

Applicants.propTypes = {
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
        }).isRequired,
    ),
};

Applicants.defaultProps = {
    data: {
        job_title: '',
    },
};
