import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import {
  Routes, Route,
} from 'react-router-dom';
import CustomRouter from './utils/CustomRouter';
import AppLayout from './components/AppLayout';
import getOrCreateStore from './store/configureStore';
import routes from './utils/routes';

const App = () => {
  // Redux store
  const store = getOrCreateStore();
  const history = createBrowserHistory();

  return (
    <Provider store={store}>
      <CustomRouter history={history}>
        <AppLayout>
          <Routes>
            {routes.map((route, idx) => {
              const { path, component } = route;
              const customKey = idx + path;
              const Component = component;

              return (
                <Route key={customKey} path={path} element={<Component />} />
              );
            })}
          </Routes>
        </AppLayout>
      </CustomRouter>
    </Provider>
  );
};

export default App;
