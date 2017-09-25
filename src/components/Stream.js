import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/*
  Todo: move state out of component and place into redux store
*/

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

    return (
      <div className="stream">
        <ul className="track">
          {this.displayTracks(tracks)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tracks: state.tracksReducer
  };
}

Stream.propTypes = {
  tracks: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(Stream);
