/* ------------- Reducers ------------- */

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../actions/auth";

const initialState = {
  isFetching: false,
  error: null,
  user: {}
};

// const getCategories = (state, payload) => {
//   let categories = _.concat(state.categories, payload.categories);
//   return Object.assign({}, state, {
//     isFetching: false,
//     categories: categories
//   });
// }

export const authReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_REQUEST:
    case LOGIN_SUCCESS:
    case LOGIN_FAILURE:
      return Object.assign({}, state, payload);

    // case GET_CATEGORIES_SUCCESS:
    //   return getCategories(state, payload);

    default:
    return state;
  }
};
