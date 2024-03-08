import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user'; 

/**
 * Redux store configuration.
 *
 * @constant {Object} store - Configured Redux store.
 * @property {Object} reducer - Combined reducers for the store.
 * @property {Object} reducer.user - User reducer module.
 */
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;