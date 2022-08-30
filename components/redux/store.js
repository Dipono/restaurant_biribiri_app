import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './login';

 const store = configureStore({
  reducer: {
    message: messageReducer
  }
});
export  {store};