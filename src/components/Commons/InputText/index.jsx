import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@mui/material/TextField';

import { Controller } from 'react-hook-form';

export const InputText = ({ name, control, label, type, required, rows, multiline, helperText }) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { value, ref, onChange }, fieldState: { invalid, error } }) => (
                <TextField
                    value={value}
                    inputRef={ref}
                    onChange={onChange}
                    error={invalid}
                    helperText={error && error.message}
                    label={label}
                    rows={rows}
                    type={type}
                    multiline={multiline}
                    variant="filled"
                    fullWidth
                />
            )}
            rules={{
                required: {
                    value: required,
                    message: helperText,
                },
            }}
        />
    );
};

InputText.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
    helperText: PropTypes.string,
    rows: PropTypes.number,
    multiline: PropTypes.bool,
    control: PropTypes.shape({}).isRequired,
    type: PropTypes.oneOf(['text', 'number', 'password']),
};

InputText.defaultProps = {
    required: false,
    rows: 1,
    multiline: false,
    helperText: 'Please enter the value',
    type: 'text',
};
