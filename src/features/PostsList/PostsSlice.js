import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getPopularPosts = createAsyncThunk(
    'posts/getPopularPosts', 
    async () => {
        const response= await fetch("https://www.reddit.com/r/popular.json").then(response => response.json());
        return response;
    }
);

export const getPosts = createAsyncThunk(
    'posts/getPosts', 
    async (term) => {
        const response = await fetch(`https://www.reddit.com/search.json?q=${term}`).then(response => response.json());
        return response;
    }
);

const posts = createSlice({
    name: 'posts',
    initialState: {
        posts: {},
        status: 'pending',
    },
    reducers: {
        addPost: (state, action) => {
            const post =action.payload;
            state.posts[post.id] = {
                id: post.id,
                title: post.title,
                author: post.author,
                ups: post.ups,
                downs: post.downs,
                thumbnail: post.thumbnail,
                url: post.url,
                
            }
        }
    },
    extraReducers: {
        [getPopularPosts.fulfilled]: (state, {payload}) => {
            const popularPosts = [];
            for (let child in payload.data.children) {
                popularPosts.push(payload.data.children[child].data);
            }
            state.posts = {};
            for (let post of popularPosts){
                state.posts[post.id] = {
                    id: post.id,
                    title: post.title,
                    author: post.author,
                    ups: post.ups,
                    downs: post.downs,
                    thumbnail: post.thumbnail,
                    url: post.url_overridden_by_dest,
                };
                state.status = 'fulfilled';
            }
        },
        [getPopularPosts.pending]: (state, action) => {
            state.status = 'pending';
        },
        [getPopularPosts.rejected]: (state, action) => {
            state.status = 'rejected';
        },
        [getPosts.fulfilled]: (state, {payload}) => {
            const popularPosts = [];
            for (let child in payload.data.children) {
                popularPosts.push(payload.data.children[child].data);
            }
            state.posts = {};
            for (let post of popularPosts){
                state.posts[post.id] = {
                    id: post.id,
                    title: post.title,
                    author: post.author,
                    ups: post.ups,
                    downs: post.downs,
                    thumbnail: post.thumbnail,
                    url: post.url_overridden_by_dest,
                };
                state.status = 'fulfilled';
            }
        },
        [getPosts.pending]: (state, action) => {
            state.status = 'pending';
        },
        [getPosts.rejected]: (state, action) => {
            state.status = 'rejected';
        },
    }
});

export const selectPosts = state => {
    return state.posts.posts;
};
export const selectStatus = state => {
    return state.posts.status;
};
export default posts.reducer;