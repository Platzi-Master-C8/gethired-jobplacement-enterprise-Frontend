import React from 'react';
import PropTypes from 'prop-types';

import { Controller } from 'react-hook-form';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export const Tags = ({ name, label, control, helperText, options, required }) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange }, fieldState: { invalid, error } }) => (
                <Autocomplete
                    multiple
                    id={name}
                    options={options}
                    filterSelectedOptions
                    isOptionEqualToValue={(option, value) => option === value}
                    onChange={(_, data) => onChange(data)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="filled"
                            label={label}
                            error={invalid}
                            helperText={error && error.message}
                        />
                    )}
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

Tags.propTypes = {
    control: PropTypes.shape({}).isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    helperText: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    required: PropTypes.bool,
};

Tags.defaultProps = {
    required: false,
    helperText: 'Please enter the value',
};
