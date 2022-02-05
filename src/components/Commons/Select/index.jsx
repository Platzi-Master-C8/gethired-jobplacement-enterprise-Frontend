import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import SelectMUI from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import { Controller } from 'react-hook-form';

export const Select = ({ name, label, control, defaultValue, options, required }) => {
    return (
        <FormControl variant="filled" fullWidth required={required}>
            <InputLabel id={name}>{label}</InputLabel>
            <Controller
                name={name}
                control={control}
                defaultValue={defaultValue}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <SelectMUI labelId={name} id={name} onChange={onChange} value={value} error={!!error}>
                        {options.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </SelectMUI>
                )}
            />
        </FormControl>
    );
};

Select.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        }),
    ).isRequired,
    required: PropTypes.bool,
    control: PropTypes.shape({}).isRequired,
};

Select.defaultProps = {
    defaultValue: '',
    required: false,
};
