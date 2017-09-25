import React from 'react';
import PropTypes from 'prop-types';

class Stream extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(key) {
    this.setState({
      [key]: !this.state[key]
    });
  }

  displayTracks(tracks = []) {
    return tracks.map((track, key) => {
      const trackKey = `${key}_${track.title}`;
      return (
        <li key={trackKey}>
          {track.title}
          <button onClick={this.handleClick.bind(null, trackKey)}>
            {this.state[trackKey] ? 'Dislike' : 'Like'}
          </button>
        </li>
      );
    });
  }

  render() {
    const { tracks } = this.props;
    console.log(this.state);
    return (
      <div className="stream">
        <ul className="track">
          {this.displayTracks(tracks)}
        </ul>
      </div>
    );
  }
}

Stream.propTypes = {
  tracks: PropTypes.array.isRequired
};

export default Stream;
