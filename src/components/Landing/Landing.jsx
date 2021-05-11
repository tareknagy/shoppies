import React from 'react';
import './Landing.css';

export default function Landing(props){
    
    function handleClick(e) {
        e.preventDefault();
        props.enterPage(e);
    }

    return (
    <div className="landing">
        <title>Welcome to the Shoppies!</title>
        <a href="#" onClick={handleClick}><h2>Nominate the next winner!</h2></a>
    </div>
    )
}