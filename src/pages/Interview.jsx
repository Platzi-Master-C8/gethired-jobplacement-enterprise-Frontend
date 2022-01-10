import * as React from 'react';
import { Container, Button, Modal, Box, Typography } from '@mui/material';
import '../style/interview.scss';

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
};

export const Interview = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Container>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                className="principal-modal"
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box className="containerStyle">
                        <h2 className="title-interview">Interview Title</h2>
                        <div className="candidate-profile">
                            <div>Avatar</div>
                            <div>
                                <h2>Candidate</h2>
                                <p>User role</p>
                            </div>
                        </div>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Box>
                </Box>
            </Modal>
        </Container>
    );
};
