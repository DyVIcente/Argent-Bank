import { createSlice } from '@reduxjs/toolkit';

/**
 * Redux slice for managing user state.
 *
 * @constant {Object} userSlice - Redux slice created using `createSlice`.
 * @property {string} name - The name of the slice ('user').
 * @property {Object} initialState - The initial state of the user slice.
 * @property {boolean} initialState.isAuthenticated - Indicates if the user is authenticated.
 * @property {Object | null} initialState.userData - User data object or null if not authenticated.
 * @property {string | undefined} initialState.token - User authentication token.
 * @property {Object} reducers - Redux reducers for the user slice.
 * @property {Function} reducers.loginUser - Reducer for handling user login.
 * @property {Function} reducers.logoutUser - Reducer for handling user logout.
 * @property {Function} reducers.fetchUserProfile - Reducer for updating user profile data.
 */

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    userData: null,
  },
  reducers: {
    loginUser: (state, action) => {
      state.isAuthenticated = true;
      state.userData = action.payload;
      state.token = action.payload.userData.token;
    },
    logoutUser: state => {
      state.isAuthenticated = false;
      state.userData = null;
    },
    fetchUserProfile: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { loginUser, logoutUser, fetchUserProfile } = userSlice.actions;
export default userSlice.reducer;
