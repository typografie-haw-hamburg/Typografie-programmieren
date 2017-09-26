//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());
b.textSize(120);
b.textFont("Gotham","Black");
b.textAlign(Justification.CENTER_ALIGN);


// Alphabet Array (abc) erstellen
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var abc = [];

for(i=0; i<alphabet.length; i++){
  abc[i] = alphabet.charAt(i);
}

// Userprompt
var userprompt = prompt("Geben Sie ein Wort mit bis zu 7 Buchstaben ein.");
var userprompt = userprompt.toLowerCase();
var promptArray = [];
var orderArray = [];
var counter = 0;

// Abfrage ob das Zeichenlimit eingehalten wurde
if(userprompt.length > 7){
  alert("ICH HAB DOCH GESAGT BIS ZU 7 BUCHSTABEN!");
}
else{                                                  
                                      
  while(counter < userprompt.length){                     
    b.clear(b.doc());

    for(i=0; i<userprompt.length; i++){                  
      promptArray[i] = userprompt.charAt(i);
    }

    for(i=0; i<userprompt.length; i++){                   
      orderArray[i] = false;                               
    }

    orderArray[0] = true;

    for(i=0; i<15; i++){
      for(j=0; j<12; j++){
        var random = b.round(b.random(0,24));
        var aktuell = b.text(abc[random], 80+j*150, 80+i*150, 150, 150);  

        for(k=0; k<promptArray.length; k++){
          if(abc[random] == promptArray[k] && orderArray[k] == true){
            b.opacity(aktuell,50);
            promptArray[k] = "";
            orderArray[k+1] = true;
             counter = counter+1;
          }
        }

      }
    }
  }
}
}

b.go();
