import React from 'react';

import { Link } from 'react-router-dom';

import logo from '../../img/gethired_logo.svg';
import iconMessage from '../../img/icon_message.svg';
import iconNotifications from '../../img/icon-notifications.svg';
import iconVacancies from '../../img/icon-briefcase.png';
import iconInterviews from '../../img/icon-interviews.png';
import iconPostulations from '../../img/icon-postulations.png';
import iconContacts from '../../img/icon-contacts.png';
import 'Styles/header.scss';

const Header = () => {
    return (
        <div className="header-menu">
            <figure className="logo-gethired">
                <img src={logo} alt="Logo Gethired" />
            </figure>
            <ul>
                <li className="icon-message">
                    <a href="./">
                        <img src={iconMessage} alt="Icon Message" />
                        <p>Message</p>
                    </a>
                </li>
                <li>
                    <a href="./">
                        <img src={iconNotifications} alt="Icon Notifications" />
                        <p>Notifications</p>
                    </a>
                </li>
                <li>
                    <a href="./">
                        <img src={iconVacancies} alt="Icon Forum" />
                        <p>Vacancies</p>
                    </a>
                </li>
                <li>
                    <Link to="/interviews">
                        <img src={iconInterviews} alt="Icon Interviews" />
                        <p>Interviews</p>
                    </Link>
                </li>
                <li>
                    <a href="./">
                        <img src={iconPostulations} alt="Icon Postulations" />
                        <p>Postulations</p>
                    </a>
                </li>
                <li>
                    <a href="./">
                        <img src={iconContacts} alt="Icon Contacts" />
                        <p>Contacts</p>
                    </a>
                </li>
                <li className="icon-profile">
                    <a className="icon-profile__user" href="./">
                        {/* this will change later */}U
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Header;
