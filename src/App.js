import React, { Component }  from 'react';
import jQuery from 'jquery';
import {findDOMNode } from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

//function App() {
class App extends Component {

  constructor(props) {
    super(props);

    this.hideButton = false;

  }


  handleToggle = () => {

    const el = findDOMNode(this.refs.toggle);
    jQuery(el).slideToggle();

    if (this.hideButton){
      jQuery("#img1").show();
      jQuery("#p1").show();
    }
    else{
      jQuery("#img1").hide();
      jQuery("#p1").hide();
    }

    this.hideButton = !this.hideButton;
  }

  render(){
    return (
      <div className="App">
          <img id ="img1" src={logo} className="App-logo" alt="logo" />
          <p id="p1">
            App Class - Edit <code>src/App.js</code> and save to reload.
          </p>
          <br/>
      </div>
    );
  }
}

export default App;

/*

     <div className="App">
        <header className="App-header">
          <p id="p1">
            App Class - Edit <code>src/App.js</code> and save to reload. Hello!
          </p>
          <button onClick={this.handleToggle}>Hide Banner!</button>
        </header>
      </div>
 

*/
