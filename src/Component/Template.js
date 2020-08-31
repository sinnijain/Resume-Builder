import React, { useState , useEffect} from 'react';
import '../styles/template.css'
import FormField from './FormField';


function Template( {data} ) {

    const [templateStyle , setStyle] = useState("")

    const [pass,setPass] = useState(false);

    const clickHandler = ( t ) => {
        setStyle(t);
        setPass(true);
    }


    useEffect(() => {
        var head = document.head;
        var link = document.createElement("link");
    
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = process.env.PUBLIC_URL + "./styles/templates/" + templateStyle;
    
        head.appendChild(link);
    
        return () => { head.removeChild(link); }
    
    }, [templateStyle]);

    

    

    
    if(pass)
    {
        return <FormField templateStyle={templateStyle}/>
    }

    
    

    return (
        <div>
            <div className ="me" onClick={() => clickHandler('template-1.css') }>
                Template 1
            </div>

            <div onClick={() => clickHandler('template-2.css') }>
                Template 2
            </div>

            <div onClick={ () => clickHandler('template-3.css') }>
                Template 3
            </div>
        </div>
    )
}

export default Template;