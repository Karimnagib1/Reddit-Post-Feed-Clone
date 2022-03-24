import React, {useState} from 'react';
import './Header.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch, faFire} from '@fortawesome/free-solid-svg-icons';
import { getPopularPosts, getPosts } from '../../features/PostCard/PostsSlice';
import { useDispatch } from 'react-redux';

//making the header of the site with a react function
const Header = () => {
    const dispatch = useDispatch();
    //initiating a state to hold the search term
    const [term, setTerm] = useState("");
    //a function to handle term change
    const handleChange = e => {
        setTerm(e.target.value);
    };
    // a function to handle the submission of a term
    const handleSubmit = () => {
        let fTerm = term.split(' ');
        fTerm.join('%');
        setTerm("");
        dispatch(getPosts(fTerm));
    };
    // a function to handle a click on popular button
    const handleClick = () => {
        dispatch(getPopularPosts());
    }
    return (
        <header>
            <div className= 'logo'> Reddit Client</div>
            <form onSubmit= {handleSubmit}>
                <input type= 'text' className = "search" value = {term} placeholder = 'search posts' onChange = {handleChange}></input>
                <button type = 'submit'><FontAwesomeIcon icon={faSearch} /></button>
            </form>
            <button  className = "popular" onClick = {handleClick}>popular <FontAwesomeIcon icon={faFire} /></button>
        </header>
    );
};

export default Header;