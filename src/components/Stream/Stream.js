import React from 'react';
import PropTypes from 'prop-types';

function renderStreamList(tracksArr, clickHandler) {
  return tracksArr.map(function(track, key) {
    const trackKey = `${track}_${key}`;
    return (
      <li key={trackKey}>
        {track.title}
        <button onClick={clickHandler.bind(null, trackKey)}>
          {track.like ? 'Dislike' : 'Like'}
        </button>
      </li>
    );
  });
}

function Stream({ tracks, likeTrack }) {
  return (
    <div className="stream">
      <ul>
        {renderStreamList(tracks, likeTrack)}
      </ul>
    </div>
  );
}

Stream.propTypes = {
  tracks: PropTypes.array.isRequired,
  likeTrack: PropTypes.func.isRequired
};

export default Stream;
