import styled from 'styled-components';
import { Typography, FormControl, InputLabel } from '@mui/material';

export const StyledFormControl = styled(FormControl)`
    width: 90%;

    .css-10botns-MuiInputBase-input-MuiFilledInput-input {
        padding-top: 13px;
    }
`;

export const StyledLabel = styled(InputLabel)`
    font-family: Montserrat;
    font-weight: 300;
    font-size: 20px;
    color: black;
`;

export const StyledTypography = styled(Typography)`
    font-family: Montserrat;
`;

export const ButtonStyles = {
    backgroundColor: '#F8F8F8',
    border: '1px solid #555BFF',
    color: '#373F41',
    '&:hover': {
        border: '1px solid #555BFF',
    },
};

export const boxStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
    width: '40rem',
    height: '95%',
    backgroundColor: 'white',
    overflow: 'hidden auto',
}