import React from 'react';
import './Landing.css';

export default function Landing(props){
    
    function handleClick(e) {
        e.preventDefault();
        props.enterPage(e);
    }

    return (
    <div className="landing">
        <div>
        <h1>Welcome to the Shoppies!</h1><br />
        <a href="#" onClick={handleClick}><h2>Nominate the next winner! click here.</h2></a>
        </div>
    </div>
    )
}