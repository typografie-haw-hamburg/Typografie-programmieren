// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.colorMode(b.RGB);
  b.units(b.MM);

  // Mindest-Points für V1, V2, V3 und V4 festlegen
  var v1 = 9;
  var v2 = 6;
  var v3 = 3;
  var v4 = 1;

  // ein 4er Array dominantColors, in dem zunächst die neutralen Farben gespeichert sind
  var dominantColors = [b.color(255,208,73), b.color(219,212,206), b.color(156,154,149), b.color(255,208,73)];

  // ein Array mit allen Emotionsnamen
  // den brauchen wir später um durch alle Emotionen zu loopen
  var emotionNames = ["panic", "anger", /* ... */ "expectation"];

  // ein Haupt-Object, in dem alle Emotionen wiederum als Objects mit allen nötigen Werten gespeichert werden
  var emotions = {
    panic: {
      colors: [b.color(26,25,18), b.color(118,119,113), b.color(60,58,59), b.color(26,25,18)],
      points: 0, // erhält später 0-10 Punkte
      v: 0 // wird später zu 1-4 je nachdem, ob es V1, V2, V3 oder V4 ist.
    },
    anger: {
      colors: [b.color(227,6,19), b.color(116,105,102), b.color(71,69,65), b.color(46,49,50)],
      points: 0,
      v: 0
    },

    // ...

    expectation: {
      colors: [b.color(20,185,252), b.color(11,165,67), b.color(241,237,234), b.color(225,228,18)],
      points: 0,
      v: 0
    }
  }


  // auf eine Eigenschaft einer Emotion kann man so zugreifen (z.B. Farben)
  b.println(emotions.panic.colors);


  // wie besprochen pro Frage den Objekten Punkte zuweisen
  // auf die Emotion Points kann man so zugreifen: emotionPoints.panic
  /*
  // Frage 1
  if(x1 > 0) {
    if(y1 > 0) {
      emotions.panic.points++;
      emotions.disgust.points++;
    }
    if(y1 > v2edge) {
      emotions.panic.points++;
      emotions.disgust.points++;
    }
  }

  if(x1 > -v2edge) {
    if(y1 < 0) {
      emotions.expectation.points++;
    }
    if(y1 < -v2edge) {
      emotions.expectation.points++;
    }
  }

  if(x1 < 0) {

  }

  //Frage 4
  if(x1 > 0) {

  }


  if(y4 < 0) {
    emotions.anger.points++;
  }
  if(y4 < -v2edge) {
    emotions.anger.points++;
  }
  */

  // ich bin zu faul oben die ganzen x1, y1 etc. Werte hinzuschreiben, deshalb weise ich für das Snippet den Emotionen Zufallszahlen von 1 - 10 zu, im finalen Script muss natürlich stattdessen der auskommentierte Teil oben vervollständigt werden
  for (var i = 0; i < emotionNames.length; i++) {
    var emotionName = emotionNames[i];
    emotions[emotionName].points = b.floor(b.random(11));
  }

  // nach dem Zählen der Punkt hat jede Emotion einen Punktwert zwischen 0 und 10
  b.println("--------------");
  b.println("panic: " + emotions.panic.points);
  b.println("anger: " + emotions.anger.points);
  b.println("expectation: " + emotions.expectation.points);


  // man kann übrigens über einen String auf eine bestimmte Emotion im Haupt emotions Object zugreifen, das wird gleich wichtig. Das nennt man Bracket notation, weil man dafür die eckigen Klammern braucht. Beispiel:
  b.println("--------------");
  b.println("Emotion points for panic: " + emotions["panic"].points);


  // genau so könnte man einen zufälligen Namen in einer Variablen abspeichern und dann auf den Punktwert von einer zufälligen Emotion zugreifen. Beispiel:
  var randomIndex = b.floor(b.random(emotionNames.length));
  var randomEmotionName = emotionNames[randomIndex];

  b.println("--------------");
  b.println("Random emotion: " + randomEmotionName);
  b.println("Points of this random emotion: " + emotions[randomEmotionName].points);


  // dominante Emotion herausfinden
  var highestEmotionPoints = 0;
  var dominantEmotion;
  for (var i = 0; i < emotionNames.length; i++) {
    var currentEmotion = emotionNames[i];
    var currentEmotionPoints = emotions[currentEmotion].points; // da ist sie wieder, die bracket notation. ;)
    if(currentEmotionPoints > highestEmotionPoints) {
      highestEmotionPoints = currentEmotionPoints;
      dominantEmotion = currentEmotion;
    }
  }

  b.println("--------------");
  b.println("Dominant emotion: " + dominantEmotion);


  // jetzt wissen wir alle Emotion points und können den Emotionen Werte von V1-V4 zuordnen, wenn die Emotion noch unter V4 liegt bleibt der Wert bei 0. Der Wert wird in der Eigenschaft v von Haupt emotions Object gespeichert
  for (var i = 0; i < emotionNames.length; i++) {
    var currentEmotion = emotionNames[i];
    var currentEmotionPoints = emotions[currentEmotion].points;
    if(currentEmotionPoints >= v1) {
      emotions[currentEmotion].v = 1;
    } else if (currentEmotionPoints >= v2) {
      emotions[currentEmotion].v = 2;
    } else if (currentEmotionPoints >= v3) {
      emotions[currentEmotion].v = 3;
    } else if (currentEmotionPoints >= v4) {
      emotions[currentEmotion].v = 4;
    }
  }

  b.println("--------------");

  for (var i = 0; i < emotionNames.length; i++) {
    var currentEmotion = emotionNames[i];
    b.println(currentEmotion + " is V" + emotions[currentEmotion].v);
  }


  // wenn die dominante Emotion V1 oder V2 ist, dann die dominanten Farben in die der dominanten Emotion ändern
  // du musst auch noch überlegen, was passiert, wenn z.B. 2 Emotionen 9 Punkte haben.
  if(emotions[dominantEmotion].v == 1 || emotions[dominantEmotion].v == 2) {
    dominantColors = emotions[dominantEmotion].colors;
  }


  // nachdem das alles geklärt ist, können jetzt einfach nach und nach die ganzen Funktionen abgearbeitet werden

  // Anger
  var a = 40; //Abstand

  if(emotions["anger"].v == 1) {
    Anger(1, a, 40, -a, 0); // (v, abstand, strokeWeight, startingY, startingX)
  }
  if(emotions["anger"].v == 2) {
    Anger(2, a, 20, -a, 0);
  }
  if(emotions["anger"].v == 3) {
    Anger(3, a, 10, -a, 0);
  }
  if(emotions["anger"].v == 4) {
    Anger(4, a, 5, -a, 0);
  }

  // Panic
  // etc.



  // Funktionen für die Emotionen
  function Anger (v, a, strokeWeight, startingX, startingY) {

      b.noFill();
      b.stroke(dominantColors[v - 1]); // Farbe 0 für V1, Farbe 1 für V2 etc.
      b.strokeWeight(strokeWeight);

      drawAngerShape(a, startingX, startingY);
      drawAngerShape(a, startingX, startingY + a);
      drawAngerShape(a, startingX, startingY + a * 2);
      if(v < 4) {
        // bei V4 werden die letzen beiden nicht gezeichnet
        drawAngerShape(a, startingX, startingY + a * 3);
        drawAngerShape(a, startingX, startingY + a * 4);
      }

    b.resetMatrix();

  }

  // und alle Unterfunktionen, die abgerufen werden, werden auch als Funktion festgelegt
  function drawAngerShape(a, startingX, startingY) {
    b.beginShape();
      b.vertex(startingX, startingY);
      b.vertex(startingX + 1 * a, startingY + a);
      b.vertex(startingX + 2 * a, startingY);
      b.vertex(startingX + 3 * a, startingY + a);
      b.vertex(startingX + 4 * a, startingY);
      b.vertex(startingX + 5 * a, startingY + a);
      b.vertex(startingX + 6 * a, startingY);
      b.vertex(startingX + 7 * a, startingY + a);
      // könnte man vielleicht auch als loop anlegen?
    b.endShape();
  }

}

b.go();
