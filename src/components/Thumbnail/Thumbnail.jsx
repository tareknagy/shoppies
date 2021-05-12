import React from 'react';

export default function Thumbnail({ thumbnail }){

    return (
        <>
        <div className="thumbnail fade-in-thumbnail">
            <img src={thumbnail.url} alt="" />
        </div>
        </>
    );
}
