import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from '@components/App';
import AuthContextProvider from './contexts/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
