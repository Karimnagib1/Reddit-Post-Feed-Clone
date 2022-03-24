import {configureStore} from '@reduxjs/toolkit';
import postsReducer from '../features/PostCard/PostsSlice.js'


export const store = configureStore({
    reducer: {
        posts: postsReducer
    }
});