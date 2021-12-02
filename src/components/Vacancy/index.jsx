import React from 'react';
import PropTypes from 'prop-types';

// import MenuItem from '@mui/material/MenuItem'

export const Vacancy = ({ title, date, salary, modality, applies, seen, description }) => {
    return (
        <div>
            <div>
                <div>
                    <div>
                        <h3>{title}</h3>
                        <p>{date.day} yes</p>
                    </div>
                    <div>
                        <span>{applies} applied </span> <span>{seen} seen</span>
                    </div>
                </div>
                <div>
                    <div>
                        <p>
                            ${salary.min} - ${salary.max}
                        </p>
                    </div>
                    <div>
                        <span>{modality}</span>
                    </div>
                </div>
            </div>
            <div>
                <p>{description}</p>
            </div>
            <div>
                <select>
                    <option value="edit">Edit</option>
                    <option value="delete">Delete</option>
                </select>
                <button type="button" variant="contained">
                    See more
                </button>
            </div>
        </div>
    );
};

Vacancy.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(new Date()).isRequired,
    salary: PropTypes.shape({
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
    }).isRequired,
    modality: PropTypes.oneOf(['remote', 'face-to-face']).isRequired,
    applies: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    seen: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    description: PropTypes.string.isRequired,
};
