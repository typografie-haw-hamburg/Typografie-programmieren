
//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.page());
b.noStroke();

var allImg = ["image.png","image2.png","image3.png","image4.png"];
var count= b.round(b.random(1,5)); // Anzahl der "Schlieren"


    for(var j = 0 ; j<count; j++){

    var randomArrayPosition = b.floor( b.random(0,allImg.length) );
    var randomImg = allImg[randomArrayPosition]; // zufälliges Bild wird aus dem Array genommen 
    
    var imgCount = b.round(b.random(100,400));

    // Position und Format:
    var imgWidth = 10;
    var imgHeight = b.random(200,400);
    var imgx= b.random(0,500);
    var imgy = b.random(0,600);

    // Bild wird zufällig oft in 10pt Streifen nebeneinander gesetzt, y-Position und Höhe der Streifen variieren
        for(var i = 0 ; i<imgCount; i++){
        imgx++
        var randomShift = b.random(-10,10);
        imgy+=randomShift;

        b.image(randomImg, imgx, imgy, imgWidth,imgHeight);

       }//For-Loop 2 

    } // For-Loop 1

}//Function Draw


b.go();