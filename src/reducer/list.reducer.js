import { SET_LIST_STATE } from '../action/list.action';

const initialeState = { showFavorite: false };

export default function listReducer(state = initialeState, action) {
  switch (action.type) {
    case SET_LIST_STATE:
      return { showFavorite: action.payload };
    default:
      return state;
  }
}
