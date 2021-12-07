import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    max-width: 1048px;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
`;

export const Title = styled.h2`
    text-align: left;
`;

export const LinkStyled = styled(Link)`
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: ${(props) => props.color};
`;
