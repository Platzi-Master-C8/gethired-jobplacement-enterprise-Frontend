import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/header';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Layout;
