import React from 'react';
import './PostCard.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faExternalLink, faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons';

const PostCard = ({post}) => {
    return (
        <div className= "post-card">
            <h2 className='post-title'>{post.title}</h2>
            <div className="author">{post.author}</div>
            {post.thumbnail !== 'default'? (
                <div className = "thumbnail">
                    <img src={post.thumbnail} alt='post thumbnail' />
                </div>
            ): []}
            {post.url? 
            (<div className="url">
                <a href={post.url}>
                    <span className="link-text">{post.url}</span>
                    <span className="link-icon"><FontAwesomeIcon icon={faExternalLink} /></span>
                </a>
            </div>): []}
            <p><FontAwesomeIcon icon = {faArrowUp}/> {post.ups}  |   <FontAwesomeIcon icon = {faArrowDown}/> {post.downs}</p>
        </div>
    );
};

export default PostCard;