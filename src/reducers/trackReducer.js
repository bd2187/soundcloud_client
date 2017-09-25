import { TRACKS_SET } from '../constants/actionTypes';

const initialState = [
  { title: 'track 1' },
  { title: 'track 2' },
  { title: 'track 3' }
];

function tracksReducer(state = initialState, action) {
  switch (action.type) {
    case TRACKS_SET:
      return [...state, action.tracks];
    default:
      return state;
  }
}

export default tracksReducer;
