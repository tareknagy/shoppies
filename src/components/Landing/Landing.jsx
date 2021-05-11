import React, {useState} from 'react';
import './Landing.css';

export default function Landing(props){
    const [load, setLoad] = useState(false);
    
    function handleClick(e) {
        e.preventDefault();
        props.enterPage(e);
    }

    return (
        <>
            <div className="landing">
            </div>
            <div className="landing-container">
                <title className='fade-in'>Welcome to the Shoppies!</title>
                <a href="#" className='fade-in' onClick={handleClick}><h2>Nominate the next winner!</h2></a>
            </div>
        </>
    )
}