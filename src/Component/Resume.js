import React from 'react';

function Resume( {data , templateStyle} ) {

    return (
        <div>
            HI {data.name.fname} {templateStyle}
        </div>
    )
}

export default Resume;