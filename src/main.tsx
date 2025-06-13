import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import './index.css';

import { store } from '@/store';

import App from './App.tsx';

function startup() {
  const container = document.getElementById('root');

  if (!container) return;

  const root = createRoot(container);

  root.render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  );
}

startup();
