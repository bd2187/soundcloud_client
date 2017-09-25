import { TRACKS_SET, LIKE_TRACK } from '../constants/actionTypes';

const initialState = [
  { title: 'track 1', like: false },
  { title: 'track 2', like: false },
  { title: 'track 3', like: false }
];

function tracksReducer(state = initialState, action) {
  switch (action.type) {
    case TRACKS_SET:
      return [...state, action.tracks];
    case LIKE_TRACK:
      return state.map(function(track, key) {
        if (action.trackKey === `${track}_${key}`) {
          return { ...track, like: !track.like };
        }
        return track;
      });
    default:
      return state;
  }
}

export default tracksReducer;
