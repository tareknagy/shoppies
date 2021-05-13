import React from 'react';

export default function Thumbnail({ thumbnail }){

    return (
        <>
            <div className="thumbnail">
                <img className="fade-in-thumbnail" src={thumbnail.url} alt="" />
            </div>
        </>
    );
}
