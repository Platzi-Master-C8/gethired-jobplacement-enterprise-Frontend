import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { FormButton } from '../FormVacancies/styles';

export const CancelInterview = ({ isOpen, onClose }) => {
    const [value, setValue] = useState();

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle sx={{ fontWeight: 'bold' }}>Why are you going to cancel the interview?</DialogTitle>
            <DialogContent>
                <FormControl component="fieldset">
                    <RadioGroup
                        aria-label="cancel-interview"
                        name="radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="closed" control={<Radio />} label="Vacancy closed" />
                        <FormControlLabel value="cancelled" control={<Radio />} label="Vacancy cancelled" />
                        <FormControlLabel value="delayed" control={<Radio />} label="Vacancy delayed" />
                        <FormControlLabel value="other" control={<Radio />} label="Other reason" />
                    </RadioGroup>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <FormButton variant="contained" color="error" onClick={onClose}>
                    Cancel
                </FormButton>
                <FormButton variant="contained" color="primary" type="submit" onClick={onClose}>
                    Send {'>'}
                </FormButton>
            </DialogActions>
        </Dialog>
    );
};

CancelInterview.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};