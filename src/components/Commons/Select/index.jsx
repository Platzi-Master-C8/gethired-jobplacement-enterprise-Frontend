import React from 'react';
import PropTypes from 'prop-types';

import { Controller } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import SelectMUI from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';

export const Select = ({ name, control, label, options, required, helperText }) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
                <FormControl variant="filled" fullWidth error={invalid}>
                    <InputLabel id={name}>{label}</InputLabel>
                    <SelectMUI labelId={name} id={name} onChange={onChange} value={value}>
                        {options.map((option) => (
                            <MenuItem key={option.id} value={option.id}>
                                {option.name}
                            </MenuItem>
                        ))}
                    </SelectMUI>
                    {error && <FormHelperText>{error.message}</FormHelperText>}
                </FormControl>
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

Select.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        }),
    ).isRequired,
    required: PropTypes.bool,
    control: PropTypes.shape({}).isRequired,
    helperText: PropTypes.string,
};

Select.defaultProps = {
    required: false,
    helperText: 'Please enter the value',
};
