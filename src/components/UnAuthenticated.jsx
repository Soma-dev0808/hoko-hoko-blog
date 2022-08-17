import React from 'react';
import PropTypes from 'prop-types';

import './UnAuthenticated.scss';

const UnAuthenticatedLayout = ({ children }) => (
    <div className="unauthenticated-container">
        <div className="unauthenticated-header">unauthenticated</div>
        {children}
    </div>
);

UnAuthenticatedLayout.propTypes = {
    children: PropTypes.any,
};

UnAuthenticatedLayout.defaultProps = {
    children: undefined,
};

export default UnAuthenticatedLayout;
