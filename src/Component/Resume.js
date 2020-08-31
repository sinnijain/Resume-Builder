import React from 'react';


function Resume( {data,templateStyle} ) {

    return (

        <div >

            <div className='info-section'>
                HI {data.name.fname}  
            </div>

        </div>

        
    )
}

export default Resume;