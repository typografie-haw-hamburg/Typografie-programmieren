# Übungen #3

Macht bitte folgende Übungen bis zum nächsten Mittwoch. Wenn etwas nicht klappt, versucht zunächst selbst herauszufinden, woran es liegen könnte. Alternativ könnt ihr euch untereinander helfen, zum Beispiel auch in der [Facebook-Gruppe «Typografie Programmieren»](https://www.facebook.com/groups/1760227230910812/), die im vorherigen Kurs für diesen Zweck eingerichtet wurde.

1. Schreibt ein Script, das 10 Rechtecke auf einer Seite untereinander zeichnet. Die Rechtecke sollen mit jedem Schritt breiter werden, immer um den gleichen Abstand. Sucht euch eine weitere Eigenschaft aus (Farbe, Kontur, Konturstärke etc.), die sich ebenfalls Schritt für Schritt ändern.

    - Ändert das Script so, dass ab der Hälfte (ab dem 6. Rechteck) keine Rechtecke mehr gezeichnet werden, sondern Kreise. (Tipp: Dazu könnt ihr ein `if()`-Statement benutzen.)

2. Ladet euch [dieses Script](https://github.com/typografie-haw-hamburg/Typografie-programmieren/blob/master/Kurs/03/01_Linie.jsx) aus dem Kurs herunter. Das Script zeichnet eine durchgehende Linie, die sich zufällig über die Seite verteilt. Erweitert das Script so, dass Kreise auf den Eckpunkten der Linie gezeichnet werden.

    * Ändert das Script im zweiten Schritt so, dass auf den Eckpunkten nach Zufall entweder Kreise oder Quadrate gezeichnet werden.

3. Schreibt ein Script, das ein Quadrat links oben auf der Seite platziert. Der Nutzer soll durch eine Eingabe in einem `prompt()`-Fenster selbst festlegen können, welche Seitenlänge dieses Quadrat hat. Wenn das Quadrat mit der angegebenen Seitenlänge zu breit ist, um auf die Seite zu passen, soll kein Quadrat gezeichnet werden, stattdessen soll dem Nutzer ein Hinweisfenster ausgegeben werden, dass ein Quadrat dieser Seitenlänge nicht auf die Seite passt. Ein Hinweisfenster könnt ihr mit `alert('Hallo')` ausgeben.

4. (**Kreativaufgabe**) Versucht mit eurem Wissen über das bisher Gelernte eine interessante Gestaltung bzw. ein interessantes Muster per Script zu erstellen. In eurem Script soll mindestens eine `if()`-Abfrage vorkommen. Speichert von diesem Design ein JPEG ab (Datei -> Exportieren -> Format JPEG -> Qualität Hoch | Auflösung(ppi): 72).

    * Benennt die exportierten JPEGs `03_Kreativaufgabe_EuerName.jpg` und ladet sie in [diesen Google Drive-Ordner](https://drive.google.com/drive/folders/1GdBTpg3Xufp2KlHHvsp9b3l3fKOEEICN?usp=sharing) hoch. Ladet euer Script bitte mit der Benennung `03_Kreativaufgabe_EuerName.jsx` in [diesen  GitHub-Ordner](https://github.com/typografie-haw-hamburg/Typografie-programmieren/tree/master/Uebungen/Loesungen) hoch (oben auf `Upload files` klicken, Script in das Fenster ziehen, unten mit `Commit changes` abspeichern).
