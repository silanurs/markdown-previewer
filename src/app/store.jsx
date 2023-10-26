import { configureStore } from "@reduxjs/toolkit";
import markdownReducer from '../features/markdownSlicer.jsx'
const store = configureStore({
  reducer: {
    text: markdownReducer,
  },
});

export default store;