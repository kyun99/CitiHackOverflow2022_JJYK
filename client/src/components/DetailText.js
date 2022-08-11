import React from 'react';

function DetailText(props) {
    return (
        <div className="DetailComponent">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )
}

export default DetailText;