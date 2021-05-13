import React from 'react';

export default function Thumbnail({ thumbnail }){

    return (
        <>
            <div className="thumbnail in-thumbnail">
                <div className="thumbnail-exit">x</div>
                <img className="fade-in-thumbnail" src={thumbnail.url} alt="" />
            </div>
        </>
    );
}
