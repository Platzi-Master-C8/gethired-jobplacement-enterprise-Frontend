import styled from 'styled-components';
import Button from '@mui/material/Button';
import { FormSwitch } from './FormSwitch';

export const FormButton = styled(Button)`
    display: ${(props) => props.display};
`;

export const FormEditSwitch = styled(FormSwitch)`
    display: ${(props) => props.display};
`;