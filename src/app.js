import React from 'react';
import { render } from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import rootReducer from './reducers';

import Stream from './components/Stream';

const tracks = [{ title: 'track 1' }, { title: 'track 2' }];
const store = createStore(rootReducer, applyMiddleware(logger));

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>
          {'Soundcloud'}
        </h1>
        <Stream />
      </div>
    </Provider>
  );
}

render(<App />, document.getElementById('root'));
