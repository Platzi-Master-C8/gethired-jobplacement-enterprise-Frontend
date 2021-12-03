import React from 'react';
import PropTypes from 'prop-types';

import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

// eslint-disable-next-line react/prop-types
const FormInputText = ({ name, control, label, defaultValue, required }) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                    id={name}
                    helperText={error ? error.message : null}
                    error={!!error}
                    onChange={onChange}
                    value={value}
                    fullWidth
                    label={label}
                    variant="filled"
                    required={required}
                />
            )}
            rules={{ required: true }}
        />
    );
};

FormInputText.propTypes = {
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
};

FormInputText.defaultProps = {
    defaultValue: '',
    required: false,
};

export default FormInputText;
