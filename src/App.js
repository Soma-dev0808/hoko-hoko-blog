import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import {
  Routes, Route,
} from 'react-router-dom';
import CustomRouter from './utils/CustomRouter';
import AuthenticatedLayout from './components/AuthenticatedLayout';
import UnAuthenticatedLayout from './components/UnAuthenticated';
import getOrCreateStore from './store/configureStore';
import Register from './pages/Register';
import BlogList from './pages/BlogList';

const App = () => {
  // Redux store
  const store = getOrCreateStore();
  const history = createBrowserHistory();

  // AppLayout to switch UI depends on user authentication status
  const authenticated = true;
  const AppLayout = authenticated ? AuthenticatedLayout : UnAuthenticatedLayout;
  return (
    <Provider store={store}>
      <CustomRouter history={history}>
        <AppLayout>
          <Routes>
            <Route path="/" />
            <Route path="/register" element={<Register />} />
            <Route path="/login" />
            <Route path="/blogs" element={<BlogList />} />
          </Routes>
        </AppLayout>
      </CustomRouter>
    </Provider>
  );
};

export default App;
