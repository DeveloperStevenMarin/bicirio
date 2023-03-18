import { configureStore } from '@reduxjs/toolkit';
import userListReducer from '../features/users/userSlice';
import loggedUserReducer from '../features/users/loggedUserSlice';
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userList', 'loggedUser']
}

const rootReducer = combineReducers({
  userList: userListReducer, 
  loggedUser: loggedUserReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({

  reducer: {
    Store: persistedReducer,
  },
  middleware: [thunk]

});