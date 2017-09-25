import React from 'react';
import PropTypes from 'prop-types';

function Stream({ tracks }) {
  console.log(tracks);
  return null;
}

Stream.propTypes = {
  tracks: PropTypes.array.isRequired
};

export default Stream;
