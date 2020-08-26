import React, { useState } from 'react';
import Resume from './Resume';


function Template( {data} ) {

    

    const [templateStyle , setStyle] = useState("")

    const clickHandler = ( t ) => {
        setStyle(t);
        setPass(true);
    }

    const [pass,setPass] = useState(false);
    

    
    if(pass)
    {
        return <Resume data={data} templateStyle={templateStyle}/>
    }

    
    

    return (
        <div>
            <div className ="me" onClick={() => clickHandler('template-1') }>
                Template 1
            </div>

            <div onClick={() => clickHandler('template-2') }>
                Template 2
            </div>

            <div onClick={ () => clickHandler('template-3') }>
                Template 3
            </div>
        </div>
    )
}

export default Template;