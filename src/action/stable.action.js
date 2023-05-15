export const SET_STABLE_STATE = 'SET_STABLE_STATE';

/**
 * this action will handle the setting of the reducer stable
 * @param {boolean} bool
 */
export const setStableState = (bool) => {
  return (dispatch) => {
    return dispatch({ type: SET_STABLE_STATE, payload: bool });
  };
};

//type = nom de l'action que va recevoir le reducer
//payload = data contenu dans l'action 