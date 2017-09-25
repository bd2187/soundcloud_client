import React from 'react';
import { render } from 'react-dom';
import Stream from './components/Stream';

const tracks = [{ title: 'track 1' }, { title: 'track 2' }];

function App() {
  return (
    <div>
      <h1>
        {'Soundcloud'}
      </h1>
      <Stream tracks={tracks} />
    </div>
  );
}

render(<App />, document.getElementById('root'));
