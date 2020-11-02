//var isCADViewerInitializedInAngular = false;

function init_CADViewer(){

 // If CADViewer is on a child/nested component, it will fire off the initialization multiple times, 
 // therefore we clean the component and init array on repeat call to the component 
 //if (isCADViewerInitializedInAngular){
//  jQuery("floorPlan").empty();
//  floorplans_divs_Initialized = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
// } 


cvjs_setAngular(false);

 // PATH and FILE to be loaded, can be in formats DWG, DXF, DWF, SVG , JS, DGN, PCF, JPG, GIF, PNG
   //var FileName = ServerBackEndUrl+ "/content/drawings/dwg/hq17_.dwg";		
 

   // Location of installation folders
   // NOTE: THE LOCATION OF THE ServerLocation/ServerUrl VARIABLES ARE DEFINED IN /cadviewer/app/cv/XXXHandlerSettings.js	
   //	var ServerLocation = 
   //	var ServerUrl =    

  cvjs_CADViewerPro(true);
  cvjs_debugMode(true);
  
  // Pass over the location of the installation, will update the internal paths
  cvjs_setServerLocationURL(ServerLocation, ServerUrl);
  cvjs_PrintToPDFWindowRelativeSize(0.8);
  cvjs_setFileModalEditMode(false);

    
      // For "Merge DWG" / "Merge PDF" commands, set up the email server to send merged DWG files or merged PDF files with redlines/interactive highlight.
      // See php / xampp documentation on how to prepare your server
      cvjs_emailSettings_PDF_publish("From CAD Server", "my_from_address@mydomain.com", "my_cc_address@mydomain.com", "my_reply_to@mydomain.com");
    
      
      // CHANGE LANGUAGE - DEFAULT IS ENGLISH
//      cvjs_loadCADViewerLanguage("English", ServerUrl+"/assets/cadviewer/app/cv/cv-pro/language_table/cadviewerProLanguage.xml");


      // set to Angular mode
      cvjs_loadCADViewerLanguage("English", "/app/cv/cv-pro/language_table/cadviewerProLanguage.xml");



      // Available languages:  "English" ; "French, "Korean", "Spanish", "Portuguese", "Chinese-Simplified", "Chinese-Traditional"
          
      // Set Icon Menu Interface controls. Users can: 
      // 1: Disable all icon interfaces
      //  cvjs_displayAllInterfaceControls(false, "floorPlan");  // disable all icons for user control of interface


      // 2: Disable either top menu icon menus or navigation menu, or both

     //cvjs_displayTopMenuIconBar(false, "floorPlan");  // disable top menu icon bar
     //cvjs_displayTopNavigationBar(false, "floorPlan");  // disable top navigation bar


      // 3: Users can change the number of top menu icon pages and the content of pages, based on a configuration file in folder /cadviewer/app/js/menu_config/
    
        cvjs_setTopMenuXML("floorPlan", "cadviewer_full_commands_01.xml", "/app/cv/cv-pro/menu_config/");


         
      // Initialize CADViewer  - needs the div name on the svg element on page that contains CADViewerJS and the location of the
      // main application "app" folder. It can be either absolute or relative
    
    
      // SETTINGS OF THE COLORS OF SPACES
      cvjsRoomPolygonBaseAttributes = {
                fill: '#ffd7f4', //'#D3D3D3',   // #FFF   #ffd7f4
                "fill-opacity": 0.2,    //"0.05",   // 0.1
                stroke: '#CCC',  
                'stroke-width': 0.25,
                'stroke-linejoin': 'round',
            };
        
      cvjsRoomPolygonHighlightAttributes = {
              fill: '#a4d7f4',
              "fill-opacity": "0.5",
              stroke: '#a4d7f4',
              'stroke-width': 0.75
            };
            
      cvjsRoomPolygonSelectAttributes = {
              fill: '#5BBEF6',
              "fill-opacity": "0.5",
              stroke: '#5BBEF6',
              'stroke-width': 0.75
            };
    
    /** FIXED POP-UP MODAL  **/
    
      // THIS IS THE DESIGN OF THE pop-up MODAL WHEN CLICKING ON SPACES
    
      var my_cvjsPopUpBody = "<div class=\'cvjs_modal_1\' onclick=\'my_own_clickmenu1();\'>Custom<br>Menu 1<br><i class=\'fa fa-undo\'></i></div>";
      my_cvjsPopUpBody += "<div class=\'cvjs_modal_1\' onclick=\'my_own_clickmenu2();\'>Custom<br>Menu 2<br><i class=\'fa fa-info-circle\'></i></div>";
      my_cvjsPopUpBody += "<div class=\'cvjs_modal_1\' onclick=\'custom_zoomHere();\'>Zoom<br>Here<br><i class=\'fa fa-search-plus\'></i></div>";



      // Initialize CADViewer - needs the div name on the svg element on page that contains CADViewerJS and the location of the
      // And we intialize with the Space Object Custom values
    //  cvjs_InitCADViewer_highLight_popUp_app("floorPlan", ServerUrl+"app/", cvjsRoomPolygonBaseAttributes, cvjsRoomPolygonHighlightAttributes, cvjsRoomPolygonSelectAttributes, my_cvjsPopUpBody);
      cvjs_InitCADViewer_highLight_popUp_app("floorPlan", ServerUrl+ "/cadviewer/app/", cvjsRoomPolygonBaseAttributes, cvjsRoomPolygonHighlightAttributes, cvjsRoomPolygonSelectAttributes, my_cvjsPopUpBody );
                  
         
      // For AngularJS we need a different setting of images, loading from /assets folder	
      //cvjs_InitCADViewer_app("floorPlan", ServerUrl+"app/", "assets/cadviewer/app/images/");
      //cvjs_InitCADViewer_app("floorPlan", "assets/cadviewer/app/");
      

      // set the location to license key, typically the js folder in main app application folder ../app/cv/
       cvjs_setLicenseKeyPath(ServerUrl + "/cadviewer/app/cv/");
      // alternatively, set the key directly, by pasting in the cvKey portion of the cvlicense.js file, note the JSON \" around all entities 	 
      //cvjs_setLicenseKeyDirect('{ \"cvKey\": \"00110010 00110010 00110000 00110010 00110001 00111001 00111001 00110001 00110100 00111000 00110001 00110100 00110101 00110001 00110101 00110111 00110001 00110101 00111001 00110001 00110100 00111000 00110001 00110101 00110010 00110001 00110100 00110101 00110001 00110100 00110001 00110001 00110100 00110000 00110001 00111001 00110111 00110010 00110000 00110111 00110010 00110000 00110110 00110010 00110000 00110001 00110010 00110001 00110000 00110010 00110000 00111000 00110010 00110001 00110000 00110010 00110000 00111000 00110010 00110001 00110000 00110010 00110000 00110111 00110001 00111001 00111000 00110010 00110000 00110110 00110010 00110000 00111000 00110010 00110000 00110111 00110001 00111001 00111001 00110010 00110001 00110001 00110010 00110000 00111000 00110010 00110000 00110111 00110010 00110001 00110001 00110010 00110000 00110101 00110010 00110000 00111000 \" }');		 
       
          
      // Sets the icon interface for viewing, layerhanding, measurement, etc. only
      //cvjs_setIconInterfaceControls_ViewingOnly();
    
      // disable canvas interface.  For developers building their own interface
      // cvjs_setIconInterfaceControls_DisableIcons(true);
    
      // Set the icon interface to include image handling
      // cvjs_setIconInterfaceControls_ImageInsert();
    
      cvjs_allowFileLoadToServer(true);
    
    //		cvjs_setUrl_singleDoubleClick(1);
    //		cvjs_encapsulateUrl_callback(true);
     
      // NOTE BELOW: THESE SETTINGS ARE FOR SERVER CONTROLS FOR UPLOAD OF REDLINES
      
      cvjs_setRedlinesAbsolutePath(ServerUrl+'/content/redlines/fileloader_610/', ServerLocation+'/content/redlines/fileloader_610/');
    
      // NOTE ABOVE: THESE SETTINGS ARE FOR SERVER CONTROLS FOR UPLOAD OF REDLINES
    
      // NOTE BELOW: THESE SETTINGS ARE FOR SERVER CONTROLS FOR UPLOAD OF FILES AND FILE MANAGER
    
      // I am setting the full path to the location of the floorplan drawings (typically  /home/myserver/drawings/floorplans/)
      // and the relative location of floorplans drawings relative to my current location
      // as well as the URL to the location of floorplan drawings with username and password if it is protected "" "" if not
    
      // cvjs_setServerFileLocation(ServerLocation+'/content/drawings/dwg/', '../content/drawings/dwg/', ServerUrl+'/content/drawings/dwg/',"","");
      cvjs_setServerFileLocation_AbsolutePaths(ServerLocation+'/content/drawings/dwg/', ServerUrl+'content/drawings/dwg/',"","");
      // NOTE ABOVE: THESE SETTINGS ARE FOR SERVER CONTROLS FOR UPLOAD OF FILES AND FILE MANAGER
      
   
      // NOTE BELOW: THESE SETTINGS ARE FOR SERVER CONTROLS OF SPACE OBJECTS
      // Set the path to folder location of Space Objects
      cvjs_setSpaceObjectsAbsolutePath(ServerUrl+'/content/spaceObjects/demoUsers/', ServerLocation+'/content/spaceObjects/demoUsers/');
      // NOTE ABOVE: THESE SETTINGS ARE FOR SERVER CONTROLS OF SPACE OBJECTS
    
      // NOTE BELOW: THESE SETTINGS ARE FOR SERVER CONTROLS FOR CONVERTING DWG, DXF, DWF files
    
      // settings of Converter Path, Controller and Converter Name are done in the XXXHandlerSettings.js files
    
      cvjs_conversion_clearAXconversionParameters();
//      cvjs_conversion_addAXconversionParameter("RL", "RM_");		 
//      cvjs_conversion_addAXconversionParameter("TL", "RM_TXT");		 
//      cvjs_conversion_addAXconversionParameter("RL", "EC1 Space Polygons");		 
//      cvjs_conversion_addAXconversionParameter("TL", "EC1 Space Numbers");		 


      cvjs_conversion_addAXconversionParameter("last", "");		 
      cvjs_conversion_addAXconversionParameter("fpath", ServerLocation + "/converters/ax2020/windows/fonts/");		 
    
    
      
      // NOTE ABOVE: THESE SETTINGS ARE FOR SERVER CONTROLS FOR CONVERTING DWG, DXF, DWF files
    
      // Load file - needs the svg div name and name and path of file to load
      cvjs_LoadDrawing("floorPlan", FileName );
     
      // set maximum CADViewer canvas side
        cvjs_resizeWindow_position("floorPlan" );

      // alternatively set a fixed CADViewer canvas size
      //	cvjs_resizeWindow_fixedSize(600, 400, "floorPlan");		

      // isCADViewerInitializedInAngular = true;
}




