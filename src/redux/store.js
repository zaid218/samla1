
import { configureStore } from '@reduxjs/toolkit';
import videosReducer from './videoslice'; // Import your reducer

const store = configureStore({
    reducer: {
        videos: videosReducer, // Make sure it matches the name used in your selector
    },
});

export default store;