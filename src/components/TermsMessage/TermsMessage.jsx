import React from 'react';
import { Typography } from '@mui/material';

import { TermsConditiosModal } from '../TermsConditiosModal';
import { PrivacyPolicyModal } from '../PrivacyPolicyModal';

const TermsMessage = () => (
    <Typography variant="caption" sx={{ display: 'flex', flexWrap: 'wrap', wordWrap: 'break-word' }}>
        By pressing submit you agree with our <TermsConditiosModal /> and <PrivacyPolicyModal />
    </Typography>
);

export default TermsMessage;
