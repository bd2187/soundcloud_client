import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Stream from './Stream';

class StreamContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { tracks } = this.props;
    return <Stream tracks={tracks} />;
  }
}

function mapStateToProps(state) {
  return {
    tracks: state.tracksReducer
  };
}

StreamContainer.propTypes = {
  tracks: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(StreamContainer);
