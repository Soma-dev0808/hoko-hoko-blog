import React from 'react';
import PropTypes from 'prop-types';

function AuthenticatedLayout({ children }) {
    return (
        <section>
            <div>
                sidebar here
            </div>
            {children}
        </section>
    );
}

AuthenticatedLayout.propTypes = {
    children: PropTypes.any,
};

AuthenticatedLayout.defaultProps = {
    children: undefined,
};

export default AuthenticatedLayout;
