import styled from 'styled-components';

export const Title = styled.h2`
    width: max-content;
    margin-bottom: 10px;
`;

export const Container = styled.div`
    display: flex;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: max-content;
`;

export const Div = styled.div`
    width: 410px;
`;

export const Details = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Tag = styled.span`
    padding: 10 20px;
`;

export const MatchTag = styled(Tag)`
    padding: 10px 20px;
    background-color: rgba(0, 0, 0, 0.2);
    text-transform: capitalize;
`;
