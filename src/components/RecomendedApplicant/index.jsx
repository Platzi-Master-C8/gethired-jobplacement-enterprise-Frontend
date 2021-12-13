import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import AccountCircle from '@mui/icons-material/AccountCircle';

import { Container, Title, Div, Details, Tag, MatchTag } from './styles';

export const RecommendedApplicant = ({ name, description, percentage, matchType }) => {
    return (
        <Fragment>
            <Title>Recommended</Title>
            <Container>
                {/* <img src={img} alt={name} /> */}
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5, fontSize: 60 }} />
                <Div>
                    <p>{name} Name </p>
                    <Details>
                        <p>{description} Lorem ipsum</p>
                        <Tag>{percentage} 85%</Tag>
                        <MatchTag>{matchType} great match</MatchTag>
                    </Details>
                </Div>
            </Container>
        </Fragment>
    );
};

RecommendedApplicant.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    percentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    matchType: PropTypes.oneOf(['low', 'medium', 'high', 'great']).isRequired,
};
