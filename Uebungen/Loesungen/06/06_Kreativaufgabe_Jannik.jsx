//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear (b.doc());

b.rectMode (b.CENTER);
b.fill (0);
b.noStroke();
b.canvasMode (b.MARGIN);


//var userWord = prompt ("Enter Word:", "System")
var userWord = "Stil / System / Methode".toLowerCase();
b.println (userWord.length)
//define grid
var gridSpacing = b.width / 25
var size = 45

/*var xAmount = 49
var yAmount = 49
*/
var fontSize = b.textSize (60);
b.textAlign (Justification.LEFT_ALIGN , VerticalJustification.BOTTOM_ALIGN);
b.textTracking (50);
b.textFont ("Work Sans", "Bold")
b.text (userWord, 0 - b.width /77,b.height - b.height / 44, b.width ,fontSize)

var xAmount = 26
var yAmount = 35

//create array for alphabet
var alphabet = ("abcdefghijklmnopqrstuvwxyz /").split("");
//var specialCharacters = 


//var grid = b.map (0, 0, 20, 0, b.width);
//b.println(grid);

var k = 0 
var wordlength = userWord.length
b.println (wordlength)

//loop for the cricles, organized in a grid therefor two loops
for ( var j = 0; j < yAmount ; j++) {




  for (var i = 0; i < xAmount; i++) {



    //map colors
    var black = b.map (k, 0, wordlength -1, 0, 254);
    var white = b.map (k, 0, wordlength -1, 254, 0);

    while (k <  wordlength) {
        //b.println("While");

        // if userWord[k] not in array alphabet


        // else 

        //choose character from arrayy randomly + show in console
        var randomNumber = b.floor (b.random (0, alphabet.length));
        var randomLetter = alphabet[randomNumber]
        
        b.println(randomNumber);
        b.println(randomLetter);

        if (userWord[k] !== randomLetter) {

          var ellipse = b.ellipse (gridSpacing * (i ), gridSpacing * (j ) , size, size);
          
          break;

        } else {

          b.fill (black, white);
          k +=1
          b.println ("match!");
          

          break;

        }

    }



    //b.println (randomLetter);
    //b.println(userWord[k])

    //if (userWord[k] == randomLetter){
     
     


    //}

  
    

        }
        //b.println(randomLetter);
       
        
    

  /*    
      b.fill (0,0,0)
      var rect = b.rect (gridSpacing*i, gridSpacing*j, size+10, size+10);
      var boundsRect = b.bounds (rect);
      b.println (boundsRect); 
      b.fill (red,0,blue);

*/
  }

  var rotation = b.radians (-90);
  var textSizeZwei = b.textSize (10);
  b.textTracking (80);
  b.rotate (rotation);
  b.fill (0);
  b.textFont ("Work Sans", "Regular");
  b.text ("poster von jannik schiesswohl entstanden im kurs ‹stil / system / methode› im ws 2016 bei heike grebin", b.width + b.width /160, b.height, 1000, textSizeZwei )

}






b.go();