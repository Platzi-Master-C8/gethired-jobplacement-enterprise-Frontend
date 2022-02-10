import React from 'react';
import PropTypes from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';

import Button from '@mui/material/Button';
import {
    Vacancy as Container,
    Header,
    Div,
    DivRight,
    Tag,
    Salary,
    TagContainer,
    Title,
    Body,
    Footer,
    LinkStyled,
} from './styles';

export const Vacancy = ({ title, salary, modality, applies, seen, description, id }) => {
    const { isAuthenticated } = useAuth0();
    return (
        <Container>
            <Header>
                <Div>
                    <Title>{title}</Title>
                    <TagContainer>
                        <Tag>{applies} applied </Tag> <Tag>{seen} seen</Tag>
                    </TagContainer>
                </Div>
                <DivRight>
                    <Salary>${salary}</Salary>
                    <Tag>{modality}</Tag>
                </DivRight>
            </Header>
            <Body>{description}</Body>
            {isAuthenticated && (
                <Footer>
                    <Button type="button" variant="contained">
                        <LinkStyled color="#FFF" to={`/vacancies/${id}/edit`}>
                            Edit
                        </LinkStyled>
                    </Button>
                    <Button type="button" variant="outlined">
                        <LinkStyled color="rgb(25, 118, 210)" to="/candidates">
                            See more
                        </LinkStyled>
                    </Button>
                </Footer>
            )}
        </Container>
    );
};

Vacancy.propTypes = {
    title: PropTypes.string.isRequired,
    salary: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    modality: PropTypes.oneOf(['remote', 'face-to-face']).isRequired,
    applies: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    seen: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};
