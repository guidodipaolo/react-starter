
// ---- Action types
export const LOGIN_REQUEST = "AUTH::LOGIN_REQUEST";
export const LOGIN_SUCCESS = "AUTH::LOGIN_SUCCESS";
export const LOGIN_FAILURE = "AUTH::LOGIN_FAILURE";


// ---- Action creators
export const loginRequest = ({ error = null } = {}) => ({
  type: LOGIN_REQUEST,
  payload: { error }
});

export const loginSuccess = ({ error = null,  user ={}} = {}) => ({
  type: LOGIN_SUCCESS,
  payload: { user, error }
});

export const loginFailure = ({ error = "Error" } = {}) => ({
  type: LOGIN_FAILURE,
  payload: { error }
});


// const api = API.create();
// export function login(user) {
//   return dispatch => {
//     dispatch(loginRequest());
//     //api.setHeader('Authorization', 'Token '+token);  // Set authToken
//     api
//       .login({user: user})
//       .then(response => {
//         if (response.ok) {
//           user.userId = response.data.userId;
//           user.favorites = response.data.favorites;
//           dispatch(loginSuccess(user));
//           let isAuthenticated = true;
//           localStorage.setItem("papUser", JSON.stringify(user));
//           dispatch(setUser(user, isAuthenticated));
//           dispatch(setLoginModalState(false));
//           return;
//         }
//         console.log("User error: ", response);
//         let error = { error: response.data.code };
//         dispatch(loginFailure(error));
//       })
//       .catch(error => {
//         console.log("User catch error: ", error);
//         dispatch(loginFailure(error));
//       });
//   };
// }
