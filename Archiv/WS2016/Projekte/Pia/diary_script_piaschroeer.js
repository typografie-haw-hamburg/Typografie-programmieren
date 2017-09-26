// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

	b.clear(b.doc());
	b.units(b.MM);
	
	//THE DATA USED HERE IS EXAMPLE MATERIAL.
	//If you want to create your own diary, download the app: "reporter" and get started! Then save your data as CSV file.
	  
	//load CSV data from "data" file.
	var diaryString = b.loadString("example_content_from_reporter_app.csv");
	
	//decode string to array
	var data = b.CSV.decode(diaryString);
	
	//amount of rows
	var rows = data.length;
	
	//creates array with for example 5 panels, = amount of days
	var days = new Array(5);
	
	//for each panel (=day), 9 properties are added
	for (var j = 0; j < days.length; ++j) {
		days[j] = new Array(9);
		days[j]["amount"] = 0;
		days[j]["thoughts"] = "";
		days[j]["reporttime"] = "";
		days[j]["place"] = "";
		days[j]["pictures"] = 0;
		days[j]["sleep"] = "";
		days[j]["steps"] = 0;
		days[j]["weather"] = "";
		days[j]["noise"] = "";
	}
	
	//add the content from the CSV data to our array
	for (var i = 0; i < data.length; ++i) {
		days[parseInt(data[i].timestamp.substring(8,10))-1]["amount"]++;
		days[parseInt(data[i].timestamp.substring(8,10))-1]["thoughts"] += data[i].reporttime.substring(17,27) + " " + data[i].place + " " + data[i].thoughts + " ";
		days[parseInt(data[i].timestamp.substring(8,10))-1]["pictures"] += parseInt(data[i].pictures);
		days[parseInt(data[i].timestamp.substring(8,10))-1]["sleep"] += data[i].sleep;
		days[parseInt(data[i].timestamp.substring(8,10))-1]["steps"] += parseInt(data[i].steps);
		days[parseInt(data[i].timestamp.substring(8,10))-1]["weather"] += data[i].weather + " ";
		days[parseInt(data[i].timestamp.substring(8,10))-1]["noise"] += data[i].noise + " ";
	}
	
	
	//Overall Typography
	b.colorMode(b.CMYK);
	var myColor = b.color(100, 100, 100, 100, "blackmagic");
	var myOtherColor = b.color(0, 0, 0, 0, "whitemagic");
	
	b.fill(myColor);
	b.textFont("Arial", "Regular");
	b.textSize(40);
	
	
	
	//amount of days I want to create in my booklet
	var date = 5;  
	
	 
	//array for date objects
	var dateObjectsArray = new Array(date); 
	
	//create object and push it to array
	//loop through days and give them random positions (this is for the cover)
	for (var i = 0; i < date; i++) {
		var dateObject = {};
		dateObject.text = i+1 + ".12." ;
		dateObject.posX = b.random(40, b.width-40);
		dateObject.posY = b.random(40, b.height-40);
		dateObjectsArray[i] = dateObject;
	}
	  
	i = 0;
	
	//Main Loop(per day)
	for (var i = 0; i < date; i++) {
		
		   
		//1.COVER 
		
		b.canvasMode(b.PAGE);
		
		//background
		b.fill(myColor);
		b.rect(0, 0, b.width, b.height);
		
		//typo
		b.textSize(32);
		b.textFont("Arial", "Bold");
		
		//write each date that and add current date at random position, then create a line to connect them
		b.beginShape(b.CENTER);  
		for (var j = 0; j <= i; j++) {
			b.noFill();
			var dateTextFrame = b.text(dateObjectsArray[j].text, dateObjectsArray[j].posX, dateObjectsArray[j].posY, 40, 20);
			b.typo(dateTextFrame, "strokeWeight", 1);
			b.typo(dateTextFrame, "strokeColor", myOtherColor);
			b.noFill();
			b.stroke(0, 0, 0, 0);
			b.vertex(dateObjectsArray[j].posX, dateObjectsArray[j].posY);
		}
		b.endShape();
		b.noStroke();
		
		
		//2.SLEEP
		
		b.fill(myColor);
		b.canvasMode(b.FACING_PAGES);
		
		b.addPage();
		b.addPage(); 
		
		//typo
		b.textFont("Arial", "Bold");
		b.textSize(60);
		
		var sleepTextFrame = b.text(days[i]["sleep"], 10, 10, b.width-20, b.height-20);
		
		app.select(app.activeWindow.activePage.allPageItems);
		
		//Step and Repeat Script
		
		//StepAndRepeat.jsx
		//An InDesign CS JavaScript
		//
		//Duplicates objects and performs a variety of object transformations.
		//
		//For more on InDesign scripting, go to http://www.adobe.com/products/indesign/scripting.html
		//or visit the InDesign Scripting User to User forum at http://www.adobeforums.com
		//
		var myProxyList = ["TopLeft","Top","TopRight","Left","Center","Right","BottomLeft","Bottom","BottomRight"];
		if (app.documents.length != 0){
		  if (app.selection.length > 0){
			myObjects = new Array;
			for(myCounter = 0; myCounter < app.selection.length; myCounter++){
			  switch(app.selection[myCounter].constructor.name){
				case "Rectangle":
				case "Polygon":
				case "GraphicLine":
				case "Oval":
				case "TextFrame":
				  myObjects.push(app.selection[myCounter])
			  }
			}
			if(myObjects.length > 0){
			  myDisplayDialog(myObjects);
			}
			else{
			  alert("Please select a rectangle, polygon, graphic line, oval, or text frame and try again.");
			}
		  }
		  else{
			alert("Please select an object and try again.");
		  }
		}
		else{
		  alert("Please open a document, select an object, and try again.");
		}
		//Display a dialog. Note that this dialog uses a different contruction approach
		//than the dialogs found in the other example scripts. There are many different ways
		//to contstruct dialog boxes in InDesign--use the approach that
		//best suits the way you work.
		function myDisplayDialog(myObjects){
		  myDialog = app.dialogs.add();
		  myDialog.name = "StepAndRepeat";
		  //myProxyColumn = myDialog.dialogColumns.add();
		  myLabelsColumn1 = myDialog.dialogColumns.add();
		  myLabelsColumn1.staticTexts.add({staticLabel:"Repeat Count:"});
		  //Spacer.
		  myLabelsColumn1.staticTexts.add();
		  myLabelsColumn1.staticTexts.add({staticLabel:"Horizontal Offset:"});
		  myLabelsColumn1.staticTexts.add({staticLabel:"Vertical Offset:"});
		  //Spacer.
		  myLabelsColumn1.staticTexts.add();
		  myLabelsColumn1.staticTexts.add({staticLabel:"Rotation:"});
		  myLabelsColumn1.staticTexts.add({staticLabel:"Skew:"});
		  //Spacer.
		  myLabelsColumn1.staticTexts.add();
		  myLabelsColumn1.staticTexts.add({staticLabel:"Fill Tint:"});
		  myLabelsColumn1.staticTexts.add({staticLabel:"Stroke Tint:"});
		  myControlsColumn1 = myDialog.dialogColumns.add();
		  myRepeatField = myControlsColumn1.integerEditboxes.add({editValue:2});
		  myControlsColumn1.staticTexts.add();
		  myXOffsetField = myControlsColumn1.measurementEditboxes.add({editValue:0});
		  myYOffsetField = myControlsColumn1.measurementEditboxes.add({editValue:0});
		  //Spacer.
		  myControlsColumn1.staticTexts.add();
		  myRotationField = myControlsColumn1.angleEditboxes.add({editValue:0});
		  mySkewField = myControlsColumn1.angleEditboxes.add({editValue:0});
		  //Spacer.
		  myControlsColumn1.staticTexts.add();
		  myFillTintField = myControlsColumn1.realEditboxes.add({editValue:0});
		  myStrokeTintField = myControlsColumn1.realEditboxes.add({editValue:0});
		  myLabelsColumn2 = myDialog.dialogColumns.add();
		  myLabelsColumn2.staticTexts.add();
		  myLabelsColumn2.staticTexts.add();
		  myLabelsColumn2.staticTexts.add({staticLabel:"Stroke Weight:"});
		  myLabelsColumn2.staticTexts.add({staticLabel:"Opacity:"});
		  //Spacer?
		  myLabelsColumn2.staticTexts.add();
		  myLabelsColumn2.staticTexts.add({staticLabel:"Horizontal Scale:"});
		  myLabelsColumn2.staticTexts.add({staticLabel:"Vertical Scale:"});
		  //Spacers
		  myLabelsColumn2.staticTexts.add();
		  myLabelsColumn2.staticTexts.add();
		  myLabelsColumn2.staticTexts.add({staticLabel:"Proxy:"});
		  myControlsColumn2 = myDialog.dialogColumns.add();
		  myControlsColumn2.staticTexts.add();
		  myControlsColumn2.staticTexts.add();
		  myStrokeWeightField = myControlsColumn2.measurementEditboxes.add();
		  myOpacityField = myControlsColumn2.realEditboxes.add({editValue:0});
		  //Spacer
		  myControlsColumn2.staticTexts.add();
		  myXScaleField = myControlsColumn2.realEditboxes.add({editValue:0});
		  myYScaleField = myControlsColumn2.realEditboxes.add({editValue:0});
		  myControlsColumn2.staticTexts.add();
		  myControlsColumn2.staticTexts.add();
		  myProxyMenu = myControlsColumn2.dropdowns.add({stringList:myProxyList, selectedIndex:0});
		  myResult = myDialog.show();
		  if(myResult == true){
			//Gather the user input from the dialog controls.
			myNumberOfRepeats = 4
			myXOffset = 40
			myYOffset = myYOffsetField.editValue;
			myRotation = myRotationField.editValue;
			mySkew = mySkewField.editValue;
			myFillTint = myFillTintField.editValue;
			myStrokeTint = myStrokeTintField.editValue;
			myStrokeWeight = myStrokeWeightField.editValue;
			myOpacity = myOpacityField.editValue;
			myXScale = myXScaleField.editValue;
			myYScale = myYScaleField.editValue;
			myProxy = myProxyMenu.selectedIndex;
			myDialog.destroy();
			//Save the current measurement units.
			var myOldXUnits = app.activeDocument.viewPreferences.horizontalMeasurementUnits;
			var myOldYUnits = app.activeDocument.viewPreferences.verticalMeasurementUnits;
			//Set the measurement units to points.
			app.activeDocument.viewPreferences.horizontalMeasurementUnits = MeasurementUnits.points;
			app.activeDocument.viewPreferences.verticalMeasurementUnits = MeasurementUnits.points;
			myStepAndRepeat(myObjects, myNumberOfRepeats, myXOffset, myYOffset, myRotation, mySkew, myFillTint, myStrokeTint, myOpacity, myStrokeWeight, myXScale, myYScale, myProxy);
			//Reset the measurement units to their original values.
			app.activeDocument.viewPreferences.horizontalMeasurementUnits = myOldXUnits;
			app.activeDocument.viewPreferences.verticalMeasurementUnits = myOldYUnits;
		  }
		  else{
			myDialog.destroy();
		  }
		}
		function myStepAndRepeat(myObjects, myNumberOfRepeats, myXOffset, myYOffset, myRotation, mySkew, myFillTint, myStrokeTint, myOpacity, myStrokeWeight, myXScale, myYScale, myProxy){
		  //Get the constant associated with the selected proxy point.
		  switch(myProxy){
			case 0:
			  myProxy = AnchorPoint.topLeftAnchor;
			  break;
			case 1:
			  myProxy = AnchorPoint.topCenterAnchor;
			  break;
			case 2:
			  myProxy = AnchorPoint.topRightAnchor;
			  break;
			case 3:
			  myProxy = AnchorPoint.leftCenterAnchor;
			  break;
			case 4:
			  myProxy = AnchorPoint.centerAnchor;
			  break;
			case 5:
			  myProxy = AnchorPoint.rightCenterAnchor;
			  break;
			case 6:
			  myProxy = AnchorPoint.bottomLeftAnchor;
			  break;
			case 7:
			  myProxy = AnchorPoint.bottomCenterAnchor;
			  break;
			case 8:
			  myProxy = AnchorPoint.bottomRightAnchor;
			  break;
		  }
		  for (myCounter = 1; myCounter <= myNumberOfRepeats; myCounter++){
			for (myObjectCounter=0; myObjectCounter < myObjects.length; myObjectCounter++)
			{
			  myObject = myObjects[myObjectCounter];
			  myObject = myObject.duplicate();
			  myObject.move(undefined, [myXOffset*myCounter, myYOffset*myCounter]);
			  if (myRotation != 0){
				myObject.rotate(myRotation*myCounter, myProxy, true, true);
			  }
			  if (myStrokeWeight != 0){
				newValue = myObject.strokeWeight + (myStrokeWeight*myCounter);
				if (newValue >= 0 && newValue <= 800)
				  myObject.strokeWeight = newValue;
			  }
			  if (myOpacity != 0){
				newValue = myObject.opacity + (myOpacity*myCounter);
				if (newValue >= 0 && newValue <= 100 )
				  myObject.opacity = newValue;
			  }
			  if (myXScale != 0){
				newValue = myObject.horizontalScale + (myXScale*myCounter);
				if (newValue >= 0.01)
				  myObject.horizontalScale = newValue;
			  }
			  if (myYScale != 0){
				newValue = myObject.verticalScale + (myYScale*myCounter);
				if (newValue >= 0.01)
				  myObject.verticalScale = newValue;
			  }
			  if (mySkew != 0){
				newValue = myObject.shearAngle + (mySkew*myCounter);
				if (newValue >= -80 && newValue <= 80 )
				  myObject.shearAngle = newValue;
			  }
			  if (myStrokeTint != 0){
				//A tint value of -1 = 100%
				if(myObject.strokeTint == -1){
				  newValue = 100 + (myStrokeTint*myCounter);
				}
				else{
				  newValue = myObject.strokeTint + (myStrokeTint*myCounter);
				}
				if (newValue >= 0 && newValue <= 100 ){
				  myObject.strokeTint = newValue;
				}
			  }
			  if (myFillTint != 0){
				if(myObject.strokeTint == -1){
				newValue = myObject.fillTint + (myFillTint*myCounter);
				}
				else{
				  newValue = 100 + (myFillTint*myCounter);
				}
				if (newValue >= 0 && newValue <= 100 ){
				  myObject.fillTint = newValue;
				}
			  }
			}
		  }
		}
		
		//3.MAILS
		
		b.fill(myColor);
		
		b.canvasMode(b.FACING_PAGES);
			
		b.addPage();
		b.addPage();
		
		//typo
		b.textFont("Arial", "Regular");
		
		var projectFolder = b.projectFolder();
		var pf = Folder(projectFolder + "/december/dec_" + (i+1) + "/mail");
		
		//Saves all .pdf files in mail-file in one array
		var mail = pf.getFiles("*.pdf");
		
		for (var j = 0; j < mail.length; j++) {
			if (b.endsWith(mail[j].toString(), ".pdf")) {
			b.image(mail[j],0-3,(0-3)+(((b.height+6)/mail.length)*j), b.width+6,(b.height+6)/mail.length);
			}
		}
		
		b.textSize(20);
		b.textFont("Arial", "Bold");
		b.textAlign(Justification.RIGHT_ALIGN, VerticalJustification.BOTTOM_ALIGN);
		var mailText = b.text("I got " + mail.length + " Mails today.", 181, 275, 230, 14);
		b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.TOP_ALIGN);
		
		
		//4.WEATHER
		
		b.fill(myColor);
		
		b.canvasMode(b.FACING_PAGES);
		
		b.addPage();
		b.addPage(); 
		
		//typo
		b.textFont("Arial", "Bold");
		
		//get all information about the weather in one text frame, and scale it, so that it fits excactly in the frame
		var weatherTextFrame = b.text(days[i]["weather"], 10, 10, b.width-20, b.height-20);
		var pointSize = weatherTextFrame.parentStory.pointSize;
		
		while( weatherTextFrame.overflows == false ) {
		pointSize++;
		b.typo(weatherTextFrame, "pointSize", pointSize);
		}
		while( weatherTextFrame.overflows == true ) {
		pointSize--;
		b.typo(weatherTextFrame, "pointSize", pointSize);
		}
		
		
		//5.PHOTOS
		
		b.fill(myColor);
		
		b.canvasMode(b.FACING_PAGES);
			
		b.addPage();
		b.addPage(); 
		
		//background
		
		//typo
		b.textFont("Arial", "Regular");
		
		var photoTextFrame = b.text("Today in " + days[i]["pictures"] + " pictures.", 10, 20, 300, 500);
		
		var outlineFrame = photoTextFrame.createOutlines();
		
		var randomlength = b.random(50,(b.width-20));
		b.itemSize(outlineFrame[0],randomlength,30);
		
			
		//Add all pictures of a file, no matter what their names are
		var projectFolder = b.projectFolder();
		var pf = Folder(projectFolder + "/December/dec_" + (i+1) + "/pictures");
		
		//saves all pictures in an array
		var photo = pf.getFiles();
		
		for (var j = 0; j < photo.length; j++) {
			if (b.endsWith(photo[j].toString(), ".PNG")) {
				var img = b.image(photo[j], 0, 0);
				var scale = b.random(0.3, 0.7);
				var imgWidth = b.itemWidth(img) * scale;
				var imgHeight = b.itemHeight(img) * scale;
				var x = b.random(b.width - imgWidth);
				var y = b.random(b.height - imgHeight);
				b.transformImage(img, x, y, imgWidth, imgHeight);
			}
			  
			else if (b.endsWith(photo[j].toString(), ".JPG")) {
				var img = b.image(photo[j], 0, 0);
				var scale = b.random(0.3, 0.7);
				var imgWidth = b.itemWidth(img) * scale;
				var imgHeight = b.itemHeight(img) * scale;
				var x = b.random(b.width - imgWidth);
				var y = b.random(b.height - imgHeight);
				b.transformImage(img, x, y, imgWidth, imgHeight);
			}
		
			else if (b.endsWith(photo[j].toString(), ".png")) {
				var img = b.image(photo[j], 0, 0);
				var scale = b.random(0.3, 0.7);
				var imgWidth = b.itemWidth(img) * scale;
				var imgHeight = b.itemHeight(img) * scale;
				var x = b.random(b.width - imgWidth);
				var y = b.random(b.height - imgHeight);
				b.transformImage(img, x, y, imgWidth, imgHeight);
			}
		}
		
		//6.THOUGHTS
		
		b.fill(myColor);
		
		b.canvasMode(b.FACING_PAGES);
		
		b.addPage();
		b.addPage();
		
		//typo
		b.textFont("Arial", "Bold");
		
		//get all information about my thoughts in one text frame, and scale it, so that it fits excactly in the frame
		var firstTextFrame = b.text(days[i]["thoughts"], 10, 10, b.width-20, b.height-20);
		var pointSize = firstTextFrame.parentStory.pointSize;
		
		while( firstTextFrame.overflows == false ) {
			pointSize++;
			b.typo(firstTextFrame, "pointSize", pointSize);
		}
		while( firstTextFrame.overflows == true ) {
			pointSize--;
			b.typo(firstTextFrame, "pointSize", pointSize);
		}
		
		 //7.WHATSAPP
		
		b.fill(myColor);
		
		b.canvasMode(b.FACING_PAGES);
			
		b.addPage();
		b.addPage();
		
		//background
		b.fill(myColor);
		b.rect(0, 0, b.width, b.height);
		
		//typo
		b.textFont("Arial", "Regular");
		
		var projectFolder = b.projectFolder();
		var whatsAppFile = File(projectFolder + "/December/dec_" + (i+1) + "/whatsapp/"+ (i+1) + ".dec.txt");
		var whatsapp = b.loadString(whatsAppFile);
			
		b.rotate(b.radians(-90));
		b.fill(0, 0, 0, 0);
		var whatsappframe = b.text(whatsapp, 20, 277, b.height-40, b.width-40);
		
		   
		var pointSize = whatsappframe.parentStory.pointSize;
		while( whatsappframe.overflows == false ) {
			pointSize++;
			b.typo(whatsappframe, "pointSize", pointSize);
		}
		while(whatsappframe.overflows == true ) {
			pointSize--;
			b.typo(whatsappframe, "pointSize", pointSize);
		}
		
		b.fill("blackmagic");
		
		var words = b.words(whatsappframe);
		//var character = b.characters(words);
		for (var j = 0; j < words.length; j++) {
			b.typo(words[j], "fillColor", "blackmagic");
			if (words[j].length > 10) {
			var skewApp = b.random(-70, 70);
			b.typo(words[j], "fillColor", "whitemagic");
			b.typo(words[j], "skew", skewApp);
			}
		}
			
		b.rotate(b.radians(0));
		b.textSize(20);
		b.textFont("Arial", "Bold");
		b.fill(0, 0, 0, 0);
		b.textAlign(Justification.RIGHT_ALIGN, VerticalJustification.BOTTOM_ALIGN);
		var mailText = b.text("This is part of my Whatsapp conversations", 181, 275, 230, 14);
		b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.TOP_ALIGN);
		
		//8.NOISE
		
		b.fill(myColor);
		
		b.canvasMode(b.FACING_PAGES);
		
		b.addPage();
		b.addPage(); 
		
		//typo
		b.textFont("Arial", "Bold");
		
		
		var noiseTextFrame = b.text(days[i]["noise"], 10, 10, b.width-20, b.height-20);
		
		var words = b.words(noiseTextFrame);
		
		for (var j = 0; j < words.length; j++) {
			if (words[j].contents == "Silence") {
				b.typo(words[j],'pointSize',18);
			}
			else if (words[j].contents == "Extremely") {
				b.typo(words[j],'pointSize',30);
				b.typo(words[++j],'pointSize',30);
			}
			else if (words[j].contents == "Quiet") {
				b.typo(words[j],'pointSize',50);
			}
			else if (words[j].contents == "Moderate") {
				b.typo(words[j],'pointSize',70);
			}
			else if (words[j].contents == "Loud") {
				b.typo(words[j],'pointSize',70);
			}
		}
		
		noiseTextFrame.remove();
		
		
		//10.BROWSERHISTORY
		
		b.fill(myColor);
		
		b.canvasMode(b.FACING_PAGES);
			
		b.addPage();
		b.addPage();
		
		var projectFolder = b.projectFolder();
		var browserFile = File(projectFolder + "/December/dec_" + (i+1) + "/browserhistory/"+ (i+1) + ".dec.txt");
		var browser = b.loadString(browserFile);
		
			
		//typo
		b.textFont("Arial", "Bold");
		
		var browserframe = b.text(browser, 20, 20, b.width-40, b.height-40);
		var pointSize = browserframe.parentStory.pointSize;
		
		while( browserframe.overflows == false ) {
			pointSize++;
			b.typo(browserframe, "pointSize", pointSize);
			}
		while( browserframe.overflows == true ) {
			pointSize--;
			b.typo(browserframe, "pointSize", pointSize);
		}
		
		
		//11.STEPS
		
		b.fill(myColor);
		
		b.canvasMode(b.FACING_PAGES);
		
		b.addPage();
		b.addPage(); 
		
		//typo
		b.textFont("Arial", "Bold");
		
		
		var sleepTextFrame = b.text(daten[i]["steps"], 10, 10, b.width-20, b.height-20);
		var pointSize = sleepTextFrame.parentStory.pointSize;
		
		while( sleepTextFrame.overflows == false ) {
			pointSize++;
			b.typo(sleepTextFrame, "pointSize", pointSize);
		}
		while( sleepTextFrame.overflows == true ) {
			pointSize--;
			b.typo(sleepTextFrame, "pointSize", pointSize);
		}
		
		b.addPage();
		b.addPage(); 
		
		}
}
b.go();