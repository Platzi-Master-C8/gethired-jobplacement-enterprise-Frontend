import React from 'react';
import PropTypes from 'prop-types';
import HeaderEnterprise from './Header/Header';

const Layout = ({ children }) => {
    return (
        <div>
            <HeaderEnterprise />
            {children}
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Layout;
