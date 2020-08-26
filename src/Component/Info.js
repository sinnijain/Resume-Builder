import React,{Component} from 'react';
class Info extends Component {
    render() { 

        const { data , changeHandler } = this.props;

        return ( 
            <fieldset>

                <h3>INFO</h3>
            
                <p></p>
                <label htmlFor="name">Name : </label>
                <input type="text" data-parent="name" name="fname" id="name" value={data.name.fname} onChange={changeHandler} />
                <input type="text" data-parent="name" name="lname" id="name" value={data.name.lname} onChange={changeHandler}/>
            
            
                <p></p>
                <label htmlFor="institude">Institute Name : </label>
                <input type="text" name="instituteNmame" id="institude" value={data.instituteNmame} onChange={changeHandler}/>
            

                <p></p>
                <label htmlFor="dob">Date of birth : </label>
                <input type="date" name="dob" id="dob" value={data.dob} onChange={changeHandler}/>
                

                <p></p>
                <label htmlFor="email">Email : </label>
                <input type="email" name="email" id="email" value={data.email} onChange={changeHandler}/>
                
            
                <p></p>
                <label htmlFor="phone">Phone : </label>
                <input type="tel" name="tellNo" id="phone" value={data.tellNo} onChange={changeHandler}/>
            

                <p></p>
                <label htmlFor="addr">address (Institute) : </label>
                <input type="text" name="address" id="addr" value={data.adrress} onChange={changeHandler}/>
            
                    
                {/* have to add logo here */}
    
                    
            </fieldset>

         );
    }
}
 
export default Info;