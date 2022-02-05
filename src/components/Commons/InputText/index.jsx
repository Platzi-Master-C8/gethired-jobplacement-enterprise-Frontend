import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@mui/material/TextField';

import { Controller } from 'react-hook-form';

export const InputText = ({ name, control, label, defaultValue, required, rows, multiline }) => {
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
                    rows={rows}
                    multiline={multiline}
                />
            )}
        />
    );
};

InputText.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    required: PropTypes.bool,
    rows: PropTypes.number,
    multiline: PropTypes.bool,
    control: PropTypes.shape({}).isRequired,
};

InputText.defaultProps = {
    defaultValue: '',
    required: false,
    rows: 1,
    multiline: false,
};
