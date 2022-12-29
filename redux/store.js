import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slices/dataSlice'
import userReducer from './slices/userSlice'; 
import navReducer from './slices/navSlice' 

export const store = configureStore({
  reducer: {
    user: userReducer,
    data: dataReducer,
    nav: navReducer
  }
});