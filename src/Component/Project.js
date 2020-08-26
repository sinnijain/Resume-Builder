import React,{Component} from 'react';
class Project extends Component {

    render() { 

        const { project_data , changeHandler , addToLogs } = this.props;
        

        return ( 
            <fieldset>
                <h3> Project : </h3>
                <p></p>
                <label> Title : </label>
                <input type='text' data-parent='project_data' name ='title' value={ project_data.title } onChange={changeHandler} />
                <p></p>
                <label> description : </label>
                <input type='text' data-parent='project_data' name ='description' value={ project_data.description } onChange={changeHandler} />
                <p></p>
                <label> Guided By : </label>
                <input type='text' data-parent='project_data' name ='guided_by'  value={ project_data.guided_by } onChange={changeHandler} />
                <p></p>
                <label> Team Size : </label>
                <input type='number' data-parent='project_data' name ='team_size' value={ project_data.team_size } onChange={changeHandler} />
                <p></p>
                <label> contribution : </label>
                <input type='text' data-parent='project_data' name ='contribution' value={ project_data.contribution } onChange={changeHandler} />
                <p></p>
                <label> Tools : </label>
                <input type='text' data-parent='project_data' name ='tools_used' value={ project_data.tools_used } onChange={changeHandler} />
                <p></p>
                <label> Programing Languages : </label>
                <input type='text' data-parent='project_data' name ='language_used' value={ project_data.language_used } onChange={changeHandler} />
                <p></p>
                <label> Project Link : </label>
                <input type='text' data-parent='project_data' name ='link' value={ project_data.link } onChange={changeHandler} />
                <p></p>
                <button onClick={addToLogs}> Add this! </button>
                <p></p>
                
            </fieldset>
         );
    }
}
 
export default Project;