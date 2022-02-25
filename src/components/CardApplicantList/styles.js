import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ImageProfile = styled.figure`
    width: 1.5rem;
    height: 1.5rem;
    border: 1px black solid;
    padding: 1rem;
    background-color: #fafafaed;
    border-radius: 50%;
    text-align: center;
    margin: 0 1rem 0 1rem;
`;

export const Divider = styled.div`
    width: 80%;
    border: 1px #555bff solid;
    margin: 1.5rem;
`;

export const LinkStyled = styled(Link)`
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: ${(props) => props.color};
`;
