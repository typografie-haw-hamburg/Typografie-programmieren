// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function setup() {
  b.clear(b.doc());
  //b.units(b.MM);

  //JSON
  var jsonString = b.loadString(number +".json");
  var jsonData = b.JSON.decode(jsonString);
  b.println(number + ".json is loaded");



  //LEVEL
  var totalLevel = 0;
  for(var i = 0; i < jsonData.length; i++){         // summarize total level
    totalLevel += jsonData[i].level;
  }

  var levelAverage = totalLevel / jsonData.length;  // find average level

  var highestLevel = 0;                             // find highest level
  for(var i = 0; i < jsonData.length; i++) {
    var proofedLevelHigh = jsonData[i].level;

    if(proofedLevelHigh > highestLevel) {
      highestLevel = proofedLevelHigh;
    }
  }

  var lowestLevel = 1;                          // find lowest level
  for(var i = 0; i < jsonData.length; i++) {
    var proofedLevelLow = jsonData[i].level;

    if (proofedLevelLow < lowestLevel){
      lowestLevel = proofedLevelLow;
    }
  }



  // CENTROID
  var totalCentroid = 0;
  for(var i = 0; i < jsonData.length; i++){         // summarize total centroid
    totalCentroid += jsonData[i].centroid;
  }
  var centroidAverage = totalCentroid / jsonData.length;  // find average centroid

  var highestCentroid = 0;                             // find highest centroid
  for(var i = 0; i < jsonData.length; i++) {
    var proofedCentroidHigh = jsonData[i].centroid;

    if(proofedCentroidHigh > highestCentroid) {
      highestCentroid = proofedCentroidHigh;
    }
  }

  var lowestCentroid = 1;                          // find lowest centroid
  for(var i = 0; i < jsonData.length; i++) {
    var proofedCentroidLow = jsonData[i].centroid;

    if (proofedCentroidLow < lowestCentroid){
      lowestCentroid = proofedCentroidLow;
    }
  }



  // LEVELVOICE
  var totalLevelVoice = 0;
  for(var i = 0; i < jsonData.length; i++){       // summarize total levelVoice
      totalLevelVoice += jsonData[i].levelVoice;
    }
  var levelVoiceAverage = totalLevelVoice / jsonData.length;  // find average levelVoice

  var highestLevelVoice = 0;                             // find highest levelVoice
  for(var i = 0; i < jsonData.length; i++) {
    var proofedLevelVoiceHigh = jsonData[i].levelVoice;

    if(proofedLevelVoiceHigh > highestLevelVoice) {
      highestLevelVoice = proofedLevelVoiceHigh;
    }
  }

  var lowestLevelVoice = 255;                             // find lowest levelVoice
  for(var i = 0; i < jsonData.length; i++) {
    var proofedLevelVoiceLow = jsonData[i].levelVoice;

    if (proofedLevelVoiceLow < lowestLevelVoice){
      lowestLevelVoice = proofedLevelVoiceLow;
    }
  }



  // SOPRANO
  var totalSoprano = 0;
  for(var i = 0; i < jsonData.length; i++){       // summarize total soprano
    totalSoprano += jsonData[i].soprano;
  }
  var sopranoAverage = totalSoprano / jsonData.length;  // find average soprano

  var highestSoprano = 0;                             // find highest soprano
  for(var i = 0; i < jsonData.length; i++) {
    var proofedSopranoHigh = jsonData[i].soprano;

    if(proofedSopranoHigh > highestSoprano) {
      highestSoprano = proofedSopranoHigh;
    }
  }

  var lowestSoprano = 255;                             // find lowest soprano
  for(var i = 0; i < jsonData.length; i++) {
    var proofedSopranoLow = jsonData[i].soprano;

    if (proofedSopranoLow < lowestSoprano){
      lowestSoprano = proofedSopranoLow;
    }
  }



  // MEZZOSOPRANO
  var totalMezzosoprano = 0;
  for(var i = 0; i < jsonData.length; i++){       // summarize total mezzosoprano
    totalMezzosoprano += jsonData[i].mezzosoprano;
  }
  var mezzosopranoAverage = totalMezzosoprano / jsonData.length;  // find average mezzosoprano



 // CONTRALTO
  var totalContralto = 0;
  for(var i = 0; i < jsonData.length; i++){       // summarize total contralto
    totalContralto += jsonData[i].contralto;
  }
  var contraltoAverage = totalContralto / jsonData.length;  // find average contralto



 // ALTUS
  var totalAltus = 0;
  for(var i = 0; i < jsonData.length; i++){       // summarize total altus
    totalAltus += jsonData[i].altus;
  }
  var altusAverage = totalAltus / jsonData.length;  // find average altus



 // TENOR
  var totalTenor = 0;
  for(var i = 0; i < jsonData.length; i++){       // summarize total tenor
    totalTenor += jsonData[i].tenor;
  }
  var tenorAverage = totalTenor / jsonData.length;  // find average tenor



 // BARITONE
  var totalBaritone = 0;
  for(var i = 0; i < jsonData.length; i++){       // summarize total baritone
    totalBaritone += jsonData[i].baritone;
  }
  var baritoneAverage = totalBaritone / jsonData.length;  // find average baritone



  // BASS
  var totalBass = 0;
  for(var i = 0; i < jsonData.length; i++){       // summarize total bass
    totalBass += jsonData[i].bass;
  }
  var bassAverage = totalBass / jsonData.length;  // find average bass

  var highestBass = 0;                             // find highest bass
  for(var i = 0; i < jsonData.length; i++) {
    var proofedBassHigh = jsonData[i].bass;

    if(proofedBassHigh > highestBass) {
      highestBass = proofedBassHigh;
    }
  }

  var lowestBass = 255;                             // find lowest bass
  for(var i = 0; i < jsonData.length; i++) {
    var proofedBassLow = jsonData[i].bass;

    if (proofedBassLow < lowestBass){
      lowestBass = proofedBassLow;
    }
  }



  // FEMALELEVEL
  var totalFemaleLevel = 0;
  for(var i = 0; i < jsonData.length; i++){       // summarize total femaleLevel
    totalFemaleLevel += jsonData[i].femaleLevel;
  }
  var femaleLevelAverage = totalFemaleLevel / jsonData.length;  // find average femaleLevel

  var highestFemaleLevel = 0;                             // find highest femaleLevel
  for(var i = 0; i < jsonData.length; i++) {
    var proofedFemaleLevelHigh = jsonData[i].femaleLevel;

    if(proofedFemaleLevelHigh > highestFemaleLevel) {
      highestFemaleLevel = proofedFemaleLevelHigh;
    }
  }

  var lowestFemaleLevel = 255;                             // find lowest femaleLevel
  for(var i = 0; i < jsonData.length; i++) {
    var proofedFemaleLevelLow = jsonData[i].femaleLevel;

    if (proofedFemaleLevelLow < lowestFemaleLevel){
      lowestFemaleLevel = proofedFemaleLevelLow;
    }
  }



  // MALELEVEL
  var totalMaleLevel = 0;
  for(var i = 0; i < jsonData.length; i++){       // summarize total maleLevel
    totalMaleLevel += jsonData[i].maleLevel;
  }
  var maleLevelAverage = totalMaleLevel / jsonData.length;  // find average maleLevel

  var highestMaleLevel = 0;                             // find highest maleLevel
  for(var i = 0; i < jsonData.length; i++) {
    var proofedMaleLevelHigh = jsonData[i].maleLevel;

    if(proofedMaleLevelHigh > highestMaleLevel) {
      highestMaleLevel = proofedMaleLevelHigh;
    }
  }

  var lowestMaleLevel = 255;                             // find lowest maleLevel
  for(var i = 0; i < jsonData.length; i++) {
    var proofedMaleLevelLow = jsonData[i].maleLevel;

    if (proofedMaleLevelLow < lowestMaleLevel){
      lowestMaleLevel = proofedMaleLevelLow;
    }
  }


  // b.println("levelAverage: " + levelAverage + "; ");
  // b.println("levelVoiceAverage: " + levelVoiceAverage + "; ");
  // b.println("highestLevelVoice: " + highestLevelVoice + "; ");
  // b.println("lowestLevelVoice: " + lowestLevelVoice + "; ");
  // b.println("femaleLevel: " + femaleLevelAverage + "; ");
  // b.println("highestFemaleLevel: " + highestFemaleLevel + "; ");
  // b.println("lowestFemaleLevel: " + lowestFemaleLevel + "; ");
  // b.println("maleLevel: " + maleLevelAverage + "; ");
  // b.println("highestMaleLevel: " + highestMaleLevel + "; ");
  // b.println("lowestMaleLevel: " + lowestMaleLevel + "; ");
  // b.println("soprano: " + sopranoAverage + "; ");
  // b.println("highestSoprano: " + highestSoprano + "; ");
  // b.println("lowestSoprano: " + lowestSoprano + "; ");
  // b.println("mezzosoprano: " + mezzosopranoAverage + "; ");
  // b.println("contralto: " + contraltoAverage + "; ");
  // b.println("altus: " + altusAverage + "; ");
  // b.println("tenor: " + tenorAverage + "; ");
  // b.println("baritone: " + baritoneAverage + "; ");
  // b.println("bass: " + bassAverage + "; ");
  // b.println("highestBass: " + highestBass + "; ");
  // b.println("lowestBass: " + lowestBass + "; ");
  // b.println("centroidAverage: " + centroidAverage + "; ");
  // b.println("lowestCentroid: " + lowestCentroid + "; ");
  // b.println("highestCentroid: " + highestCentroid + "; ");







  // TEXT
  b.textFont("Legato TF", "Regular");
  var pointSizeStart = 7.5;
  var textLeading = 16.5;

  b.textSize(pointSizeStart);
  b.textLeading(textLeading);


  var myText = b.loadString(number + ".txt");


  var xText = 10;
  var yText = 10;
  var wText = b.width;
  var hText = b.height;
  var tf = b.text(myText, xText, yText, wText, hText);
  var myCharacters = b.characters(tf);
  b.println(number + ".txt is loaded");

  for (var i = 0; i < myCharacters.length; i++){

    //  map baselineshift to centroid
    var input = jsonData[i].centroid;
    var inMin = 0;
    var inMax = 10000;
    var outMin = -11;
    var outMax = 11;
    var baselineShiftValue = b.map(input, inMin, inMax, outMin, outMax);
    b.typo(myCharacters[i], 'baselineShift', baselineShiftValue);



    // map pointsize to levelVoice
    var characterBounds = b.bounds(myCharacters[i]);
    var letterWidthBefore = characterBounds.width;      // get character width before mapping from pointSizeStart (9)
    var rightBoundBefore = characterBounds.right;

    var inputPoint = jsonData[i].levelVoice;
    var inPointMin = lowestLevelVoice;
    var inPointMax = highestLevelVoice;
    var outPointMin = 5;
    var outPointMax = pointSizeStart;
    var pointSizeValue = b.map(inputPoint, inPointMin, inPointMax, outPointMin, outPointMax);
    b.typo(myCharacters[i], 'pointSize', pointSizeValue);

    characterBounds = b.bounds(myCharacters[i]);
    var letterWidthAfter = characterBounds.width;     // get character width after mapping the pointsize
    var rightBoundAfter = characterBounds.right;



    // map horizontalScale to bass
    if (jsonData[i].maleLevel > jsonData[i].femaleLevel) {
      var multiMale = jsonData[i].maleLevel / jsonData[i].femaleLevel;
    } else {
      var multiMale = 1;
    }

    var inputHori = jsonData[i].bass;
    var inHoriMin = lowestBass;
    var inHoriMax = highestBass;
    var outHoriMin = 50 * multiMale;
    var outHoriMax = 165 * multiMale;
    var horizontalScaleValue = b.map(inputHori, inHoriMin, inHoriMax, outHoriMin, outHoriMax);
    b.typo(myCharacters[i], 'horizontalScale', horizontalScaleValue);



    // map verticalScale to soprano
    if (jsonData[i].maleLevel < jsonData[i].femaleLevel) {
      var multiFemale = jsonData[i].femaleLevel / jsonData[i].maleLevel;
    } else {
      var multiFemale = 1;
    }

    var inputVerti = jsonData[i].soprano;
    var inVertiMin = lowestSoprano;
    var inVertiMax = highestSoprano;
    var outVertiMin = 50 * multiFemale;
    var outVertiMax = 165 * multiFemale;
    var verticalScaleValue = b.map(inputVerti, inVertiMin, inVertiMax, outVertiMin, outVertiMax);
    b.typo(myCharacters[i], 'verticalScale', verticalScaleValue);



    // map level to strokeWeight
    var black = b.color(0);
    var strokeMinValue = 0;
    var strokeMaxValue = 0.35;
    var strokeValue = b.map(jsonData[i].level, lowestLevel, highestLevel, strokeMinValue, strokeMaxValue);;
    b.typo(myCharacters[i], 'strokeColor', black);
    b.typo(myCharacters[i], 'strokeWeight', strokeValue);


    // // change tracking
    // var letterWidthDiff = letterWidthBefore - letterWidthAfter;
    // var trackingValue = letterWidthDiff * 100 * -1.25;
    // b.typo(myCharacters[i], 'tracking', trackingValue);
    // b.println("trackingValue = " + trackingValue);

    // // change right bound
    // var letterBoundDiff = rightBoundBefore - rightBoundAfter;
    // var trackingBoundValue = (Math.abs(letterBoundDiff / 2) * 500) * -1;
    // b.println("letterBoundDiff = " + letterBoundDiff);

    // if(myCharacters[i].contents[0] == " "){
    //   trackingBoundValue = 0;
    // }

    // b.typo(myCharacters[i], 'tracking', trackingBoundValue);
    // var newLeftBound = characterBounds.left - trackingBoundValue;
  }

  b.addPage();




}
b.go();