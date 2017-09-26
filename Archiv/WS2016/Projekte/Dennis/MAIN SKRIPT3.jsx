//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {
 
 var tf = b.selections()[0];
 
 var org_item= ["Mensch", "Menschen", "menschlich", "menschenähnlich", "menschenähnlicher", "menschenähnlichen", "menschliche", "menschlicher", "menschlichens", "menschliches", "Leben", "lebendig","leben", "ausleben", "Tod", "tötlich", "Todes", "Tier", "Tiere", "natürlich", "natürliche", "natürlichen", "natürliches", "natürlicher", "Atem", "atmen", "Körper", "Körpers", "Menschenkörper", "Körperregion", "Körperregionen","Organ", "Organe", "Blut", "Bluts", "bluten", "Sex", "sexuell", "sexuelle", "sexueller", "Sexualpartner", "sexuellen", "sexuelles", "sehen", "denken", "reden", "sprechen", "sprach", "Sprache", "Hirn", "Gehirn", "Bein", "Beine", "Kopf", "Kopfes", "Köpfe", "Arm", "Arme", "Nerven", "Nervenzellen", "Biologie", "biologisch", "biologische", "biologischer", "biologischen", "biologisches", "Neurobiologie", "Gesicht", "Person", "Herz", "Herzen", "sehen", "hören", "fühlen", "Gespräch", "Gesprächspartner", "Herzfrequenz", "Herzfrequenzen", "Atemfrequenz", "Atemfrequenzen", "Körpertemperatur", "Schmerz", "Schmerzen", "schmerzen", "Bionik", "bionisch", "bionischer", "bionische", "bionisches", "bionischen", "Haut", "Adern", "wachsen", "Eltern", "Kind", "Kinder", "Vater", "Väter", "Mutter", "Mütter", "Muttersprache", "Essen", "essen", "trinken", "Trinken", "Willen", "Urteilsvermögen", "Hand", "Hände", "Finger", "Füsse", "Fuss", "Erziehung", "erziehen", "Nahrung", "Gesellschaft", "Soziologie", "soziologisch", "Schlaf", "schlafen", "Willenskraft", "Gedanke", "Gedanken", "sterben", "human", "humanistisch", "humanistische", "humanistischen", "humanistisches", "humanistischer", "Sprachfähigkeit", "körperlich", "körperliche", "körperlicher", "körperlichen", "körperliches", "Personenkreis", "Körperbehinderung", "Sprachstörung", "Sprachstörungen", "Hightech", "Sehbehinderten", "Sehbehinderte", "Sehschäden", "Sehschaden", "Lebens", "Büromensch"];

 var positionArray = [{}]

b.words(tf, function(value,index){
  for(i=0; i<org_item.length; i++){
if(b.trimWord(value.contents)==org_item[i])
{

  b.words(value,function(v_item,i_item){
var bounds = b.bounds(v_item)
var letter = b.trimWord(v_item.contents);
  positionArray.push({
    'x': bounds.left,
    'y':bounds.top-1,
    'width':bounds.width,
    'height':bounds.height})
  })
}
}
})
var green = b.color(0, 255 ,0)
b.stroke(green)
b.fill(green)
 var opacity = 50; 
 for(j=0;j<positionArray.length;j++)
 {
      if(positionArray[j].x!= undefined)
      {
        if(j+1!=positionArray.length){
          b.opacity(b.rect(positionArray[j].x, positionArray[j].y,positionArray[j].width, positionArray[j].height),opacity); 
         
           b.opacity(b.line(positionArray[j].x, positionArray[j].y, positionArray[j+1].x, positionArray[j+1].y),opacity);
            }
            else
            {
              b.opacity(b.rect(positionArray[j].x, positionArray[j].y,positionArray[j].width, positionArray[j].height),opacity);
            }
       }
 }

var tf = b.selections()[0];
 
 var org_item= ["Maschine", "Maschinen", "maschinell", "maschinelles", "maschinellen", "maschinelle", "Programm", "Programme", "Technik", "technologisch", "technologischen", "technologische", "technologisches", "Technologie", "Technologien", "Mechanik", "mechanisch", "mechanische", "mechanischen", "mechanisches", "digital", "digitale", "digitales", "digitalen", "online", "Internet", "Internets", "Smarthphone", "Browser", "Browsers", "Roboter", "Roboters", "Robotik", "Robo", "Elektronik", "Cyborg", "Cyborgs", "Industrie", "Industrien", "Netzwerk", "Netzwerke", "Netzwerks", "Computer", "Computers", "Droid", "Droids", "Skript", "Skripte", "Google", "Facebook", "Twitter", "Kamera", "Kameras", "Notebook", "Notebooks", "Motor", "Motoren", "Motors", "Automat","Automaten", "automatisch", "automatischen", "automatisches", "automatischer", "Bildschirm", "Bildschirme", "Bot", "Bots", "Chip", "Chips", "Website", "Websites", "Software", "Roboter-Laufhäusern", "Sensor", "Sensoren", "Sensortechnik", "Akku", "computergesteuert", "computergesteuerter", "computergesteuertes", "computergesteuerten", "Chat", "Chatbot", "Chatbots", "Computerprogramm", "Computerprogramme", "Computerprogramms", "Computerprogrammen", "Online-Chat", "Mail", "e-mail", "Daten", "Cobots", "Sexroboter", "Sexroboters", "Robo-Advisor", "Robo-Advisors", "PC", "PCs", "Technologieentwicklung", "Sensorik", "Smartphones", "Digitalisierung", "Tablet", "Tablets", "Robotern", "Sensodaten", "Beschleunigungssensoren", "Technologieführer", "World Wide Web", "Cyber", "Cyberspace", "Software-Entwickler", "Multimedialität", "Wiedergabeprogramme", "Hyperlinks", "Web-Autoren", "Webseiten", "Webseite", "Monitoren", "Tastatur", "Tastatur", "Navigationsmechanismen", "Pop-up-Fenster", "Computerschnittstelle", "Screen-Reader-Software", "Bildschirmzeile", "Cursor", "Mauszeiger", "Bildschirmlupe", "Apparate", "Apparat", "", "Macintosh-Betriebssystem", "Macintosh", "Tastaturmaus", "Shortcuts", "Stereoanlage", "Fernseher", "Tastenkombinationen", "Taste", "Taste", "Systemsteuerung"];

 var positionArray = [{}]

b.words(tf, function(value,index){
  for(i=0; i<org_item.length; i++){
if(b.trimWord(value.contents)==org_item[i])
{

  b.words(value,function(v_item,i_item){
var bounds = b.bounds(v_item)
var letter = b.trimWord(v_item.contents);
  positionArray.push({
    'x': bounds.left,
    'y':bounds.top-1,
    'width':bounds.width,
    'height':bounds.height})
  })
}
}
})
var red = b.color(255, 0 ,0)
b.stroke(red)
b.fill(red)
 var opacity = 50;
 for(j=0;j<positionArray.length;j++)
 {
      if(positionArray[j].x!= undefined)
      {
        if(j+1!=positionArray.length){
          b.opacity(b.rect(positionArray[j].x, positionArray[j].y,positionArray[j].width, positionArray[j].height),opacity);
         
           b.opacity(b.line(positionArray[j].x, positionArray[j].y, positionArray[j+1].x, positionArray[j+1].y),opacity);
            }
            else
            {
              b.opacity(b.rect(positionArray[j].x, positionArray[j].y,positionArray[j].width, positionArray[j].height),opacity);
            }
       }
 }






}
b.go();
