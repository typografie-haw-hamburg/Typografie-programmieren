#Übungen #3

Macht bitte folgende Übungen bis zum nächsten Mittwoch. Wenn etwas nicht klappt, versucht euch untereinander zu helfen, zum Beispiel in der [Facebook-Gruppe «Script Design 2016 First Aid»](https://www.facebook.com/groups/1760227230910812/).

1. Schreibt ein Script, das 20 Kreise auf der Seite nebeneinander platziert. Den Abstand zwischen den Kreisen könnt ihr euch selbst aussuchen.

  * Ändert das Script so, dass der erste Kreis mit voller Deckkraft gezeichnet wird, der zweite mit leicht verringerter Deckkraft, der dritte mit noch weniger usw.

2. Schreibt ein Script, in dem ihr ein Rechteck um 45° rotiert, so dass es auf der Spitze steht.

3. Mit den Befehlen `b.beginShape()`, `b.vertex()` und `b.endShape()` könnt ihr eine Linie mit mehreren Pfadpunkten zeichnen. Für jeden Pfadpunkt müsst ihr dabei den Befehl `b.vertex(x, y)` aufrufen. Probiert diese Befehle aus und macht euch mit ihrer Funktionsweise vertraut. Beachtet, dass ihr mit `b.noFill()` die Füllung dieses Pfades ausstellen könnt.

  * Schreibt ein Script, das eine Linie mit 100 Pfadpunkten zeichnet, die zufällig über die Seite verteilt sind. Per Zufall soll außerdem auf einigen der Pfadpunkte noch ein Kreis gezeichnet werden.

4. Schreibt ein Script, das zufällig Kreise auf der Seite platziert. Legt in eurem Script zwei Farben an. Wenn sich der Kreismittelpunkt eines Kreises auf der linken Hälfte der Seite befindet, soll der neue Kreis mit Farbe 1 gefüllt werden, wenn er sich auf der rechten Hälfte befindet mit Farbe 2.

  * Ändert das Script so ab, dass der Nutzer in einem Eingabefenster (`prompt()`) selbst die Zahl der erstellten Kreise festlegen kann.

5. Schreibt ein Script, dessen Ergebnis auf der aktuellen Sekundenzahl basiert: Beträgt die Uhrzeit z.B. 12:40:01 wird ein kleiner Kreis gezeichnet, beträgt die Uhrzeit hingegen 12:40:59 werden 59 große Kreise gezeichnet. Dazu braucht ihr *keine* if()-Abfrage, sondern müsst nur die aktuelle Sekundenzahl der Uhrzeit abrufen.

  * Optional könnt ihr noch weitere Parameter von der Uhrzeit oder vom Datum abhängig machen.

6. Schreibt ein Script, das ein Quadrat links oben auf der Seite platziert. Der Nutzer soll durch eine Eingabe in einem `prompt()`-Fenster selbst festlegen können, welche Seitenlänge dieses Quadrat hat. Wenn das Quadrat mit der angegebenen Seitenlänge zu breit ist, um auf die Seite zu passen, soll kein Quadrat gezeichnet werden, stattdessen soll dem Nutzer ein Hinweisfenster ausgegeben werden, dass ein Quadrat dieser Seitenlänge nicht auf die Seite passt.

7. (**Kreativaufgabe**) Versucht mit eurem Wissen über das bisher gelernte eine interessante Gestaltung bzw. ein interessantes Muster per Script zu erstellen. In eurem Script soll mindestens eine if()-Abfrage vorkommen. Speichert von diesem Design ein JPEG ab (Datei -> Exportieren -> Format JPEG -> Qualität Hoch | Auflösung(ppi): 72).

  * Für die Dokumentation des Kurses ist es wichtig, dass wir unsere Dateien sammeln und online stellen. Das hat auch den Zweck, dass wir uns andere Scripts ansehen können, um zu sehen, wie andere ein bestimmtes Problem gelöst haben. Benennt das exportierte JPEG `03_Kreativaufgabe_EuerName.jpg` und ladet es in [diesen Google Drive-Ordner](https://drive.google.com/open?id=0B6USBbEchpCkaEN0cHBITGVTZnM) hoch. Ladet euer Script bitte mit der Benennung `03_Kreativaufgabe_EuerName.jsx` in [den entsprechenden GitHub-Ordner](https://github.com/typografie-haw-hamburg/Typografie-programmieren/tree/master/Uebungen/Loesungen) hoch (oben auf `Upload files` klicken, Script in das Fenster ziehen, unten mit `Commit changes` abspeichern).
