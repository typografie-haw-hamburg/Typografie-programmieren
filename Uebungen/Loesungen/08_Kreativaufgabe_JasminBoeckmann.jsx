
// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear(doc());
  rectMode(CENTER)


var myList = loadString("buchListe.tsv");


CSV.delimiter("\t")
var listArr = CSV.decode(myList);

var keyArr = Object.keys(listArr[0]);




beginShape();




for(var j = 0; j < 21; j++) {

  var dia = random(0,40);
  var x = random(0,width);
  var y = random(0,height);







   if( x > width / 2) {
    noFill();
    ellipse(x,y,dia,dia)

   } else {
     noFill();
     rect(x,y,dia,dia)

   }

   vertex(x,y);
 }
 endShape();



for(var i = 0; i < 21; i++) {


var randomX = random(0,width)
var randomY = random(0,height)
var randomSize = random(50,300)







  // if( listArr[i]["historischesBuch"]*1 === 1 && myWords[i].contents.lenghts === 4) {
  if( listArr[i]["historischesBuch"]*1 === 0 ) {




    var sizeF =textSize(random(7,100))


     fill(255,0,0)
     var tf = text(listArr[i]["titel"],randomX, randomY, 300, 300)
     var myWords = words(tf)
     var fwb = (myWords[0]);
     tf.parentStory.hyphenation = false
     inspect(fwb.contents)



     fill(0)
    // println("klappt")
  } else{
     fill(0,0,255)

 // // ellipse(50,50,50,50)
 text(listArr[i]["titel"],randomX , randomY, 100, 50)
 fill(0)


    }


}



}















// Snippet from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
  Object.keys = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function(obj) {
      if (typeof obj !== 'function' && (typeof obj !== 'object' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}
