import React, {  Component } from 'react';
import Project from './Project'
import Experience from './Experience';
import Club from './Club';
import Event from './Event'
import Info from './Info'
import Education from './Education'
import Skill from './Skill';
import Resume from './Resume';

import stylesheet from '../styles/FormField.css'





class FormField extends Component {

    
    
    constructor()
    {
        super();

        this.state = {
            data : {
                name : {fname : "" , lname: ""},
                instituteNmame : "",
                email : "",
                dob : "",
                tellNo : "",
                address : "",
                grad : {post : "ug" , era : "b.tech" , branch : "it" , instName : "" , year_start : "" , year_end : "", res : {value : "" , format : "cgpa"} },
                hSec : {schName : "" , board : "rbse" , year : "" ,  res_value : "" , res_format : "cgpa" },
                Sec : {schName : "" , board : "rbse" , year : "" ,  res_value : "" , res_format : "cgpa" },
                area_of_interest : { add : "" , whole : []  },
                programing_language : { add : "" , whole : []  },
                tools_and_techs : { add : "" , whole : []  },
                database : { add : "" , whole : [] },
                project_data : {title : "" ,  description : "" , guided_by : "" , team_size : ""  , contribution : "" , tools_used : "" , language_used : "" , link : "" },
                projectList : [],
                experience_data : { cName : "" , role : "" , work_type : "full_time" , period : "" , period_in : "year", },
                experience_list : [],
                club_data : {club_name : "" , position : "" , period : "" , club_teg : "IIITV DANCE CLUB"},
                club_list : [],
                event_data : {event_name : "" , role : "organiser" , event_teg : "Technical Event"},
                event_list : [],
                interest_and_extra_activity : {  add : "" , whole : [] }
            },

            status : {
                addProjectStatus : false,
                addExperienceStatus : false,
                addClubStatus : false,
                addEventStatus : false,
            },

            

            validSubmission : false ,

        }

        this.initialState = this.state;
    }


    

    

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)

        this.setState(
            (prevState) => {
                return {
                    ...prevState,
                    validSubmission : true,
                }
            }
        )
        
    }





    //............................................................................................................
    
    //change handlers

    //............................................................................................................
    
        changeHandler = (e) => {

            const parent = e.target.dataset.parent;
            const name = e.target.name;
            const newValue = e.target.value;

            this.setState((prevState) => {
            if (parent) {
                return {
                data: {
                    ...prevState.data,
                    [parent]: {
                        ...prevState.data[parent],
                        [name]: newValue
                    }
                }
                };
            } else {
                return {
                data: {
                    ...prevState.data,
                    [name]: newValue
                }
                };
            }
            });
        }

        addAreaOfInterest = (event) => {
            event.preventDefault();
            const parent = event.target.dataset.parent;
            const name = event.target.name;
            // console.log([name] , [parent]);

            let addStr = this.state.data[parent][name];
            this.state.data[parent][name] = ""
            // let newArray = [ ]
            this.setState((prevState) => {
                return {
                    ...prevState,
                    data: {
                        ...prevState.data,
                        [parent]: {
                            ...prevState.data[parent]
                            , whole : [ ...this.state.data[parent].whole , addStr],
                        }
                    }
                };
            });
            
        }

        addWork = (event) => {
            event.preventDefault();
            const name = event.target.name;
            console.log(this.state.status[name] , [name])
            
            this.setState(
                (prevState) => {

                    return {
                        ...prevState,

                        status : {
                            ...prevState.status,

                            [name] : true,
                        }
                    }
                }
            )
            
        }

        addToLogs_project = (event) => {
            event.preventDefault();
            this.setState(
                (prevState) => {
                    return {
                        ...prevState,
                        data : {
                            ...prevState.data,

                            projectList : [ ...this.state.data.projectList , this.state.data.project_data ],

                            project_data : this.initialState.data.project_data,
                
                        },

                        status : {
                            ...prevState.status,
                            
                            addProjectStatus : false,
                        }
                    }
                }
            )

            

            console.log('hi love');
        }

        addToLogs_experience = (event) => {
            event.preventDefault();
            this.setState(
                (prevState) => {
                    return {
                        ...prevState,
                        data : {
                            ...prevState.data,

                            experience_list : [ ...this.state.data.experience_list , this.state.data.experience_data ],

                            experience_data : this.initialState.data.experience_data,
                
                        },

                        status : {
                            ...prevState.status,
                            
                            addExperienceStatus : false,
                        }
                    }
                }
            )

            

            console.log('hi love');
        }

        addToLogs_club = (event) => {
            event.preventDefault();
            this.setState(
                (prevState) => {
                    return {
                        ...prevState,
                        data : {
                            ...prevState.data,

                            club_list : [ ...this.state.data.club_list , this.state.data.club_data ],

                            club_data : this.initialState.data.club_data,
                
                        },

                        status : {
                            ...prevState.status,
                            
                            addClubStatus : false,
                        }
                    }
                }
            )

            

            console.log('hi love');
        }

        addToLogs_event = (event) => {
            event.preventDefault();
            this.setState(
                (prevState) => {
                    return {
                        ...prevState,
                        data : {
                            ...prevState.data,

                            event_list : [ ...this.state.data.event_list , this.state.data.event_data ],

                            event_data : this.initialState.data.event_data,
                
                        },

                        status : {
                            ...prevState.status,
                            
                            addEventStatus : false,
                        }
                    }
                }
            )

            

            console.log('hi love');
        }



    //............................................................................................................
    

    
    

    render () 
    {

        const { templateStyle } = this.props;

        const {data , validSubmission , status } = this.state;

        if(validSubmission)
        {
            return <h4>You have done great</h4>
            
        }


        return ( 

            <div className="container"> 
                
    
     
                <form className="form" >

                    <h1>Resume Builder</h1>

                    <Info data={this.state.data} changeHandler={this.changeHandler}  ></Info>

                    <p></p>                    

                    <Education data={this.state.data} changeHandler={this.changeHandler}  ></Education>

                    <p></p>

                    <Skill data={this.state.data} changeHandler={this.changeHandler} addAreaOfInterest={this.addAreaOfInterest}></Skill>
                    
                    <p></p>

                    <fieldset>
                        <p></p>
                        { status.addProjectStatus === true &&
                            <Project project_data={this.state.data.project_data} changeHandler={this.changeHandler} addToLogs={this.addToLogs_project}></Project>
                           
                        }

                        <p></p>

                        <button name="addProjectStatus" onClick = {this.addWork}>
                            add project
                        </button>

                        <p></p>

                    </fieldset>

                    <fieldset>
                        <p></p> 

                        { status.addExperienceStatus === true &&
                            <Experience experience_data={this.state.data.experience_data} changeHandler={this.changeHandler} addToLogs={this.addToLogs_experience}></Experience>
                           
                        }

                        <p></p>   
                        <button name="addExperienceStatus" onClick={this.addWork}> Add Experience </button>
                        <p></p>
                    </fieldset>
                        
                    <fieldset>
                        <p></p>

                        { status.addClubStatus === true &&
                            <Club club_data={this.state.data.club_data} changeHandler={this.changeHandler} addToLogs={this.addToLogs_club}  ></Club>
                           
                        }

                        { status.addEventStatus === true &&
                            <Event event_data={this.state.data.event_data} changeHandler={this.changeHandler} addToLogs={this.addToLogs_event}  ></Event>
                           
                        }

                        <p></p>

                        <button name="addClubStatus" onClick={this.addWork}> Add Position in club/society </button>
                        <button name="addEventStatus" onClick={this.addWork}> Add paricipate in event </button>

                        <p></p>
                    </fieldset>

                    <p></p>

                    <fieldset>
                        <h3> Interest and Extra caricular activity  </h3>
                        <label> add what You lovE : </label>
                        <input type='text' data-parent='interest_and_extra_activity' name='add' value={data.interest_and_extra_activity.add} onChange={this.changeHandler} /> 
                        <button  data-parent='interest_and_extra_activity' name='add' onClick={  this.addAreaOfInterest }> + </button>
                        <p></p>
                    </fieldset>
    
                    <button  onClick={ this.handleSubmit } > Submit </button>   

                    
    
                </form>

                <div className='resume'>
                    <Resume data={data} templateStyle={templateStyle} />
                </div>
               
            </div>
         );
        
    }

    
}
 
export default FormField;