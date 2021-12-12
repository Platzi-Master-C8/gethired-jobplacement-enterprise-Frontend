import React from 'react';
import Button from '@mui/material/Button';
import Contact from '../../img/icon-contacts.png';
import '../../style/cardApplication.scss';

export const CardApplicantList = () => {
    return (
        <div className="container-card">
            <div className="profile">
                <figure className="img-profile">
                    <img src={Contact} alt="Profile" />
                </figure>
                <div className="content-profile">
                    <p>Name</p>
                    <p>Profile name</p>
                </div>
            </div>
            <div className="divider" />
            <div className="container-status">
                <p>Status</p>
                <p>date</p>
                <Button size="small" variant="contained">
                    Make interview
                </Button>
            </div>
        </div>
    );
};