function cvjs_OnLoadEnd(){
  // generic callback method, called when the drawing is loaded
  // here you fill in your stuff, call DB, set up arrays, etc..
  // this method MUST be retained as a dummy method! - if not implemeted -
  cvjs_resetZoomPan("floorPlan");

  var user_name = "Bob Smith";
  var user_id = "user_1";

  // set a value for redlines
  cvjs_setCurrentStickyNoteValues_NameUserId(user_name, user_id );
  cvjs_setCurrentRedlineValues_NameUserid(user_name, user_id);
  
  //cvjs_dragBackgroundToFront_SVG("floorPlan");					
  //cvjs_initZeroWidthHandling("floorPlan", 3.0);			
  //cvjs_colorAllLayersInDrawing("floorPlan", "#000000");
  //cvjs_supressPopUpModalMode(true);
  //roomLayer1 = cvjs_clearLayer(roomLayer1);
  cvjs_setSpaceObjectsDefaultLayer("floorPlan", "spaceLayer1");

  //roomLayer1 = cvjs_clearLayer(roomLayer1);


    cvjs_LayerOff("EC1 Space Names");
    cvjs_LayerOff("EC1 Space Status Descs");
    cvjs_LayerOff("EC1 Space Project");
    cvjs_LayerOff("EC1 Space Function Descs");
    cvjs_LayerOff("EC1 Space Type Descs");
    cvjs_LayerOff("EC1 Tenant Names");
    cvjs_LayerOff("EC1 UDA Design Capacity");
    cvjs_LayerOff("EC1 UDA Is Secured");
 
//		cvjs_clearSpaceLayer();
//		cvjs_multiSelectStart();
 

/** MultiSelect
 

    cvjs_multiSelectStart();
    console.log("multi select start");
    cvjs_clearSpaceLayer();
    console.log("clear space layer start");

    try {
      // set the hightlight color of objects from the database
      for (var j = 0; j < mySpaceArray.length; j++) {
        cvjs_highlightSpace(mySpaceArray[j].space, highlight_red_borders);
      }
    }
    catch (err2) { console.log("OnLoad End  - space Array highlight: " + err2) }


 */

 
}


