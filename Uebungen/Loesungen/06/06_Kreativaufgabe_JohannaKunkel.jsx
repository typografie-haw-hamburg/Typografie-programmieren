//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.rect(0,0, b.width, b.height);


var songtext = ["Dein Gewissen ist im Trend, denn es ist all black everything. Stimme wie Cobain, trägst keinen Schmuck, aber dein Herz ist Gold. Brauchst keine Einkaufstasche. Deine Blicke sagen 'Scheiß auf alle'. Deine Nägel sind die schärfsten der Stadt. Die Klamotten, die du trägst, sind schwärzer als die Nacht. Dir wachsen rote Bäume in den Augen. Du bist nicht nur heute nicht Zuhause. Ob du es heute auf die Kette kriegst, denn du träumst davon wegzuziehen. Sollte wohl nicht sein, Freunde kommen nicht mehr vorbei, laden dich schon lange nicht mehr ein. Haben keine Zeit, wenn du fragst. Ich sage keiner kann wichtiger sein. Findest keinen Schlaf. Himmel dunkelrot, so wie dein Mund. Immer in der Nacht kommt er wieder hoch, dieser scheiß Druck. Brauchst keinen, allerhöchstens 'ne Auszeit. Schwörst dir du drehst durch, wenn noch einer sein Maul aufreißt. Jeden Tag alles wieder von vorn. Nie Royal wie das Lied von Lorde. Brauchst keine Ketten, brauchst keine Ringe, brauchst kein Geld - Denn auch so hast du schon viel um die Ohren. Wein ist dein Ziehneffe. Jeden morgen verballerter als Schießstände. Aber du bist keine Diva, dein iPod, dein Tagebuch, alles deine Lieder. Alle deine Freunde wollen in den Club gehen. Du kommst nicht mit, du hast keinen Bock auf rumstehen. Redest kaum - Gehst nur bei Regen raus. Auf deiner Stirn steht 'Ich gebe auf'. Keiner kümmert sich wenn du mal jemanden zum Reden brauchst.",  "Meine Ehre sog mich raus, lernte von Zuhause. Ferne zog mich auf. Kleinstadt geblieben - oder wie Mama sagt, bei der Familie. Mein leiblicher Vater schreibt mir nicht, eigene Mama weint um mich. Keiner der Kleinen peilt, was 'seine Chance ergreifen' ist. Stattdessen denk ich, was soll ich ihnen beim zuwinken sagen? Vielleicht 'Ich habe zu viel erwartet'. Und wir fliegen wieder viel zu weit. Das alles geht mir viel zu schnell. Fühlt sich an, als geht es nie vorbei. Ob Jesus dacht', sein Drehbuch wär' geschrieben. Am Ende sehen wir alle aus der Ego-Perspektive. Geblendet davon, was unsere Weggefährten kriegen. Parallel dazu braucht mein Bruder 'n Legoberg zum fliegen. Und wir klammern uns an Material, wollen Patte. Unser ganzes Leben, aber haben Mathe gehasst, denn es ist eins plus eins gleich das, was man uns glauben lässt. Knast ist fast ein Segen, meine Brüder stecken draußen fest. Wenn du trotz Nachtschicht immer wach bist. Dein Verstand bricht beim Anblick deines Antlitz. Und sie sagen zu dir, bedank dich. Stattdessen denk ich, was soll ich ihnen beim zuwinken sagen? Vielleicht 'Ich habe zu viel erwartet'."];

// Textrahmen:
var frameWidth = b.width - 40;
var frameHeight = 200;
var textX = 20;
var textY = b.random(0, b.height - frameHeight);

// Zufall, welcher Text genommen wird:
var randomSong = b.random(0, songtext.length);
var roundSong = b.floor(randomSong);
b.println(roundSong);
if (roundSong == 0) {
var tf = b.text(songtext[roundSong], textX, textY, frameWidth, frameHeight);
} 
if (roundSong == 1) {
var tf = b.text(songtext[roundSong], textX, textY, frameWidth, frameHeight);
}

b.typo(tf, "fillColor", b.color(255,255,255));

var words = b.words(tf);
var boosi = true;

//Zufallszahl, welche Wörter aus dem Text genommen werden:
var number = b.random(1, 3);
var roundNumber = b.round(number);
b.println(roundNumber);

//Endpunkte der Linie:
var lineEndX = b.random (0, b.width);
var lineEndY = b.height;
b.stroke(b.color(255,255,255));

for(var i = 0; i < words.length; i++) {

  if (roundNumber == 1 && words[i].contents[0] == "a") {

    b.typo(words[i], "pointSize", 20);
    b.typo(words[i], "fillColor", b.color(156, 49, 0));
    var wordBounds = b.bounds (words[i]);
    b.line(wordBounds.left, wordBounds.baseline, lineEndX, lineEndY);

  } if (roundNumber == 2 && words[i].contents[0] == "S") {

    b.typo(words[i], "underline", boosi);
    var wordBounds = b.bounds (words[i]);
    b.line(wordBounds.left, wordBounds.baseline, lineEndX, lineEndY);

  } if (roundNumber == 3 && words[i].contents[0] == "R") {

    b.typo(words[i], "underline", boosi);
    var wordBounds = b.bounds (words[i]);
    b.line(wordBounds.left, wordBounds.baseline, lineEndX, lineEndY);
  }
}
 
 
}

b.go();
