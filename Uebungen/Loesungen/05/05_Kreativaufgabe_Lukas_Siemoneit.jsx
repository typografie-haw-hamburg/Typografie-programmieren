﻿//@includepath "~/Documents/;%USERPROFILE%Documents";//@include "basiljs/basil.js";function draw() {b.clear(b.doc());b.textSize(9);var textArray = [b.loadString("Cage_01.txt"), b.loadString("Cage_02.txt"), b.loadString("Cage_03.txt")];var randomX = b.random(20, 70);var randomY = b.random(50, b.height - 450);var randomY2 = b.random(50, b.height - 450);var randomY3 = b.random(500, 600);// Textfelder erstellen:var tf1 = b.text(textArray[0], randomX, randomY, 250,400);var tf2 = b.text(textArray[1], b.width/2 + randomX, randomY2, 250,400);var tf3 = b.text(textArray[2], randomX + b.random(20,300), randomY3, 250,400);var words1 = b.words(tf1);var words2 = b.words(tf2);var words3 = b.words(tf3);var arrayWords1Left = [];var arrayWords1Baseline = [];var arrayWords2Left = [];var arrayWords2Baseline = [];var arrayWords3Left = [];var arrayWords3Baseline = [];var myCounter = 0;var myCounter2 = 0;var myCounter3 = 0;var wordLength = 3;b.stroke(255,0,0);b.strokeWeight(0.5);for(i=0; i<words1.length; i++){  b.typo(words1[i], "baselineShift", b.random(0,5)); }for(i=0; i<words2.length; i++){  b.typo(words2[i], "baselineShift", b.random(0,5)); }for(i=0; i<words3.length; i++){  b.typo(words3[i], "baselineShift", b.random(0,5)); }// Speichern der Startpositionen vom ersten Text:for(i=0; i<words1.length; i++){  var boundsWords1 = b.bounds(words1[i]);  if(words1[i].contents.length == wordLength){    arrayWords1Left[myCounter] = boundsWords1.left;    arrayWords1Baseline[myCounter] = boundsWords1.baseline;    myCounter = myCounter+1;  }}// Speichern der Startpositionen vom zweiten Text:for(i=0; i<words2.length; i++){  var boundsWords2 = b.bounds(words2[i]);  if(words2[i].contents.length == wordLength){    arrayWords2Left[myCounter2] = boundsWords2.left;    arrayWords2Baseline[myCounter2] = boundsWords2.baseline;    myCounter2 = myCounter2+1;  }}// Speichern der Startpositionen vom dritten Text:for(i=0; i<words3.length; i++){  var boundsWords3 = b.bounds(words3[i]);  if(words3[i].contents.length == wordLength){    arrayWords3Left[myCounter3] = boundsWords3.left;    arrayWords3Baseline[myCounter3] = boundsWords3.baseline;    myCounter3 = myCounter3+1;  }}// Linien zeichnen:if(arrayWords1Left.length < arrayWords2Left.length){  for(i=0; i<arrayWords1Left.length; i++){    b.line(arrayWords1Left[i],arrayWords1Baseline[i], arrayWords2Left[i], arrayWords2Baseline[i]);    b.line(arrayWords2Left[i], arrayWords2Baseline[i],arrayWords3Left[i], arrayWords3Baseline[i]);  }}else{  for(i=0; i<arrayWords2Left.length; i++){    b.line(arrayWords1Left[i],arrayWords1Baseline[i], arrayWords2Left[i], arrayWords2Baseline[i]);    b.line(arrayWords2Left[i], arrayWords2Baseline[i],arrayWords3Left[i], arrayWords3Baseline[i]);  }}b.noFill();for(i=0; i<arrayWords1Left.length; i++){  var radius = b.random(20,60);  b.ellipse(b.random(50,b.width-50), b.random(50,b.height-50), radius, radius);}}b.go();