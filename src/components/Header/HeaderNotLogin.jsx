import React from 'react';

import logo from '../../img/gethired_logo.svg';
import 'Styles/header.scss';

export const HeaderNotLogin = () => {
    return (
        <div className="header-menu__notlogin">
            <figure className="logo-gethired">
                <img src={logo} alt="Logo Gethired" />
            </figure>
            <div>
                <input className="button_login" type="button" value="Log In" />
                <input className="button_sing" type="button" value="Sign Up" />
            </div>
        </div>
    );
};
