export const SET_LIST_STATE = 'SET_LIST_STATE';

/**
 * this action will handle the setting of the reducer list
 * @param {boolean} bool
 */
export const setListDisplay = (bool) => {
  return (dispatch) => {
    return dispatch({ type: SET_LIST_STATE, payload: bool });
  };
};
