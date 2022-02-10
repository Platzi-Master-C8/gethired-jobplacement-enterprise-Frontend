import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { activeVacancy, inactiveVacancy } from '../../api/Vacancies/updateVacancy';
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

export const Vacancy = ({ title, checked, salary, modality, applies, description, id }) => {
    const [status, setStatus] = useState(checked);

    const handleStatus = () => {
        if (status) {
            inactiveVacancy(id);
            setStatus(false);
        } else {
            activeVacancy(id);
            setStatus(true);
        }
    };

    return (
        <Container>
            <Header>
                <Div>
                    <Title>{title}</Title>
                    <TagContainer>
                        <FormControlLabel
                            sx={{ mr: 2 }}
                            control={<Switch checked={status} onChange={handleStatus} />}
                            label="Vacancy active"
                        />
                        <Tag>{applies} applied </Tag>
                    </TagContainer>
                </Div>
                <DivRight>
                    <Salary>$ {Intl.NumberFormat().format(salary)}</Salary>
                    <Tag>{modality}</Tag>
                </DivRight>
            </Header>
            <Body sx={{ m: 5 }}>{description}</Body>
            <Footer>
                <Button type="button" variant="contained">
                    <LinkStyled color="#FFF" to={`/vacancies/${id}`}>
                        Edit
                    </LinkStyled>
                </Button>
                <Button type="button" variant="outlined">
                    <LinkStyled color="rgb(25, 118, 210)" to={`/vacancies/${id}`}>
                        See more
                    </LinkStyled>
                </Button>
            </Footer>
        </Container>
    );
};

Vacancy.propTypes = {
    title: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    salary: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    modality: PropTypes.oneOf(['remote', 'face-to-face']).isRequired,
    applies: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};
