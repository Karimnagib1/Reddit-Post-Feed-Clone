import React, {useState} from 'react';
import './Header.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//making the header of the site with a react function
const Header = () => {
    //initiating a state to hold the search term
    const [term, setTerm] = useState("");
    //a function to handle term change
    const handleChange = e => {
        setTerm(e.target.value);
    };
    // a function to handle the submission of a term
    const handleSubmit = () => {
        //write some code here
    };
    // a function to handle a click on popular button
    const handleClick = () => {
        //write the handling code here
    }
    return (
        <header>
            <div className= 'logo'> Reddit Client</div>
            <form onSubmit= {handleSubmit}>
                <input type= 'text' value = {term} placeholder = 'search posts' onChange = {handleChange}></input>
                <button type = 'submit'><FontAwesomeIcon icon="fa-solid fa-magnifying-glass-arrow-right" /></button>
            </form>
            <button onClick = {handleClick}>Popular</button>
        </header>
    );
};

export default Header;