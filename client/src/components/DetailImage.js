import React from 'react';

function DetailImage(props) {
    return (
        <div className="DetailComponent">
            <h1>{props.title}</h1>
            <img src={`../images/${props.img}`} className="image" />
        </div>
    )
}

export default DetailImage;