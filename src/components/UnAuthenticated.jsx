import React from 'react';
import PropTypes from 'prop-types';

const UnAuthenticatedLayout = ({ children }) => (
    <section>
        <header>un authenticated</header>
        {children}
    </section>
);

UnAuthenticatedLayout.propTypes = {
    children: PropTypes.any,
};

UnAuthenticatedLayout.defaultProps = {
    children: undefined,
};

export default UnAuthenticatedLayout;