function cvjs_OnLoadEndRedlines(){
  // generic callback method, called when the redline is loaded
  // here you fill in your stuff, hide specific users and lock specific users
  // this method MUST be retained as a dummy method! - if not implemeted -

  // I am hiding users added to the hide user list
  cvjs_hideAllRedlines_HiddenUsersList();

  // I am freezing users added to the lock user list
  cvjs_lockAllRedlines_LockedUsersList();
}


// generic callback method, tells which FM object has been clicked
function cvjs_change_space(){

}

function cvjs_graphicalObjectCreated(graphicalObject){

// do something with the graphics object created!
//		window.alert(graphicalObject);

}


/// NOTE: THESE METHODS ABOVE ARE JS SCRIPT CALLBACK METHODS FROM CADVIEWER JS, THEY NEED TO BE IMPLEMENTED BUT CAN BE EMPTY


/// NOTE: BELOW REDLINE SAVE LOAD CONTROLLERS

// This method is linked to the save redline icon in the imagemap
function cvjs_saveStickyNotesRedlinesUser(){

// there are two modes, user handling of redlines
// alternatively use the build in redline file manager

cvjs_openRedlineSaveModal("floorPlan");

// custom method startMethodRed to set the name and location of redline to save
// see implementation below
//startMethodRed();
// API call to save stickynotes and redlines
//cvjs_saveStickyNotesRedlines("floorPlan");
}


