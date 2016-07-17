import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { Extension } from './containers';
import reducers from './reducers';
import { setActive } from './actions';

const store = createStore(
  reducers
);

chrome.runtime.onMessage.addListener((msg) => {
  store.dispatch(setActive(msg.active));
});

const rootElement = document.createElement('div');
document.body.appendChild(rootElement);
ReactDOM.render(
  <Provider store={store}>
    <Extension />
  </Provider>,
  rootElement
);
