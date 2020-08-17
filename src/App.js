import React, { Component } from 'react';
import './App.css';
import FormField from './Component/FormField';
import { Switch, Route } from 'react-router-dom';



class App extends Component {


  render() {

    return (  
      
        <div>

          

          <Switch>

            <Route exact path="/" component={FormField} />

          </Switch>

          
        </div>
          
      
    )
    
  }
}

export default App;
