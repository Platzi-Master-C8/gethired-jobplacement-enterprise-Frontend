import React from 'react';
import PropTypes from 'prop-types';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export const FormSwitch = ({ label }) => {
    return (
        <FormGroup>
            <FormControlLabel control={<Switch defaultChecked />} label={label} />
        </FormGroup>
    );
};

FormSwitch.propTypes = {
    label: PropTypes.string.isRequired,
};
