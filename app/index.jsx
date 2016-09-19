import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { I18nextProvider } from 'react-i18next';

import './styles/app.css';
import i18n from './libs/i18n';
import configureStore from './libs/configureStore';

import App from './components/App';
import Welcome from './pages/Welcome';
import Photographer from './pages/Photographer';
import NotFound from './pages/NotFound';

const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute name="welcome" component={Welcome} />

          <Route path="/photographer" component={Photographer} />

          {/* Leave "not found" as last route */}
          <Route path="/:wrongPath" component={NotFound} />
        </Route>
      </Router>
    </I18nextProvider>
  </Provider>
), document.getElementById('root'));
