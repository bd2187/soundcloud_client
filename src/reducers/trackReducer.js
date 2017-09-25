import { TRACKS_SET } from '../constants/actionTypes';

export default function tracks(state = [], action) {
  switch (action.type) {
    case TRACKS_SET:
      return [...state, action.tracks];
    default:
      return state;
  }
}
