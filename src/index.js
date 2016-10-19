import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware,  compose } from 'redux';
import { Router, browserHistory} from 'react-router';
import App from './components/app';
import reducers from './reducers';
import routes from './routes';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = compose(applyMiddleware(promise,thunk))(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.root'));
