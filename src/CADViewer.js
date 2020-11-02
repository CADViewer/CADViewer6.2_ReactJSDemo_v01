import React, { Component }  from 'react';
import {findDOMNode } from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

import  ResizeObserver from 'rc-resize-observer';
// import { View } from 'react-native';


export const appendScript = (scriptToAppend, filetype) => {
    

	if (filetype=="js"){ //if filename is a external JavaScript file
		var fileref=document.createElement('script');
		fileref.setAttribute("type","module");
//		fileref.setAttribute("type","text/javascript");
		fileref.setAttribute("src", scriptToAppend);
		// fileref.setAttribute("ascync", true);
	}
	else if (filetype=="css"){ //if filename is an external CSS file
		var fileref=document.createElement("link");
		fileref.setAttribute("rel", "stylesheet");
		fileref.setAttribute("type", "text/css");
		fileref.setAttribute("href", scriptToAppend);
	}

//    document.body.appendChild(fileref);
    document.head.appendChild(fileref);

}


class CADViewer extends Component {

 	componentDidMount () {

        //  window.FileName = window.ServerBackEndUrl+ "/content/drawings/dwg/LUXR-42-01-PID-005_0-Model.pdf";	
		
		window.FileName = window.ServerBackEndUrl+ "/content/drawings/dwg/hq17_.dwg";	
		window.FileName = window.ServerBackEndUrl+ "/content/drawings/dwg/City_base_map.dwg";	
		
        window.init_CADViewer();

        window.addEventListener('resize', this._handleWindowResize);
        
	}

	componentWillUnmount () {
		window.removeEventListener('resize', this._handleWindowResize);
	}


	_handleWindowResize () {

        console.log("_handleResize")
            // we put the resize in a try-catch in case the init_CADViewer() has not initialized yet, and values are zero
        try{    
            window.cvjs_resizeWindow_position("floorPlan" );
         //	window.vjs_resizeWindow_fixedSize(600, 400, "floorPlan");		

        } 
        catch(err) {console.log(err);}
    }

    render(){
        return (    
              <div className="CADViewer" id="floorPlan" > </div>
        );
    }
}

export default CADViewer;




