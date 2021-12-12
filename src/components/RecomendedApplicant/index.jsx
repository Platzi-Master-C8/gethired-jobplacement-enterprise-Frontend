import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export const RecommendedApplicant = ({ img, name, description, percentage, matchType }) => {
    return (
        <Fragment>
            <h2>Recommended</h2>
            <div>
                <img src={img} alt={name} />
                <div>
                    <p>{description}</p>
                </div>
                <span>{percentage} %</span>
                <span>{matchType} match</span>
            </div>
        </Fragment>
    );
};

RecommendedApplicant.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    percentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    matchType: PropTypes.oneOf(['low', 'medium', 'high', 'great']).isRequired,
};
