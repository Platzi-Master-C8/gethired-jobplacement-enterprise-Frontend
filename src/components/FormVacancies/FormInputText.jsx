import React from 'react';
import PropTypes from 'prop-types';

import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

// eslint-disable-next-line react/prop-types
const FormInputText = ({ name, control, label }) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue=""
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
                />
            )}
            rules={{ required: true }}
        />
    );
};

FormInputText.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default FormInputText;
