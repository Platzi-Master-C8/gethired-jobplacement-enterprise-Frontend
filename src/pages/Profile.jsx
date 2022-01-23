import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const Profile = () => {
    const { user } = useAuth0();
    const { name, picture, email } = user;

    console.log(name, picture, email);
    return (
        <div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, rerum vero excepturi, eos tempora
                incidunt est ea, doloremque voluptatem eaque maxime quasi natus? Nostrum blanditiis cumque animi,
                veritatis vel aut.
            </p>
        </div>
    );
};
