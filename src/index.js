import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppContextProvider } from './context/AppContext';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppContextProvider>
      <App obj={window} />
  </AppContextProvider>
);

serviceWorkerRegistration.register();