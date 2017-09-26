#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";


var center;
function draw() {
  var scale = 3;
  center = {"x" : b.width/2, "y" : b.height/2 };

  var json = b.loadString("whole_lotta_love.json");
  var song = b.JSON.decode(json);

  var band = song.tracks[2].name;
  var title = song.tracks[3].name;
  var notes = song.tracks[12].notes; // 349

  drawSong( song.tracks[12].notes, scale,  1);
  drawSong( song.tracks[13].notes, scale,  2);
  drawSong( song.tracks[14].notes, scale,  3);
  drawSong( song.tracks[15].notes, scale,  1);

  b.fill(0);
  b.textSize(30);
  b.text(title,101,646,b.width,100);
  b.textSize(12);
  b.text(band, 136,637,b.width,100);
}

b.go();


function drawSong( notes, scale, strokeWeight ) {
    for(var i=0;i<notes.length;i++){
    var pos = kreisPosition(center.x,center.y,notes[i].midi*scale, i-90);
    var innerPos = kreisPosition(center.x,center.y,notes[i].midi, i-90);
    var map = b.map(notes[i].velocity, 0,1,255, 0);
    b.stroke(map);
    b.strokeWeight(strokeWeight);
    b.line(innerPos.x,innerPos.y,pos.x,pos.y);
  }
}


function kreisPosition( x, y, r, grad) {
        var obj = {};
        obj.x = Math.cos( b.radians(grad) ) * r + x;
        obj.y = Math.sin( b.radians(grad) ) * r + y;
        return obj;
    }

