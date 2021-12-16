import React from 'react';

import logo from '../../img/gethired_logo.svg';
import iconSalaries from '../../img/salaries.png';
import iconStar from '../../img/star.png';
import iconCompany from '../../img/company.png';
import 'Styles/header.scss';

const Header = () => {
    return (
        <header className="header-menu">
            <figure className="logo-gethired">
                <img src={logo} alt="Logo Gethired" />
            </figure>
            <nav>
                <ul>
                    <li>
                        <a href="./">
                            <img className="icons-menu" src={iconSalaries} alt="Icon Interviews" />
                            <p>Salaries</p>
                        </a>
                    </li>
                    <li>
                        <a href="./">
                            <img className="icons-menu" src={iconStar} alt="Icon Postulations" />
                            <p>Ratings</p>
                        </a>
                    </li>
                    <li>
                        <a href="./">
                            <img className="icons-menu" src={iconCompany} alt="Icon Contacts" />
                            <p>Company</p>
                        </a>
                    </li>
                    <li className="icon-profile">
                        <a className="icon-profile__user" href="./">
                            P
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
