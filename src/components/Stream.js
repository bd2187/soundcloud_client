import React from 'react';
import PropTypes from 'prop-types';

class Stream extends React.Component {
  render() {
    const tracks = this.props.tracks;
    return (
      <div className="stream">
        <ul>
          {tracks.map((track, index) => {
            return (
              <li key={`${index}_track`}>
                {track.title}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

Stream.propTypes = {
  tracks: PropTypes.array.isRequired
};

export default Stream;
