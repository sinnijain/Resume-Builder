import React,{Component} from 'react';
class Project extends Component {

    render() { 

        const { event_data , changeHandler , addToLogs } = this.props;
        

        return ( 
            <fieldset>
                <h3> Event : </h3>
                <p></p>
                <label>  Name : </label>
                <input type='text' data-parent="event_data" name ="event_name" value={event_data.event_name} onChange={changeHandler} />
                <p></p>
                <label> role : </label>
                <select data-parent="event_data" name="role" value={event_data.role}  onChange={changeHandler}>
                    <option value="organiser" > Organiser </option>
                    <option value="participant" > participant </option>
                </select>
                <p></p>
                <label>  Teg_name : </label>
                <input type='text' data-parent='event_data' name ='event_teg' value={event_data.event_teg} onChange={changeHandler} />
                <p></p>
                <button onClick={addToLogs}> Add this! </button>
                <p></p>

            </fieldset>
         );
    }
}
 
export default Project;