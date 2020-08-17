import React, { useState } from 'react';
import { Redirect,  Route } from 'react-router-dom'
import Template from './Template';


function FormField() {

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmissionStatus(true);
        
    }

    const [data , setdata ] = useState( [{}] ) ;

    // let data = [{name:sawai}];

    <Route  exact path="/template" render = { () =>   <Template data={data} /> }   />

    
    
    const [validSubmission,setSubmissionStatus] = useState(false)
    
    if(validSubmission)
    {
        return <Redirect to="/template" />
    }

    return ( 
        <div className="Form"> 
            <h1>Resume Builder</h1>

 
            <form className="About_You"    >
                lol
                lol2
                lol3

                
                <button type='submit' onClick={handleSubmit} > Submit </button>         

            </form>


            
        </div>
     );
}
 
export default FormField;