import { configureStore } from '@reduxjs/toolkit';
import userListReducer from '../features/users/userSlice';
import loggedUserReducer from '../features/users/loggedUserSlice';
export const store = configureStore({

  reducer: {
    userListStore: userListReducer,
    loggedUser: loggedUserReducer
  }

});