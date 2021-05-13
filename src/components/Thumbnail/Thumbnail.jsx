import React from 'react';
import CSSTransition from 'react-transition-group';

export default function Thumbnail({ thumbnail }){

    return (
        <>
            <div className="thumbnail">
                <img className="fade-in-thumbnail" src={thumbnail.url} alt="" />
            </div>
        </>
    );
}