// This method is linked to the load redline icon in the imagemap
function cvjs_loadStickyNotesRedlinesUser(){


cvjs_openRedlineLoadModal("floorPlan");

// first the drawing needs to be cleared of stickynotes and redlines
//cvjs_deleteAllStickyNotes();
//cvjs_deleteAllRedlines();

// custom method startMethodRed to set the name and location of redline to load
// see implementation below
// startMethodRed();

// API call to load stickynotes and redlines
//cvjs_loadStickyNotesRedlines("floorPlan");
}

/// NOTE: ABOVE REDLINE SAVE LOAD CONTROLLERS



// Here we are writing a basic function that will be used in the PopUpMenu
// this is template on all the good stuff users can add
function my_own_clickmenu1(){
var id = cvjs_idObjectClicked();
//		var node = cvjs_NodeObjectClicked();
window.alert("Custom menu item 1: Here developers can implement their own methods, the look and feel of the menu is controlled in the settings.  Clicked object ID is: "+id);
}

// Here we are writing a basic function that will be used in the PopUpMenu
// this is template on all the good stuff users can add
function my_own_clickmenu2(){
var id = cvjs_idObjectClicked();
//var node = cvjs_NodeObjectClicked();

window.alert("Custom menu item 2: Here developers can implement their own methods, the look and feel of the menu is controlled in the settings. Clicked object ID is: "+id);
//window.alert("Custom menu item 2: Clicked object Node is: "+node);
}



var hatchtype = 0;

