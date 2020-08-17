import React, { useState } from 'react';
import Resume from './Resume';
import { Redirect, Route, Router } from 'react-router-dom';



function Template( data ) {

    let templateStyle = ""
    const clickHandler = ( t ) => {
        templateStyle = t;
        setPass(true)
    }

    const [pass,setPass] = useState(false);

    <Route path="/template/resume" render={ () =>  <Resume  data={data}  templateStyle={templateStyle}  />   } />

    
    
    if(pass)
    {
        return <Redirect to="/template/resume" />
    }

    
    

    return (
        <div>
            <div onClick={() => clickHandler('template-1') }>
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