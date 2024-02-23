import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user'; 


const store = configureStore({
  reducer: {
    user: userReducer,
    // Ajoutez d'autres reducers si nécessaire
  },
  // Ajoutez d'autres options si nécessaire
});

export default store;