import React,{Component} from 'react';
class Project extends Component {

    render() { 

        const { club_data , changeHandler , addToLogs } = this.props;
        

        return ( 
            <fieldset>
                <h3> Society / Club : </h3>
                <p></p>
                <label>  Name : </label>
                <input type='text' data-parent='club_data' name ='club_name' value={club_data.club_name} onChange={changeHandler} />
                <p></p>
                <label> Position : </label>
                <input type='text' data-parent='club_data' name ='position' value={ club_data.position } onChange={changeHandler} />
                <p></p>
                <label> Period : </label>
                <input type='number' data-parent="club_data" name="period" value={club_data.period}  onChange={changeHandler} />
                <select data-parent="experience_data" name="period_in" value={club_data.period_in}  onChange={changeHandler}>
                    <option value="month" > month </option>
                    <option value="year" > year </option>
                </select>
                <p></p>
                <label>  Teg_name : </label>
                <input type='text' data-parent='club_data' name ='club_teg' value={club_data.club_teg} onChange={changeHandler} />
                <p></p>
                <button onClick={addToLogs}> Add this! </button>
                <p></p>

            </fieldset>
         );
    }
}
 
export default Project;