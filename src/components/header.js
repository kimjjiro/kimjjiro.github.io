import React from 'react';

export default (props) => (
    <div>
        <h1>{props.headerText}</h1>
        <p>{props.children}</p>
    </div>
);