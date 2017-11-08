// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
b.revert();
b.units(b.MM);
b.size(210, 297);
//ACHTUNG: Dokument richtet sich automatisch als Din-A1 ein!



//Skript für zufällige Auswahl aus gewählten Farben -> start

  var grey = b.color(150, 150, 150);
  var green = b.color(70, 90, 70);
  var yellow = b.color(255, 255, 0);
  var red = b.color(255, 0, 0);

  var colors = [grey, green, yellow, red];

  var random1 = b.floor(b.random(0, colors.length));

  var color1 = colors[random1];



var artism = [
      "abstract expressionism",
    "academic",
    "action painting",
    "aestheticism",
    "art deco",
    "art nouveau",
    "avant-garde",
    "barbizon school",
    "baroque",
    "bauhaus",
    "biedermeier",
    "caravaggisti",
    "carolingian",
    "classicism",
    "cloisonnism",
    "cobra",
    "color field painting",
    "conceptual art",
    "cubism",
    "cubo-futurism",
    "dada",
    "dadaism",
    "de stijl",
    "deformalism",
    "der blaue reiter",
    "die brücke",
    "divisionism",
    "eclecticism",
    "ego-futurism",
    "existentialism",
    "expressionism",
    "fauvism",
    "fluxus",
    "formalism",
    "futurism",
    "geometric abstraction",
    "gothic art",
    "gründerzeit",
    "hard-edge painting",
    "historicism",
    "hudson river school",
    "humanism",
    "hyperrealism",
    "idealism",
    "illusionism",
    "immagine&poesia",
    "impressionism",
    "incoherents",
    "installation art",
    "international gothic",
    "intervention art",
    "jugendstil",
    "kinetic art",
    "land art",
    "les nabis",
    "lettrism",
    "lowbrow",
    "luminism",
    "lyrical abstraction",
    "mail art",
    "manierism",
    "mannerism",
    "maximalism",
    "merovingian",
    "metaphysical art ",
    "minimalism",
    "modern art",
    "modernism",
    "monumentalism",
    "multiculturalism",
    "naturalism",
    "neo-classicism",
    "neo-dada",
    "neo-expressionism",
    "neo-fauvism",
    "neo-geo",
    "neo-impressionism",
    "neo-minimalism",
    "neoclassicism",
    "neoism",
    "neue slowenische kunst",
    "new media art",
    "new objectivity",
    "nonconformism",
    "nouveau realisme",
    "op art",
    "orphism",
    "ottonian",
    "outsider art",
    "performance art",
    "perspectivism",
    "photorealism",
    "pointilism",
    "pop art",
    "post-conceptualism",
    "post-impressionism",
    "post-minimalism",
    "post-painterly abstraction",
    "post-structuralism",
    "postminimalism",
    "postmodern art",
    "postmodernism",
    "pre-raphaelites",
    "precisionism",
    "primitivism",
    "purism",
    "rayonism",
    "realism",
    "relational art",
    "remodernism",
    "renaissance",
    "rococo",
    "romanesque",
    "romanticism",
    "russian futurism",
    "russian symbolism",
    "scuola romana",
    "secularism",
    "situationist international",
    "social realism",
    "socialist realism",
    "sound art",
    "street art",
    "structuralism",
    "stuckism international",
    "stuckism",
    "superflat",
    "superstroke",
    "suprematism",
    "surrealism",
    "symbolism",
    "synchromism",
    "synthetism",
    "systems art",
    "tachism",
    "tachisme",
    "tonalism",
    "video art",
    "video game art",
    "vorticism",
    "young british artists"
  ];

 var randomIx = b.random(0, artism.length);
 var roundedIx = b.floor( randomIx )


//Skript für zufällige Auswahl aus gewählten Farben -> Ende (durch das einfügen von "[random1]", wird die ausgewürfelte Farbe eingesetzt.)




///Hintergrundfarbe -> Start
b.fill(color1);
b.rect(0, 54, b.width, b.height );
b.rectMode(b.CENTER);

///Hintergrundfarbe -> Ende




///Anzahl der loops -> Start
var loops = 1;
///Anzahl der loops -> Ende




//Optionale variable in den "fliegenden Stäbchen":

 var thickness = b.random(8);

// Optionale variable -> Ende




///Variable 1 -> Start
for(var i=0; i < loops; i++) {
    b.fill(0);
    b.textFont("Favorit");
    b.textSize(60);
    b.textLeading(50);
    b.textKerning(-60)
    b.textAlign(Justification.LEFT_ALIGN);
b.text("Is this "+ artism[roundedIx] + " or trash?", 10, 10, b.width-20, b.height-20);
  }


 var minute = b.minute();
  var hour = b.hour();
  var day = b.day();
  var month = b.month();
  var year = b.year();
  var date = b.nf( day, 2) + "/" + b.nf( month, 2) + "/" + year;
  var time = b.nf( hour, 2) + ":" + b.nf( minute, 2);




var myNumber = 23;



for(var i = 0; i < (+50); i++){
var rotate = b.random(5,100);
var rndmpoint = b.random(100);

   var x = b.random(0, b.width);
   var y = b.random(54, b.height);



//Farbe der rechtecheke
b.fill(color1);
b.rotate(rotate);
//100 = rect länge, 5 = rect höhe
b.ellipse(x, y, 50, (+15));
b.stroke(0);
b.strokeWeight(0,5);


}

}
b.go();