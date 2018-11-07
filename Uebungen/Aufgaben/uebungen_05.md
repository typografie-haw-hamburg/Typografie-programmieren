# Übungen #5

Macht bitte folgende Übungen bis zum nächsten _Montag_(!). Schaut euch zur Hilfe auch [die von mir hochgeladenen Scripts aus dem Kurs](https://github.com/typografie-haw-hamburg/Typografie-programmieren/tree/master/Kurs/05) an und helft euch gerne wieder untereinander.

1. Baut eine experimentelle Uhr, bei der man die Zeit an der Position von Kreisen ablesen kann. Es gibt einen Kreis für Stunden, einen für Minuten und einen für Sekunden. Um 00:30:59 ist z.B. der Stundenkreis ganz oben, der Minutenkreis in der Mitte der Seite und er Sekundenkreis ganz unten. Im Kurs habt ihr gelernt, dass man den aktuellen Stundenwert mit `hour()` auslesen kann, die anderen Befehle bekommt ihr dann wohl selbst raus. Zum Positionieren braucht ihr natürlich wieder den `map()`-Befehl.

  * Erweitert das Script so, dass sich auch die Farbe oder eine andere Eigenschaft der Kreise im Laufe des Tages / der Stunde / der Minute ändern.

2. Schreibt ein Script, bei dem ihr zunächst wieder einen Text aus einer Textdatei ins Dokument ladet. Ändert den Text dann so, dass die Wörter von Wort zu Wort immer größer werden (z.B. erstes Wort Schriftgröße 3, zweites Wort Schriftgröße 4 usw.). Dazu braucht ihr den `map()`-Befehl erst mal nicht, ihr müsst mir der Variable `i` arbeiten.

  * Optional, da tricky: Wenn ihr das geschafft habt, versucht das Script so abzuändern, dass ihr genau steuern könnt, wie groß das erste Wort ist und wie groß das letzte (z.B. erstes Wort Schriftgröße 3, letztes Wort Schriftgröße 40, alle Worte dazwischen entsprechend abgestuft). Dazu braucht ihr wieder `map()` denn ihr müsst einen bestimmten Eingangsbereich in den Ausgangsbereich von 3 bis 40 umwandeln.

3. Wir haben gelernt, wie man mit `loadString()` eine Textdatei ins Dokument laden kann. Versucht mit der Basil-Reference herauszufinden, wie man ein Bild ins Dokument laden kann. Wenn ihr das geschafft habt, versucht mit einem Loop mehrmals das gleiche Bild im Dokument zu platzieren, so dass ein interessate Gestaltung steht, versucht dazu auch die Bilder zu drehen oder zu skalieren (mit dem Befehl `transform()`).

4. (**Kreativaufgabe**) Versucht mit eurem Wissen über das bisher gelernte eine interessante Gestaltung per Script zu erstellen. In eurem Script soll Text verwendet werden. Speichert von diesem Design ein JPEG ab (Datei -> Exportieren -> Format JPEG -> Qualität Hoch | Auflösung(ppi): 72).

    * Benennt die exportierten JPEGs `05_Kreativaufgabe_EuerName.jpg` und ladet sie in [diesen Google Drive-Ordner](https://drive.google.com/drive/folders/1GdBTpg3Xufp2KlHHvsp9b3l3fKOEEICN?usp=sharing) hoch. Ladet euer Script bitte mit der Benennung `05_Kreativaufgabe_EuerName.jsx` in [diesen  GitHub-Ordner](https://github.com/typografie-haw-hamburg/Typografie-programmieren/tree/master/Uebungen/Loesungen) hoch (oben auf `Upload files` klicken, Script in das Fenster ziehen, unten mit `Commit changes` abspeichern).
