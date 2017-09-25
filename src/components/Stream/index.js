import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { likeTrack } from '../../actions';
import PropTypes from 'prop-types';
import Stream from './Stream';

function StreamContainer({ tracks, likeTrack }) {
  return <Stream tracks={tracks} likeTrack={likeTrack} />;
}

function mapStateToProps(state) {
  return {
    tracks: state.tracksReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ likeTrack }, dispatch);
}

StreamContainer.propTypes = {
  tracks: PropTypes.array.isRequired,
  likeTrack: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamContainer);
