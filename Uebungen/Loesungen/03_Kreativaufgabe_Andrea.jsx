// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear( doc() );
  noStroke();

  textFont("Calibri", "Bold");
  var sizetext = 50;
  textSize(sizetext);
  textAlign(Justification.CENTER_ALIGN);

  var sizetext = 50;
  var hboxtext = 100;
  var wboxtext = 25;

var luckynumber = random(1,11);

     if (luckynumber > 9){
      println("Your number is: " + luckynumber + ". Congratulations, you won!");
    
     	fill(255, 150, 200);
		rect(0, 0, width, height);

		for(var i = 0; i < 100; i++) {

      fill(r,g,b);
			box=text("WINNER", 0,100,width,80);

    var r = random(200,255);
    var g = random(200,255);
    var b = random(200,255);

      fill(r,g,b);
    var d1 = random (5,20);
    var x = random (d1/2, width-d1/2);
    var y = random (d1/2, height-d1/2);
    var circle = ellipse(x,y,d1,d1);
		}
  	} 

      else {
      println("Your number is: " + luckynumber + ". We're sorry, try again.");
		fill(0, 0, 0);
		rect(0, 0, width, height);

		fill(255, 255, 255);
		box=text("TRY AGAIN", 0,100,width,80);
    }
  

  
}