// This is the function that illustrates how to color and label stuff
function highlight_objects(){

hatchtype++;
if (hatchtype > 5) hatchtype=1;

var spaceObjectIds = cvjs_getSpaceObjectIdList();

for (spc in spaceObjectIds)
{
if (hatchtype == 1) cvjs_highlightSpace(spaceObjectIds[spc], highlight_purple);
if (hatchtype == 2) cvjs_highlightSpace(spaceObjectIds[spc], highlight_blue); 
if (hatchtype == 3) cvjs_highlightSpace(spaceObjectIds[spc], highlight_red); 
if (hatchtype == 4) cvjs_highlightSpace(spaceObjectIds[spc], highlight_green); 
if (hatchtype == 5) cvjs_highlightSpace(spaceObjectIds[spc], highlight_yellow); 	
}

}

// This is the function that illustrates how to color and label stuff
function highlight_border_objects(){

hatchtype++;
if (hatchtype > 6) hatchtype=1;

var spaceObjectIds = cvjs_getSpaceObjectIdList();

for (spc in spaceObjectIds)
{
if (hatchtype == 1) cvjs_highlightSpace(spaceObjectIds[spc], highlight_purple_borders);
if (hatchtype == 2) cvjs_highlightSpace(spaceObjectIds[spc], highlight_blue_borders); 
if (hatchtype == 3) cvjs_highlightSpace(spaceObjectIds[spc], highlight_red_borders); 
if (hatchtype == 4) cvjs_highlightSpace(spaceObjectIds[spc], highlight_green_borders); 
if (hatchtype == 5) cvjs_highlightSpace(spaceObjectIds[spc], highlight_yellow_borders); 	
if (hatchtype == 6) cvjs_highlightSpace(spaceObjectIds[spc], highlight_bordeau_red_borders); 	
}

}


function hatch_objects(){

// I am making an API call to the function cvjs_getSpaceObjectIdList()
// this will give me an array with IDs of all Spaces in the drawing
var spaceObjectIds = cvjs_getSpaceObjectIdList();

hatchtype++;
if (hatchtype >4) hatchtype=1;

for (spc in spaceObjectIds)
{
if (hatchtype == 1) cvjs_hatchSpace(spaceObjectIds[spc], "pattern_45degree_crosshatch_fine", "#550055" , "0.5");
if (hatchtype == 2) cvjs_hatchSpace(spaceObjectIds[spc], "pattern_45degree_standard", "#AA2200" , "0.5");
if (hatchtype == 3) cvjs_hatchSpace(spaceObjectIds[spc],  "pattern_135degree_wide", "#0055BB" , "0.5");
if (hatchtype == 4) cvjs_hatchSpace(spaceObjectIds[spc],  "pattern_90degree_wide", "#220088" , "0.5");


}
}

// This is the function that illustrates how set a custom mouse-over label
function tooltip_objects(){

// I am setting the mode to custom tool tips
cvjs_setCustomToolTip(true);

// I am making an API call to the function cvjs_getSpaceObjectIdList()
// this will give me an array with IDs of all Spaces in the drawing
var spaceObjectIds = cvjs_getSpaceObjectIdList();
var i=0;

for (spc in spaceObjectIds)
{

// We randomly set the status

var myObject = cvjs_returnSpaceObjectID(spaceObjectIds[spc]);

if ((i % 3) ==0){
  var textString = new Array("ID: "+spaceObjectIds[spc]+" Type:"+myObject.type, "Linked:"+myObject.linked);
  cvjs_setCustomToolTipValue(spaceObjectIds[spc], textString);
}
else{
  if ((i % 3) == 1){
    var textString = new Array('Hi!', 'second line custom tooltip');
    cvjs_setCustomToolTipValue(spaceObjectIds[spc], textString);
  }
  else{
    var textString = new Array("line 1 line 1 line 1 line 1  ", "line 2 line 2 line 2 line 2", "line 3 line 3 line 3 line 3","line4 line4 line 4 line 4");
    cvjs_setCustomToolTipValue(spaceObjectIds[spc], textString);
  }
}
i++;
}
}


function highlight_space_object(myspace, scale){

  cvjs_zoomHere_ObjectIdDiv( myspace, scale, "floorPlan");

  cvjs_highlightSpace(myspace, highlight_green);

}


