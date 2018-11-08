// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {


  clear(doc());

  rectMode(CENTER);

    for(var i= 0; i< 50; i++) {

  var x= random(width);
  var y= random(height);


  var blue = map(y,0,height,0,255);

  var dia = map(x,0,width,50,2);

  println(dia);

  fill(0,0,blue);

  ellipse(x,y,dia,dia);


}
fill(0);
ellipse(width/ 2,height/ 2,170,170);

fill(255)

  var myString = loadString("übungstext.txt");
 // tf textframe
  var tf = text(myString,width/ 2,height/ 2,210,297);

 //  text in einzele worte zerlegen/ oder zeilen lines(tf)/ einzel worte characters(tf)
  var myWords = words(tf);

  for(var i = 0; i < myWords.length; i++) {

    var mySkew = random(-20,20);
   //  skew neigung/ baselineShift ist grndlinienversatz
    typo(myWords[i],"baselineShift",mySkew);

  }
}




