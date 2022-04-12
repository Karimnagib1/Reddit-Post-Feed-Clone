import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostCard from '../../components/PostCard/PostCard';
import { getPopularPosts, selectStatus, selectPosts } from './PostsSlice';

import './PostsList.css';


const PostsList = () => {
    const status = useSelector(selectStatus);
    let posts = useSelector(selectPosts);
    posts = Object.values(posts)

    const dispatch = useDispatch();
    useEffect( () => {
        dispatch(getPopularPosts());
    },[dispatch]);
    console.log(posts);
    
    return (
        <div className = "posts-list">
            {status === 'pending' ? (<div className= 'laoding'>Loading...</div>): []}
            {status === 'rejected'?(<div className= 'rejected'>Rejected...</div>): []}
            {status === 'fulfilled'? posts.map((post, i) => (<PostCard post = {post} key = {i}/>)):[]}
            
        </div>
    );
};

export default PostsList;