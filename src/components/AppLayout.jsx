import React from 'react';
import PropTypes from 'prop-types';
import usePageTracking from '../customHooks/usePageTracking';
import AuthenticatedLayout from './AuthenticatedLayout';
import UnAuthenticatedLayout from './UnAuthenticated';

// AppLayout to switch UI depends on user authentication status
const AppLayout = ({ children }) => {
  usePageTracking();
  const isAuthenticated = false;
  const Layout = isAuthenticated ? AuthenticatedLayout : UnAuthenticatedLayout;
  return (
    <Layout>
      {children}
    </Layout>
  );
};

AppLayout.propTypes = {
  children: PropTypes.any.isRequired,
};

AppLayout.defaultProps = {
};

export default AppLayout;
