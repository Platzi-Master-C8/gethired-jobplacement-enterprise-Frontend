import React from 'react';

import logo from '../../img/gethired_logo.svg';
import iconMessage from '../../img/icon_message.svg';
import iconNotifications from '../../img/icon-notifications.svg';
import iconForum from '../../img/icon-forum.svg';
import iconAnci from '../../img/icon-briefcase.svg';
import iconBlogpost from '../../img/icon-paper.svg';
import iconMyWebSite from '../../img/icon-mywebsite.svg';
import iconProfile from '../../img/icon-profile.svg';
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
                        <img src={iconForum} alt="Icon Forum" />
                        <p>Forum</p>
                    </a>
                </li>
                <li>
                    <a href="./">
                        <img src={iconAnci} alt="Icon Anci" />
                        <p>Anci</p>
                    </a>
                </li>
                <li>
                    <a href="./">
                        <img src={iconBlogpost} alt="Icon Blogpost" />
                        <p>Blogpost</p>
                    </a>
                </li>
                <li>
                    <a href="./">
                        <img src={iconMyWebSite} alt="Icon My WebSite" />
                        <p>My WebSite</p>
                    </a>
                </li>
                <li>
                    <a href="./">
                        {/* this will change later */}
                        <img src={iconProfile} alt="Icon Profile" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Header;
