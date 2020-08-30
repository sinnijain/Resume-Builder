import React from 'react';
import stylesheet from '../styles/templates/template-1.css'


function Resume( {data,templateStyle} ) {

    return (

        <div className={templateStyle}>

            <div className='info-section'>
                HI {data.name.fname}  
            </div>

        </div>

        
    )
}

export default Resume;