﻿//@includepath "~/Documents/;%USERPROFILE%Documents";//@include "basiljs/basil.js";function draw() {b.clear(b.doc());//Hintergrundb.clear(b.doc());b.fill(b.color(0, 0, 0));b.rect(0,0,b.width, b.height);// Daten auslesenvar daten = b.loadString("daten.csv");b.CSV.delimiter(";");var data = b.CSV.decode(daten);var step =30;var count = data.length;//Linienx = 250;y = 150;  b.stroke(b.color(255, 255, 255));b.strokeWeight (2); for (var i = 20; i <count; i++) {   b.line (800, 40, b.width/2-i*5, i * step);  b.line(b.width/2-i*5,i*step,data[i].Wellenlaenge- i*20,i*step);} for (var i = 20; i <count; i++) {  b.line(data[i].Wellenlaenge-i*20,i*step,data[i].Silizium-i+5,i*step); }   } b.go();