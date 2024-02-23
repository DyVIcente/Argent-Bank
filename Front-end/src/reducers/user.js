import { createSlice } from '@reduxjs/toolkit';

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
