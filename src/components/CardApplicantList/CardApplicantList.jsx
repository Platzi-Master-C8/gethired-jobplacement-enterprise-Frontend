import { Container } from '@mui/material';
import React from 'react';
import Contact from '../../img/icon-contacts.png';
import '../../style/cardApplication.scss';

export const CardApplicantList = () => {
    return (
        <Container className="container-card" maxWidth="sm" sx={{ mt: 1, mb: 1 }}>
            <div className="profile">
                <figure className="img-profile">
                    <img src={Contact} alt="Profile" />
                </figure>
                <div className="content-profile">
                    <p>Name</p>
                    <p>Profile name</p>
                </div>
            </div>
            <div className="container-status">
                <p>Status</p>
                <p>date</p>
                <input type="checkbox" />
            </div>
        </Container>
    );
};
