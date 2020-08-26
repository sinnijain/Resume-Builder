import React,{Component} from 'react';
class Project extends Component {

    render() { 

        const { experience_data , changeHandler , addToLogs } = this.props;
        

        return ( 
            <fieldset>
                <h3> Experience : </h3>
                <p></p>
                <label> Company Name : </label>
                <input type='text' data-parent='experience_data' name ='cName' value={experience_data.cName} onChange={changeHandler} />
                <p></p>
                <label> Role : </label>
                <input type='text' data-parent='experience_data' name ='role' value={ experience_data.role } onChange={changeHandler} />
                <p></p>
                <label> Work Type : </label>
                <select data-parent="experience_data" name="work_type" value={experience_data.work_type}  onChange={changeHandler}>
                    <option value="full_time" > Full Time </option>
                    <option value="part_time" > Part Time </option>
                    <option value="intern" > Intern </option>
                </select>
                <label> Period : </label>
                <input type='number' data-parent="experience_data" name="period" value={experience_data.period}  onChange={changeHandler} />
                <select data-parent="experience_data" name="period_in" value={experience_data.period_in}  onChange={changeHandler}>
                    <option value="month" > month </option>
                    <option value="year" > year </option>
                </select>
                <p></p>
                <button onClick={addToLogs}> Add this! </button>
                <p></p>

            </fieldset>
         );
    }
}
 
export default Project;