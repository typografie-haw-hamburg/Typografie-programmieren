#Übungen #4

Macht bitte folgende Übungen bis zum nächsten Mittwoch. Wenn etwas nicht klappt, versucht euch untereinander zu helfen, zum Beispiel in der [Facebook-Gruppe «Script Design 2016 First Aid»](https://www.facebook.com/groups/1760227230910812/) (Bis jetzt ist da noch nicht viel Leben in der Gruppe. Nutzt die Möglichkeit euch dort helfen zu lassen und anderen zu helfen!).

1. Schreibt ein Script, das Kreise zufällig auf einer Seite platziert (Déjà-vu, anyone?). Legt in eurem Script zwei Farben fest. Wenn die Kreise im rechten oberen Viertel der Seite landen, sollen die Kreise mit Farbe 1 gefüllt werden. Landen die Kreise im linken unteren Viertel, sollen sie mit Farbe 2 gefüllt werden. Alle anderen Kreise sollen schwarz gefüllt werden. Verwendet zum Überprüfen, ob zwei Eigenschaften gleichzeitig zutreffen den Operator *&&*.

  * Ändert das Script so ab, dass ihr fünf verschiedene Farben festlegt. Per Zufall sollen dann zwei dieser Farben ausgewählt werden. Tipp: Dazu könnt ihr die Farben in einen Array legen.

2. Sucht euch auf der GitHub-Seite [Corpora](https://github.com/dariusk/corpora), die im Kurs vorgestellt wurde, ein Datenset heraus, das einen Array erhält. Kopiert diesen Array in euer Script und formatiert den Array so, dass er keine Zeilenumbrüche und keine unnötigen Leerzeichen mehr enthält. [Hier](https://github.com/typografie-haw-hamburg/Typografie-programmieren/wiki/Sublime) findet ihr die Shortcuts für Sublime, die euch das ermöglichen sollten.

  * Schreibt zunächst ein Script, das euch einen Textrahmen mit einem zufälligen Eintrag aus dem Array anlegt.

  * Ändert das Script dann so, dass ihr für jeden Eintrag aus dem Array einen Textrahmen auf der Seite festlegt.

  * Ändert das Script dann ein weiteres mal, so dass nur Einträge, die mit einem bestimmten Buchstaben beginnen als Textrahmen angelegt werden (z.B. alle Einträge, die mit "A" beginnen.)

3. Schaut euch [dieses Beispielscript](https://github.com/typografie-haw-hamburg/Typografie-programmieren/blob/master/scripts/04_words.jsx) an, bei dem der Grundlinienversatz einzelner Wörter zufällig festgelegt wird. Schreibt ein Script, bei dem eine andere Texteigenschaft (Punktgröße, Kerning, Vertikale Skalierung etc.) zufällig Wort für Wort (oder Buchstabe für Buchstabe) verändert wird. Um herauszufinden, wie die Eigenschaften heißen, die ihr ändern könnt, könnt ihr das [basil.js b.typo Cheat Sheet](http://basiljs.ch/wp-content/uploads/2013/03/basiljs_b_typo_cheatsheet_v0_2.pdf) benutzen.

  * Ändert das Script so ab, dass sich die Eigenschaft nicht zufällig verändert, sondern abhängig davon, an welcher Stelle im Text das Wort steht. Z.B.: Die Skalierung erhöht sich von Wort zu Wort. Dazu müsst ihr die Variable i verwenden.

4. Schaut euch die Lösungs-Scripts von anderen Studenten im [entsprechenden GitHub-Ordner](https://github.com/typografie-haw-hamburg/Typografie-programmieren/tree/master/Uebungen/Loesungen) an. Sucht euch ein Script aus, das euch gefällt und ändert es so ab, dass sich das Ergebnis eures geänderten Scripts visuell deutlich vom ursprünglichen Ergebnis unterscheidet.
  * Tipp: [Hier](https://github.com/typografie-haw-hamburg/Typografie-programmieren/blob/master/Uebungen/Loesungen/Loesungen_01-03.zip) könnt ihr eine zip-Datei mit allen bisher eingereichten Lösungen herunterladen. Achtet aber auch darauf, ob schon neue Scripts für Woche 04 hochgeladen worden sind, diese befinden sich dann noch nicht in der zip-Datei.

5. (**Kreativaufgabe**) Versucht mit eurem Wissen über das bisher gelernte eine interessante Gestaltung bzw. ein interessantes Muster per Script zu erstellen. In eurem Script soll ein Array verwendet werden. Speichert von diesem Design ein JPEG ab (Datei -> Exportieren -> Format JPEG -> Qualität Hoch | Auflösung(ppi): 72).

  * Benennt das exportierte JPEG `04_Kreativaufgabe_EuerName.jpg` und ladet es in [diesen Google Drive-Ordner](https://drive.google.com/open?id=0B6USBbEchpCkNGg3S1pyN0phLVE) hoch. Ladet euer Script bitte mit der Benennung `04_Kreativaufgabe_EuerName.jsx` in [den entsprechenden GitHub-Ordner](https://github.com/typografie-haw-hamburg/Typografie-programmieren/tree/master/Uebungen/Loesungen) hoch (oben auf `Upload files` klicken, Script in das Fenster ziehen, unten mit `Commit changes` abspeichern).