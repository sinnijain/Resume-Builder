import React,{Component} from 'react';
class Education extends Component {
    render() { 


        const { data , changeHandler } = this.props;

        return ( 
            <fieldset>

                <h3>Education</h3>

                <fieldset>
                    
                    <h4> Graduation </h4>
                    <label> Graduation : </label>
                    <select value={data.grad.post} data-parent="grad" name="post" onChange={changeHandler} >
                        <option value="ug" > under graduate </option>
                        <option value="pg" > post graduate </option>
                    </select>
                    <p></p>
                    <label> Era : </label>
                    {
                        data.grad.post==="ug" && 

                        <select value={data.grad.era} data-parent="grad" name="era" onChange={changeHandler}>
                            <option value="b.tech" > B.Tech </option>
                            <option value="ba" > BA </option>
                        </select>
                    }
                    {
                        data.grad.post==="pg" && 

                        <select value={data.grad.era} data-parent="grad" name="era" onChange={changeHandler}>
                            <option value="m.tech" > M.Tech </option>
                            <option value="ma" > MA </option>
                        </select>
                    }

                    <label> Branch : </label>
                    {
                         data.grad.post==="ug" && data.grad.era==="b.tech"  &&

                        <select value={data.grad.branch} data-parent="grad" name="branch" onChange={changeHandler}>
                            <option value="cse" > Computer Science </option>
                            <option value="it" > Information Technology </option>
                        </select>
                    }
                    <p></p>

                    <label htmlFor="grad_instName"> Institute Name : </label>
                    <input type ='text' data-parent="grad" name="instName" id="grad_instName" value = {data.grad.instName} onChange={changeHandler}></input>
                    <p></p>

                    <label> Education Period </label> 
                    <label htmlFor='grad_year_start' > From :  </label>
                    <input type ='text' data-parent="grad" name="year_start" id="grad_year_start" value = {data.grad.year_start} onChange={changeHandler} />
                    <label htmlFor='grad_year_end' > to : </label>
                    <input type ='text' data-parent="grad" name="year_end" id="grad_year_end" value = {data.grad.year_end}  onChange={changeHandler}/>

                    <p></p>
                    <label htmlFor="grad_res"> CPI/Aggregate : </label>
                    <input type='number' data-parent="grad" name="res_value" id="grad_res" value = {data.grad.res_value}  onChange={changeHandler}/> 
                    <select data-parent="grad" name="res_format" value={data.grad.res_format} onChange={changeHandler}>
                        <option value="cgpa" > cgpa </option>
                        <option value="%" > % </option>
                    </select>
                    
                
                </fieldset>
                
                <fieldset>
                    <h4> Higher Secondary </h4>

                    <label htmlFor="hSec_schName"> School Name : </label>
                    <input type ='text' data-parent="hSec" name="schName" id="hSec_schName" value = {data.hSec.schName} onChange={changeHandler}></input>
                    <p></p>

                    <label> Board : </label>
                    <select value={data.hSec.board} data-parent="hSec" name="board" onChange={changeHandler} >
                        <option value="rbse" > rbse </option>
                        <option value="cbse" > cbse </option>
                        <option value="icse" > icse </option>
                    </select>
                    <p></p>

                    <label> Education Period </label> 
                    <label htmlFor='hSec_year' > Year :  </label>
                    <input type ='text' data-parent="hSec" name="year" id='hSec_year' value = {data.hSec.year} onChange={changeHandler} />
                    
                    <p></p>
                    <label htmlFor="hSec_res_value"> CPI/Aggregate : </label>
                    <input type='number' data-parent="hSec" name="res_value" id="hSec_res_value" value = {data.hSec.res_value}  onChange={changeHandler}/> 
                    <select data-parent="hSec" name="res_format" value={data.hSec.res_format} onChange={changeHandler}>
                        <option value="cgpa" > cgpa </option>
                        <option value="%" > % </option>
                    </select>
                

                </fieldset>

                <fieldset>
                    <h4> Secondary </h4>

                    <label htmlFor="Sec_schName"> School Name : </label>
                    <input type ='text' data-parent="Sec" name="schName" id="Sec_schName" value = {data.Sec.schName} onChange={changeHandler}></input>
                    <p></p>

                    <label> Board : </label>
                    <select value={data.hSec.board} data-parent="Sec" name="board" onChange={changeHandler} >
                        <option value="rbse" > rbse </option>
                        <option value="cbse" > cbse </option>
                        <option value="icse" > icse </option>
                    </select>
                    <p></p>

                    <label> Education Period </label> 
                    <label htmlFor='Sec_year' > Year :  </label>
                    <input type ='text' data-parent="Sec" name="year" id='Sec_year' value = {data.Sec.year} onChange={changeHandler} />
                    
                    <p></p>
                    <label htmlFor="Sec_res_value"> CPI/Aggregate : </label>
                    <input type='number' data-parent="Sec" name="res_value" id="Sec_res_value" value = {data.Sec.res_value}  onChange={changeHandler}/> 
                    <select data-parent="Sec" name="res_format" value={data.Sec.res_format} onChange={changeHandler}>
                        <option value="cgpa" > cgpa </option>
                        <option value="%" > % </option>
                    </select>
                

                </fieldset> 
                <p></p>     
            </fieldset>

         );
    }
}
 
export default Education;