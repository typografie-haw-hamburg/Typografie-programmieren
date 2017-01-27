// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  // grün
  b.layer("Gruen");
  var tf = b.selection();
  var story = tf.parentStory;
  var currentPage = tf.parentPage;

  var org_item = ["Mensch", "Leben", "lebendig", "leben", "ausleben", "Tod", "tötlich", "Todes", "Tier", "Tiere", "natürlich", "natürliche", "natürlichen", "natürliches", "natürlicher", "Atem", "atmen", "Körper", "Körpers", "Menschenkörper", "Körperregion", "Körperregionen", "Organ", "Organe", "Blut", "Bluts", "bluten", "Sex", "sexuell", "sexuelle", "sexueller", "Sexualpartner", "sexuellen", "sexuelles", "sehen", "denken", "reden", "sprechen", "sprach", "Sprache", "Hirn", "Gehirn", "Bein", "Beine", "Kopf", "Kopfes", "Köpfe", "Arm", "Arme", "Nerven", "Nervenzellen", "Biologie", "biologisch", "biologische", "biologischer", "biologischen", "biologisches", "Neurobiologie", "Gesicht", "Person", "Herz", "Herzen", "sehen", "hören", "fühlen", "Gespräch", "Gesprächspartner", "Herzfrequenz", "Herzfrequenzen", "Atemfrequenz", "Atemfrequenzen", "Körpertemperatur", "Schmerz", "Schmerzen", "schmerzen", "Bionik", "bionisch", "bionischer", "bionische", "bionisches", "bionischen", "Haut", "Adern", "wachsen", "Eltern", "Kind", "Kinder", "Vater", "Väter", "Mutter", "Mütter", "Muttersprache", "Essen", "essen", "trinken", "Trinken", "Willen", "Urteilsvermögen", "Hand", "Hände", "Finger", "Füsse", "Fuss", "Erziehung", "erziehen", "Nahrung", "Gesellschaft", "Soziologie", "soziologisch", "Schlaf", "schlafen", "Willenskraft", "Gedanke", "Gedanken", "sterben", "human", "humanistisch", "humanistische", "humanistischen", "humanistisches", "humanistischer", "Sprachfähigkeit", "körperlich", "körperliche", "körperlicher", "körperlichen", "körperliches", "Personenkreis", "Körperbehinderung", "Sprachstörung", "Sprachstörungen", "Hightech", "Sehbehinderten", "Sehbehinderte", "Sehschäden", "Sehschaden", "Lebens", "Büromensch"];

  var positionArray = [{}];

  var myWords = b.words(story);

  for (var i = 0; i < myWords.length; i++) {


    for (var j = 0; j < org_item.length; j++) {

      if(  b.startsWith(myWords[i].contents.toLowerCase(), org_item[j].toLowerCase()) == true ) {
        b.println(myWords[i].contents);
        var bounds = b.bounds(myWords[i]);

        positionArray.push({
            x: bounds.left,
            y: bounds.top - 1,
            width: bounds.width,
            height: bounds.height,
            page: myWords[i].parentTextFrames[0].parentPage,
            angle: myWords[i].parentTextFrames[0].absoluteRotationAngle,
            hs: myWords[i].horizontalOffset,
            he: myWords[i].endHorizontalOffset,
            bs: myWords[i].baseline,
            be: myWords[i].endBaseline,
            as: myWords[i].ascent
        });


        break;
      }
    }

  }

  var green = b.color(0, 255, 0);
  b.stroke(green);
  b.fill(green);
  var opacity = 50;

  var xPos, yPos, rectWidth, rectHeight, nextXPos, nextYPos;

  for(j = 0; j < positionArray.length; j++) {

    var currentWord = positionArray[j];
    var nextWord = positionArray[j + 1];

    // wenn das Wort auf einer neuen Seite liegt, sollen alle Elemente auf der neuen Seite gezeichnet werden
    if(currentPage != currentWord.page) {
      currentPage = currentWord.page;
      b.page(currentPage);
    }


    if(currentWord.x != undefined) {
      if(j + 1 != positionArray.length) {

        // wenn der kommenden Frame auf einer anderen Seite ist, muss das Ende der Linie auf der nächsten Seite liegen
        if(currentWord.page != nextWord.page) {
          var lineEndOffset = b.width;
        } else {
          var lineEndOffset = 0;
        }

        if(currentWord.angle == 90) {
          xPos = currentWord.hs - currentWord.as;
          yPos = currentWord.be;
          rectWidth = currentWord.as;
          rectHeight = currentWord.bs - currentWord.be;
          yPosLine = currentWord.bs;
        } else {
          xPos = currentWord.x;
          yPos = currentWord.y;
          rectWidth = currentWord.width;
          rectHeight = currentWord.height;
          yPosLine = yPos;
        }

        if(nextWord.angle == 90) {
          nextXPos = nextWord.hs - nextWord.as;
          nextYPos = nextWord.bs;
        } else {
          nextXPos = nextWord.x;
          nextYPos = nextWord.y;
        }

        b.opacity(b.rect(xPos, yPos, rectWidth, rectHeight), opacity);
        b.opacity(b.line(xPos, yPosLine, nextXPos + lineEndOffset, nextYPos ), opacity);


      } else {

        if(currentWord.angle == 90) {
          xPos = currentWord.hs - currentWord.as;
          yPos = currentWord.be;
          rectWidth = currentWord.as;
          rectHeight = currentWord.bs - currentWord.be;
          yPosLine = currentWord.bs;
        } else {
          xPos = currentWord.x;
          yPos = currentWord.y;
          rectWidth = currentWord.width;
          rectHeight = currentWord.height;
          yPosLine = yPos;
        }

        b.opacity(b.rect(xPos, yPos, rectWidth, rectHeight), opacity);
      }
    }
  }


  // // rot
  // b.layer("Rot");
  // var story = b.selections()[0].parentStory;

  // var org_item = ["Maschine", "Maschinen", "maschinell", "maschinelles", "maschinellen", "maschinelle", "Programm", "Programme", "Technik", "technologisch", "technologischen", "technologische", "technologisches", "Technologie", "Technologien", "Mechanik", "mechanisch", "mechanische", "mechanischen", "mechanisches", "digital", "digitale", "digitales", "digitalen", "online", "Internet", "Internets", "Smarthphone", "Browser", "Browsers", "Roboter", "Roboters", "Robotik", "Robo", "Elektronik", "Cyborg", "Cyborgs", "Industrie", "Industrien", "Netzwerk", "Netzwerke", "Netzwerks", "Computer", "Computers", "Droid", "Droids", "Skript", "Skripte", "Google", "Facebook", "Twitter", "Kamera", "Kameras", "Notebook", "Notebooks", "Motor", "Motoren", "Motors", "Automat", "Automaten", "automatisch", "automatischen", "automatisches", "automatischer", "Bildschirm", "Bildschirme", "Bot", "Bots", "Chip", "Chips", "Website", "Websites", "Software", "Roboter-Laufhäusern", "Sensor", "Sensoren", "Sensortechnik", "Akku", "computergesteuert", "computergesteuerter", "computergesteuertes", "computergesteuerten", "Chat", "Chatbot", "Chatbots", "Computerprogramm", "Computerprogramme", "Computerprogramms", "Computerprogrammen", "Online-Chat", "Mail", "e-mail", "Daten", "Cobots", "Sexroboter", "Sexroboters", "Robo-Advisor", "Robo-Advisors", "PC", "PCs", "Technologieentwicklung", "Sensorik", "Smartphones", "Digitalisierung", "Tablet", "Tablets", "Robotern", "Sensodaten", "Beschleunigungssensoren", "Technologieführer", "World Wide Web", "Cyber", "Cyberspace", "Software-Entwickler", "Multimedialität", "Wiedergabeprogramme", "Hyperlinks", "Web-Autoren", "Webseiten", "Webseite", "Monitoren", "Tastatur", "Tastatur", "Navigationsmechanismen", "Pop-up-Fenster", "Computerschnittstelle", "Screen-Reader-Software", "Bildschirmzeile", "Cursor", "Mauszeiger", "Bildschirmlupe", "Apparate", "Apparat", "", "Macintosh-Betriebssystem", "Macintosh", "Tastaturmaus", "Shortcuts", "Stereoanlage", "Fernseher", "Tastenkombinationen", "Taste", "Taste", "Systemsteuerung"];

  // var positionArray = [{}];

  // b.words(story, function(value, index) {
  //   for(i = 0; i < org_item.length; i++) {
  //     if(b.trimWord(value.contents) == org_item[i]) {

  //       b.words(value, function(v_item, i_item) {
  //         var bounds = b.bounds(v_item);
  //         var letter = b.trimWord(v_item.contents);
  //         positionArray.push({
  //           x: bounds.left,
  //           y: bounds.top - 1,
  //           width: bounds.width,
  //           height: bounds.height});
  //       });
  //     }
  //   }
  // });
  // var red = b.color(255, 0, 0);
  // b.stroke(red);
  // b.fill(red);
  // var opacity = 50;
  // for(j = 0; j < positionArray.length; j++) {
  //   if(positionArray[j].x != undefined) {
  //     if(j + 1 != positionArray.length) {
  //       b.opacity(b.rect(positionArray[j].x, positionArray[j].y, positionArray[j].width, positionArray[j].height), opacity);

  //       b.opacity(b.line(positionArray[j].x, positionArray[j].y, positionArray[j + 1].x, positionArray[j + 1].y), opacity);
  //     } else {
  //       b.opacity(b.rect(positionArray[j].x, positionArray[j].y, positionArray[j].width, positionArray[j].height), opacity);
  //     }
  //   }
  // }

// Textebene nach oben bewegen


}
b.go();
