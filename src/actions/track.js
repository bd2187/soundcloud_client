import { TRACKS_SET, LIKE_TRACK } from '../constants/actionTypes';

export function likeTrack(trackKey) {
  return {
    type: LIKE_TRACK,
    trackKey
  };
}

export function setTracks(tracks) {
  return {
    type: TRACKS_SET,
    tracks
  };
}
