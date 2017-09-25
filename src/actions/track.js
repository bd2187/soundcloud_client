import { TRACKS_SET } from '../constants/actionsTypes';

export function setTracks(tracks) {
  return {
    type: TRACKS_SET,
    tracks
  };
}
