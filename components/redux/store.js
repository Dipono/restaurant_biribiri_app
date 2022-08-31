import { configureStore } from '@reduxjs/toolkit';
import restaurent_gallery from './restaurentGallery';

 const store = configureStore({
  reducer: {
    reaturentFood: restaurent_gallery
  }
});
export  {store};