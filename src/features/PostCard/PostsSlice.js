import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getPopularPosts = createAsyncThunk(
    'posts/getPopularPosts', 
    async () => {
        const response= fetch('https://www.reddit.com/r/popular.json').then(resonse => response.json());
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
                
            }
        }
    },
    extraReducers: {
        [getPopularPosts.fulfilled]: (state, {payload}) => {
            const popularPosts = [];
            for (let child in payload.data.children) {
                popularPosts.push(child.data);
            }
            for (let post of popularPosts){
                state.posts[post.id] = {
                    id: post.id,
                    title: post.title,
                    author: post.author,
                    ups: post.ups,
                    downs: post.downs,
                    thumbnail: post.thumbnail,
                };
            }
        },
        [getPopularPosts.pending]: (state, action) => {
            state.status = 'pending';
        },
        [getPopularPosts.rejected]: (state, action) => {
            state.status = 'rejected';
        }
    }
});

export const selectPosts = state => {
    return state.posts.posts;
};
export default posts.reducer;