import React from 'react';
import { Box, TextField, Autocomplete } from '@mui/material';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

import countries from '../../constants/countries';

const StyledAutocomplete = styled(Autocomplete)`
    width: 90%;

    .MuiFilledInput-root {
        padding-top: 8px;
    }
`;

export const CountrySelect = ({ applicantData, setApplicantData }) => {
    const handleChage = (e, value) => {
        setApplicantData({ ...applicantData, country: value });
    };

    return (
        <StyledAutocomplete
            id="country-select-demo"
            options={countries}
            value={applicantData?.country || ' '}
            autoHighlight
            isOptionEqualToValue={(option, value) => option.title === value.title}
            getOptionLabel={(option) => option.country || ' '}
            onChange={handleChage}
            renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    <img
                        loading="lazy"
                        width="20"
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        alt=""
                    />
                    {option.country} ({option.code}) +{option.phone}
                </Box>
            )}
            renderInput={(params) => (
                <TextField
                    variant="filled"
                    {...params}
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password',
                    }}
                />
            )}
        />
    );
};

CountrySelect.propTypes = {
    setApplicantData: PropTypes.func.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    applicantData: PropTypes.object.isRequired,
};
