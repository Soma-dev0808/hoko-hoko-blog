import React from 'react';
import { Provider } from 'react-redux';
import AuthenticatedLayout from './components/AuthenticatedLayout';
import UnAuthenticatedLayout from './components/UnAuthenticated';
import getOrCreateStore from './store/configureStore';

function App() {
  // Redux store
  const store = getOrCreateStore();
  // AppLayout to switch UI depends on user authentication status
  const authenticated = true;
  const AppLayout = authenticated ? AuthenticatedLayout : UnAuthenticatedLayout;
  return (
    <Provider store={store}>
      <AppLayout>
        <div className="App">
          Olla!!
        </div>
      </AppLayout>
    </Provider>
  );
}

export default App;