/*   Multiple Select Methods   */

var mySpaceArray = [];      // custom/user array to keep selected or highlight objects, note this is an array of Objects
var mySpaceArray_doNotTouch = ["120","122"];   // custom array to control spaces that shall not be selectable
var myReturnArray = [];


function return_MySpaceArray() {
  return mySpaceArray;
}


function cvjs_multiSelectInitArray(spaceArray){
    mySpaceArray = spaceArray;
}



function cvjs_multiSelectStart() {
  myReturnArray = []
  // mySpaceArray = []  
  // mySpaceCounter = 0  
  hideOnlyPop();
  cvjs_clearDrawing();
  multiSelect = true;
  cvjs_supressPopUpModalMode(true);
  cvjs_supressSingleSpaceHighlight(true);
  //cvjs_initMultiSelect();
  cvjs_multiSelect = true;
  
  console.log('cvjs_multiSelectStart - mySpaceArrayGG4', mySpaceArray)
}



function cvjs_multiSelectFinish(){
  hideOnlyPop();
  cvjs_clearDrawing();
  cvjs_supressPopUpModalMode(false);
  cvjs_supressSingleSpaceHighlight(false);
  var string = "MultiSelect  - Spaces selected: ";
  for (j=0; j<mySpaceArray.length; j++ ){
  //        string = string + " mySpaceArray["+j+"]="+mySpaceArray[j];
    string = string + " "+mySpaceArray[j];
  }	


  /*
  // NOTE - This is my Custom exit condition for Multiselect 
  for (j=0; j<mySpaceArray.length; j++ ){
    cvjs_highlightSpace(mySpaceArray[j], highlight_green_borders);
    cvjs_setCustomToolTip(true);
    // we make a new tooltip for the object
    var textString = new Array("ID: "+mySpaceArray[j], "MULTISELECTED!");
    console.log("calling cvjs_setCustomToolTipValue "+mySpaceArray[j]);
    cvjs_setCustomToolTipValue(mySpaceArray[j], textString);
  }	
*/

  cvjs_exitMultiSelect();

  // NOTE - This is my Custom exit condition for Multiselect  back to Angular
  for (j=0; j<mySpaceArray.length; j++ ){
    string = string + " "+mySpaceArray[j].space;

    myReturnArray.push({id: j, SpaceID: mySpaceArray[j].space} );
  }

  return myReturnArray;

}


var multipleSelectColor = {
fill: '#fa8072',
"fill-opacity": 0.9,
stroke: '#fa8072',
'stroke-width': 2.0,
'stroke-opacity': 1,
'stroke-linejoin': 'round'
};





function cvjs_ObjectSelected(rmid, floorplan_div){

  // window.alert("cvjs_ObjectSelected: "+rmid);

  if (!cvjs_multiSelect){  // capture what has been clicked and return....
    var e = window.event;
    var posX = e.clientX;
    var posY = e.clientY;
    myBoundingBox = cvjs_ObjectBoundingBox_ScreenCoord(rmid);
    // THE CLICKED CALLBACK METHOD WILL ALSO ECHO CONTENT OR TRIGGER ACTION
    //window.alert("object selected "+rmid+" BBox: "+myBoundingBox.x+" "+myBoundingBox.y+" "+myBoundingBox.x2+" "+myBoundingBox.y2+" mouse x,y "+posX+"  "+posY);
    return;								
  } 


  // check if the object is cannot be clicked
  for (var i = 0; i < mySpaceArray_doNotTouch.length; i++){
    if ( mySpaceArray_doNotTouch[i] == rmid ){
      // custom response

      window.alert("The user defined array mySpaceArray_doNotTouch, tells not to select!");

      // if object is in the do not touch object, then return
      return;								
    }
  }


	// here we handle multi-select
	// if room already selected, remove from selection list and let us find the original object style
	var attrObject;	
	var selected = cvjs_returnIsSpaceMultipleSelected(rmid, mySpaceArray);

   console.log("selected : "+selected+"  rmid: "+rmid+" Array, length "+mySpaceArray.length);
  
	if (selected){
		attrObject = cvjs_returnOriginalStyleAndRemoveSelected(rmid, mySpaceArray);
		console.log("selected branch 1: "+rmid+" attrObject  "+attrObject );
	}

	if (!selected){ // if not selected, add to list
		console.log("Add to list array length: "+mySpaceArray.length+" rmid "+rmid);	
//		mySpaceArray[mySpaceCounter] = { "space" : rmid, "attrObj": cvjs_returnSelectedOriginalStyles(rmid) };	   
		mySpaceArray.push({ "space" : rmid, "attrObj": cvjs_returnSelectedOriginalStyles(rmid) });	   
//		mySpaceCounter++;			  
		cvjs_highlightSpace(rmid, highlight_green_borders);
	}
	else{ // it is already selected, thereby we display the original color stored in: attrObject   
		// NOTE IMPORTANT TO RESTORE
		cvjs_highlightSpace(rmid, attrObject);
	}
}



