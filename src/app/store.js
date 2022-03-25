import {configureStore} from '@reduxjs/toolkit';
import postsReducer from '../features/PostsList/PostsSlice.js'


export const store = configureStore({
    reducer: {
        posts: postsReducer
    }
});