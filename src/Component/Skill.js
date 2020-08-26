import React,{Component} from 'react';
class Skill extends Component {

    render() { 

        const { data , changeHandler , addAreaOfInterest } = this.props;
        

        return ( 
            <fieldset>
                        <h3> Skills</h3>
                        <fieldset>
                            <label> Area(s) of Interest : </label>
                            <input type='text' data-parent='area_of_interest' name='add' value={data.area_of_interest.add} onChange={changeHandler} /> 
                            <button  data-parent='area_of_interest' name='add' onClick={  addAreaOfInterest }> + </button>
                        </fieldset>

                        <fieldset>
                            <label> Programing Languages : </label>
                            <input type='text' data-parent='programing_language' name='add' value={data.programing_language.add} onChange={changeHandler} /> 
                            <button  data-parent='programing_language' name='add' onClick={  addAreaOfInterest }> + </button>
                        </fieldset>

                        <fieldset>
                            <label> Tools and Technology : </label>
                            <input type='text' data-parent='tools_and_techs' name='add' value={data.tools_and_techs.add} onChange={changeHandler} /> 
                            <button  data-parent='tools_and_techs' name='add' onClick={  addAreaOfInterest }> + </button>
                        </fieldset>

                        <fieldset>
                            <label> Databse : </label>
                            <input type='text' data-parent='database' name='add' value={data.database.add} onChange={changeHandler} /> 
                            <button  data-parent='database' name='add' onClick={  addAreaOfInterest }> + </button>
                        </fieldset>
                        
                        <p></p>

                    </fieldset>
         );
    }
}
 
export default Skill;