var  highlight_red = {
  fill: '#fa8072',
  "fill-opacity": 0.8,
  stroke: '#8B0000',   // #8B0000   #fa8072    // red
  'stroke-width': 2.0, // 
  'stroke-opacity': 1,
  'stroke-linejoin': 'round'
};


var  highlight_green = {
  fill: '#32CD32',     // 0dff8a
  "fill-opacity": 0.8,
  stroke: '#228B22',       // 0dff8a green
  'stroke-width': 2.0,
  'stroke-opacity': 1,
  'stroke-linejoin': 'round'
};


var  highlight_blue = {
  fill: '#0c8dff',
  'fill-opacity': 0.8,
  stroke: '#003366',           // midnight blue 003366 ,    #0c8dff
  'stroke-width': 2.0,
  'stroke-opacity': 1.0,
  'stroke-linejoin': 'round'
};


var  highlight_yellow = {
  fill: '#fafa00',            //  #FFFCBB yellow
  "fill-opacity": 0.8,
  stroke: '#FFD300',    //  orange
  'stroke-width': 2.0,
  'stroke-opacity': 1,
  'stroke-linejoin': 'round'
};


var  highlight_purple = {
  fill: '#ff00dd',     
  "fill-opacity": 0.8,
  stroke: '#800080', //  purple          #ff00dd
  'stroke-width': 2.0,
  'stroke-opacity': 1,
  'stroke-linejoin': 'round'
};


var  highlight_bordeau_red_borders = {
  fill: '#fff',
  "fill-opacity": 0.01,
  stroke: '#8B0000',   // #8B0000   #fa8072    // red
  'stroke-width': 3.0, // 
  'stroke-opacity': 1,
  'stroke-linejoin': 'round'
};


var  highlight_red_borders = {
  fill: '#fff',
  "fill-opacity": 0.01,
  stroke: '#FF0000',   // #8B0000   #fa8072    // red
  'stroke-width': 3.0, // 
  'stroke-opacity': 1,
  'stroke-linejoin': 'round'
};



var  highlight_green_borders = {
  fill: '#fff',
  "fill-opacity": 0.01,
  stroke: '#228B22',       // 0dff8a green
  'stroke-width': 3.0,
  'stroke-opacity': 1,
  'stroke-linejoin': 'round'
};

var  highlight_blue_borders = {
  fill: '#fff',
  "fill-opacity": 0.01,
  stroke: '#003366',           // midnight blue 003366 ,    #0c8dff
  'stroke-width': 6.0,
  'stroke-opacity': 1.0,
  'stroke-linejoin': 'round'
};

var  highlight_yellow_borders = {
  fill: '#fff',
  "fill-opacity": 0.01,
  stroke: '#FFD300',    //  orange
  'stroke-width': 6.0,
  'stroke-opacity': 1.0,
  'stroke-linejoin': 'round'
};

var  highlight_purple_borders = {
  fill: '#fff',
  "fill-opacity": 0.01,
  stroke: '#800080', //  purple          #ff00dd
  'stroke-width': 6.0,
  'stroke-opacity': 1.0,
  'opacity': 1.0,
  'stroke-linejoin': 'round'
};



