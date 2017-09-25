import React from 'react';
import { render } from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import rootReducer from './reducers';

import StreamContainer from './components/Stream/index';

const store = createStore(rootReducer, applyMiddleware(logger));

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>
          {'Soundcloud'}
        </h1>
        <StreamContainer />
      </div>
    </Provider>
  );
}

render(<App />, document.getElementById('root'));
