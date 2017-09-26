//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";


function draw() {

  b.clear( b.doc() );

  b.units(b.MM);
  var stepSize = 100;

  // gesamten Text der .csv-Datei auslesen
  var weatherString = b.loadString("WetterHamburg.csv");

  // ausgelesenen Text in einen Daten-Array umwandeln
  b.CSV.delimiter(";");
  var data = b.CSV.decode(weatherString);

  b.size(stepSize * data.length, 120);

  // zum Testen wird die Eigenschaft Luftfeuchtigkeit des ersten Datensets in die Konsole geschrieben
  b.println(data[0].Luftfeuchtigkeit);
  b.println(data[0].Luftfeuchtigkeit);



  for(var i = 0; i < data.length; i++) {

    var distance = 80+ i * stepSize;

    //Luftfeuchtigkeit= blauer Kreis
    b.fill(b.color (0,0,255));
    b.ellipse(distance, b.height/2, -data[i].Luftfeuchtigkeit, -data[i].Luftfeuchtigkeit);


    //Datum
    b.fill(b.color (0));
    var  text = b.text (data[i].Datum, distance-15 , b.height - 10, 50,20);
    b.typo (text, "appliedFont", "Helvetica Neue LT Std\t93 Black Extended");
    b.typo (text, "pointSize", 10);

    //Sonnenscheindauer
    b.fill(b.color(255,255,100));
    b.ellipse (distance, b.height/2, -data[i].Sonnenscheindauer+30, -data[i].Sonnenscheindauer+30);

          //Max, Min. Temperatur

                  // Extreme zeichnen
                    var inMin = -5.9;
                    var inMax = 17.3;
                    var diaOut = 10;

                    var outMin = -5.9
                    var outMax = 17.3;

                    var linePos=50
                    //Min.Temp zeichnen
                    var outYMin = b.map(data[i].TempTagesmin, inMin, inMax, outMin, outMax);
                      b.fill(b.color(100,200,240));
                      b.ellipse(distance, linePos+outYMin*2, diaOut, diaOut);
                    //Min.Temp-Typo
                    var  text = b.text (data[i].TempTagesmin, distance+5 , linePos+outYMin*2, 50,20);
                      b.typo (text, "appliedFont", "Helvetica Neue LT Std\t93 Black Extended");
                      b.typo (text, "pointSize", 7);

                   //Max.Temp zeichnen
                    var outYMax = b.map(data[i].TempTagesmax, inMin, inMax, outMin, outMax);
                    b.fill(b.color(255,150,0));
                    b.ellipse(distance, linePos+outYMax*2, diaOut, diaOut);
                    //Max.Temp-Typo
                    var  text = b.text (data[i].TempTagesmax, distance+5 , linePos+outYMax*2, 50,20);
                      b.typo (text, "appliedFont", "Helvetica Neue LT Std\t93 Black Extended");
                      b.typo (text, "pointSize", 7);
                    
                   //Temperaturlinie
                   b.stroke(b.color(0));
                   b.line(distance, linePos+outMin*2, distance, 50+outMax*2 );

 //Legende
        //TempMin
        b.fill(b.color(100,200,240));
        b.ellipse(27,7,diaOut, diaOut);
        var tempmin = b.text ("= Minimalste Tagestemperatur in Grad" , 35, 5,150,100);
        b.typo (tempmin, "appliedFont", "Helvetica Neue LT Std\t93 Black Extended");
        b.typo (text, "pointSize", 7);

         //TempMax
        b.fill(b.color(255,150,0));
        b.ellipse(172,7,diaOut, diaOut);
        var tempMax = b.text ("= Maximalste Tagestemperatur in Grad" , 180, 5,150,100);
        b.typo (tempMax, "appliedFont", "Helvetica Neue LT Std\t93 Black Extended");
        b.typo (text, "pointSize", 7);

        //Luftfeuchtigkeit
        b.fill(b.color (0,0,255));
        b.ellipse(172+150,7,diaOut, diaOut);
        var luft = b.text ("= Luftfeuchtigkeit" , 180+150, 5,150,100);
        b.typo (luft, "appliedFont", "Helvetica Neue LT Std\t93 Black Extended");
        b.typo (text, "pointSize", 7);

       //Sonnenscheindauer
    b.fill(b.color(255,255,100));
        b.ellipse(172+300,7,diaOut, diaOut);
        b.fill(b.color(0));
        var sun = b.text ("= Sonnenscheindauer" , 180+300, 5,150,100);
        b.typo (sun, "appliedFont", "Helvetica Neue LT Std\t93 Black Extended");
        b.typo (text, "pointSize", 7);






  }

}

b.go();

b.go();
