﻿//@includepath "~/Documents/;%USERPROFILE%Documents";//@include "basiljs/basil.js";function draw() {b.clear(b.doc());b.noFill;for(var i = 0; i < 20; i++) {var pos1 = b.random(0, b.width);var pos2 = b.random(0, b.height);var x = b.random(10, b.width);var y = b.random(10, b.height); b.line(pos1, pos2, x, y); b.fill(b.color(300)); b.ellipse(pos1, pos2, 50, 50); b.ellipse(x,y,50,50);}}b.go();