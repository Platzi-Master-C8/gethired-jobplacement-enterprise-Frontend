import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardContainer = styled.div`
    margin-bottom: 2rem;
    padding: 1rem;
    border-radius: 5px;
    background-color: #fafafa;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const ImageProfile = styled.figure`
    width: 1.5rem;
    height: 1.5rem;
    border: 1px black solid;
    padding: 1rem;
    background-color: #fafafaed;
    border-radius: 50%;
    text-align: center;
    margin-right: 1rem;
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
