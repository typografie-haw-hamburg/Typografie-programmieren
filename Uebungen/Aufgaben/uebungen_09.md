#Übungen #9

Macht bitte folgende Übungen bis zum nächsten Mittwoch. Wenn etwas nicht klappt, versucht euch untereinander zu helfen, zum Beispiel in der [Facebook-Gruppe «Script Design 2016 First Aid»](https://www.facebook.com/groups/1760227230910812/). Euren nicht funktionierenden Code könnt ihr dann in der [«Code Clinic»](https://github.com/typografie-haw-hamburg/Typografie-programmieren/tree/master/CodeClinic) hochladen, damit andere ihn sich ansehen können.

1. (**Slitscan**) Schreibt ein Script, dass eine Bildsequenz in Scheiben nebeneinander (oder übereinander) legt. Ein Beispiel ist [Dylan Mason's Arbeit «Everyday».](http://www.dylanmason.com/everyday/). Je nachdem, welche Art von Bildsequenz ihr verwendet, sehen die Ergebnisse sehr unterschiedlich aus. Verwendet entweder eine eigene Bildsequenz oder benutzt eine der Bildsequenzen, die ihr euch von mir im Kurs kopiert habt. Ihr müsst für das Script eventuell die Bildgrafik im Bildrahmen verschieben. Auf diese Grafik könnt ihr folgendermaßen zugreifen:
  ```js
  var myImage = b.image("myImage.jpg", 0, 0);
  var myGraphic = myImage.graphics[0];
  ```

2. (**Kreativaufgabe/Daten**) Stellt einen Datensatz auf interessante Weise visuell dar. Die Darstellung kann dabei so anschaulich oder abstrakt sein, wie ihr wollt. Als Datensatz könnt ihr entweder die von mir erstellte Datei [WetterHamburg.csv](https://github.com/typografie-haw-hamburg/Typografie-programmieren/blob/master/scripts/09_Daten.zip) verwenden oder aber besser: ihr sucht selbst online nach Daten im .csv-Format. Alternativ (ebenfalls besser) könnt ihr auch eine eigene Tabelle mit Daten in einem Tabellenkalkulationsprogramm erstellen und dann als .csv-Datei abspeichern.

  * Bedenkt, dass ihr, wenn ihr die Daten mit basil.js auslesen könnt mit diesen Daten alle möglichen Eigenschaften in InDesign steuern könnt: Schriftgröße, Position, Farben, Größe von Formen usw. Die Funktion `b.map()` kann dabei sehr nützlich sein.

  * Von der fertigen Visualisierung speichert ihr bitte ein JPEG ab (Datei -> Exportieren -> Format JPEG -> Qualität Hoch | Auflösung(ppi): 72) Benennt das exportierte JPEG `09_Kreativaufgabe_EuerName.jpg` und ladet es in [diesen Google Drive-Ordner](https://drive.google.com/open?id=0B6USBbEchpCkNGg3S1pyN0phLVE) hoch. Ladet euer Script bitte mit der Benennung `09_Kreativaufgabe_EuerName.jsx` in [den entsprechenden GitHub-Ordner](https://github.com/typografie-haw-hamburg/Typografie-programmieren/tree/master/Uebungen/Loesungen/09) hoch.

  * Ihr könnt euch auch gerne in das Thema JSON einarbeiten und statt einer .csv-Datei Daten im JSON-Format verwenden. Einen guten Einstieg in das Thema bietet die [YouTube Playlist «Working with data»](https://www.youtube.com/watch?v=rJaXOFfwGVw&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r) von Daniel Shiffman, in der er z.B. zeigt, wie man Daten im JSON-Format von Wetterportalen oder Zeitungen abrufen kann.