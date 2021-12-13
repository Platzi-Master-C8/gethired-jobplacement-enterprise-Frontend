import styled from 'styled-components';
import Box from '@mui/material/Box';

export const Container = styled(Box)`
    display: flex;
    align-items: flex-end;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: max-content;
`;

export const Title = styled.h2`
    width: max-content;
    margin-bottom: 10px;
`;
