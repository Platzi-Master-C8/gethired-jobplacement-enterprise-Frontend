import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    max-width: 1048px;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
`;

export const Title = styled.h2`
    text-align: left;
    margin: 5px 0;
`;

export const LinkStyled = styled(Link)`
    color: ${(props) => props.color};
`;
