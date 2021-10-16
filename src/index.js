import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { appStore } from './store/store';
import { loadReviews } from './store/reviewsSlice';
import './assets/sass/style.scss';

// Load reviews from localStorage to Redux
appStore.dispatch(loadReviews());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
