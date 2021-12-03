import React from 'react';
import PropTypes from 'prop-types';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { Vacancy as Container, Header, Div, DivRight, Tag, Salary, TagContainer, Title, Body, Footer } from './styles';

export const Vacancy = ({ title, salary, modality, applies, seen, description }) => {
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
                    <Salary>
                        ${salary.min} - ${salary.max}
                    </Salary>
                    <Tag>{modality}</Tag>
                </DivRight>
            </Header>
            <Body>
                {description} lorem Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde. Lorem Ipsum es simplemente el
                texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
                de las industrias desde. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de
                texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde.Lorem Ipsum es
                simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
                relleno estándar de las industrias desde
            </Body>
            <Footer>
                <FormControl
                    sx={{
                        width: 100,
                    }}
                >
                    <InputLabel>Options</InputLabel>
                    <Select label="Options">
                        <MenuItem value="edit">Edit</MenuItem>
                        <MenuItem value="delete">Delete</MenuItem>
                    </Select>
                </FormControl>
                <Button type="button" variant="outlined">
                    See more
                </Button>
            </Footer>
        </Container>
    );
};

Vacancy.propTypes = {
    title: PropTypes.string.isRequired,
    salary: PropTypes.shape({
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
    }).isRequired,
    modality: PropTypes.oneOf(['remote', 'face-to-face']).isRequired,
    applies: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    seen: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    description: PropTypes.string.isRequired,
};
