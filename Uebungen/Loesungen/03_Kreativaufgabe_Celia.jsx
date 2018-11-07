// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {
clear( doc() );


var quadrat=prompt("Rot oder Blau",0)


 if (quadrat==="Rot") {
  alert ("ok")
  fill(255,0,0)
}if (quadrat==="Blau") {
  alert ("nö")
  fill (0,0,255)
}else{
}
rect(width/2-25,height/2-25,50,50)


  noFill()

  var x = 5;
  var y = 150;
  var dia= 10;
  Menge = 100

  for (var i=0; i<Menge;i++){

  ellipse(x+i,y,dia ,dia*i)
  }

  var x = 205;
  var y = 150;
  for (var i=0; i<Menge;i++){

  ellipse(x-i,y,dia ,dia*i)
  }

  var x = 100;
  var y = 10;
  for (var i=0; i<Menge;i++){

    if (i > 40){
    stroke(255,0,0)
  }else{
    noFill()
  }

    ellipse(x,y-i,dia*i ,dia*i)

  }







}