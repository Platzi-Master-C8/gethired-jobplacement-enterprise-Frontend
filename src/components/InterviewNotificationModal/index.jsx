import React from 'react';
import PropTypes from 'prop-types';

import { Modal, Box } from '@mui/material';
import '../../style/interview.scss';
import iconWarning from '../../img/warning.png';
import iconAccepted from '../../img/icon-accepted.png';

export const InterviewNotification = ({ isOpen, onClose }) => {
    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            className="principal-modal"
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className="container-modal-interview">
                <Box className="containerStyle">
                    <h2 className="title-interview">Interview Title</h2>
                    <Box className="container-interview">
                        <Box>
                            <div className="candidate-profile">
                                <div className="icon-profile">
                                    <a className="icon-profile__user" href="./">
                                        User
                                    </a>
                                </div>
                                <div>
                                    <h2>Candidate</h2>
                                    <p>User role</p>
                                </div>
                            </div>
                            <div className="local-data">
                                <p>Local time: 17:55 | GMT -2</p>
                                <p>Country</p>
                            </div>
                        </Box>
                        <Box>
                            <div className="waiting-image">
                                <img src={iconWarning} alt="Waiting" width={35} />
                            </div>
                            <p>Waiting...</p>
                        </Box>
                    </Box>
                    <Box className="container-interview">
                        <Box>
                            <div className="candidate-profile">
                                <div className="icon-profile">
                                    <a className="icon-profile__user" href="./">
                                        User
                                    </a>
                                </div>
                                <div>
                                    <h2>Recruiter</h2>
                                    <p>User role</p>
                                </div>
                            </div>
                            <div className="local-data">
                                <p>Local time: 17:55 | GMT -2</p>
                                <p>Country</p>
                            </div>
                        </Box>
                        <Box>
                            <div className="waiting-image">
                                <img src={iconAccepted} alt="Waiting" width={35} />
                            </div>
                            <p>Accepted</p>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
};

InterviewNotification.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};
