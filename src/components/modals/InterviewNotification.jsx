import React, { useState } from 'react';
import { Modal, Box } from '@mui/material';
import '../../style/interview.scss';
import iconWarning from '../img/warning.png';
import iconAccepted from '../../img/icon-accepted.png';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    padding: '15px',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '25px',
};

export const InterviewNotification = () => {
    const [openNotification, setOpenNotification] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const handleOpenNotification = () => setOpenNotification(true);
    const handleCloseNotification = () => setOpenNotification(false);

    return (
        <Modal
            open={openNotification}
            onClose={handleCloseNotification}
            className="principal-modal"
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
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
