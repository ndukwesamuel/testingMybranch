import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunkMiddleware from 'redux-thunk'
import authReducer from './features/Auth/authSlice';

const reducers = combineReducers({
        auth: authReducer
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);


const store = configureStore({
  reducer: persistedReducer,
//   devTools: process.env.NODE_ENV !== 'production',
middleware: [thunkMiddleware],

});

export default store;