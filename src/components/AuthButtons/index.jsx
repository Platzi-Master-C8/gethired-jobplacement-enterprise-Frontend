import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import Button from '@mui/material/Button';

export const LoginButton = () => {
    const { loginWithReact } = useAuth0();

    return (
        <Button type="button" onClick={() => loginWithReact()}>
            Log in
        </Button>
    );
};

export const SignupButton = () => {
    const { loginWithReact } = useAuth0();

    return (
        <Button
            type="button"
            onClick={() =>
                loginWithReact({
                    screen_hint: 'signup',
                })
            }
        >
            Sign up
        </Button>
    );
};

export const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <Button type="button" onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
        </Button>
    );
};
