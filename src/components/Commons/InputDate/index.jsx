import React from 'react';
import PropTypes from 'prop-types';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TextField from '@mui/material/TextField';

import formatDate from 'date-fns/locale/en-GB';

import { Controller } from 'react-hook-form';

export const InputDate = ({ name, control, defaultValue, label, required }) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <LocalizationProvider dateAdapter={AdapterDateFns} locale={formatDate}>
                    <DatePicker
                        onChange={onChange}
                        value={value}
                        label="Basic example"
                        renderInput={(parms) => (
                            <TextField
                                // eslint-disable-next-line react/jsx-props-no-spreading
                                {...parms}
                                label={label}
                                id={name}
                                helperText={error ? error.message : null}
                                error={!!error}
                                onChange={onChange}
                                value={value}
                                fullWidth
                                variant="filled"
                                required={required}
                            />
                        )}
                    />
                </LocalizationProvider>
            )}
        />
    );
};

InputDate.propTypes = {
    name: PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
    control: PropTypes.shape({}).isRequired,
};

InputDate.defaultProps = {
    defaultValue: '',
    required: false,
};
