# Übungen #4

Macht bitte folgende Übungen bis zum nächsten Mittwoch. Wenn etwas nicht klappt, versucht zunächst selbst herauszufinden, woran es liegen könnte. Schaut euch dazu, [die von mir hochgeladenen Scripts aus dem Kurs](https://github.com/typografie-haw-hamburg/Typografie-programmieren/tree/master/Kurs/04) an. Alternativ könnt ihr euch untereinander helfen, zum Beispiel auch in der [Facebook-Gruppe «Typografie Programmieren»](https://www.facebook.com/groups/1760227230910812/).

1. Schreibt ein Script, das verschiedene Textrahmen mit einem Beispielwort untereinander setzt. Der Text in jedem Textrahmen soll sich visuell in mindestens einer Eigenschaft vom vorherigen Textrahmen unterscheiden (z.B. Schrift immer größer, Buchstaben immer breiter etc.).

    * Ändert das Script so ab, dass ihr einen Array (also eine Liste) mit Begriffen festlegt. Jetzt soll nicht mehr euer Beispielwort, sondern jeder Eintrag dieses Arrays in einem Textrahmen stehen. Es sollen genau so viele Textrahmen gezeichnet werden, wie der Array Einträge hat. Wenn ihr das Thema Array auffrischen wollt, könnt ihr euch noch einmal das [Script aus dem Kurs](https://github.com/typografie-haw-hamburg/Typografie-programmieren/blob/master/Kurs/04/06_arrays.jsx) zum Thema anschauen.

2. Mit der Funktion `dist()` könnt ihr den Abstand zwischen zwei Punkten messen. So könnt ihr zum Beispiel testen, ob ein Kreis nah genug am Kreismittelpunkt eines anderen Kreises liegt, um im Inneren dieses anderen Kreises zu liegen. Schreibt ein Script, das zunächst einen großen Kreis in der Seitenmitte zeichnet. Dann sollen kleinere Kreise zufällig innerhalb des großen Kreises platziert werden, ohne auf dessen Rändern zu landen. Auf dem Bild seht ihr, wie das zum Beispiel aussehen könnte.

    ![Kreise im Kreis](/Material/Bilder/Uebungen/2017/03/KreiseImKreis.jpg)

    * Tipp: Ihr müsst wie gesagt mit `dist()` Abstände zwischen dem Mittelpunkt des großen und der neuen Kreise messen müssen. Dann müsst ihr ein `if()`-Statement nutzen, um kleine Kreise nur dann zu zeichnen, wenn sie wirklich innerhalb des großen Kreises liegen.

3. Thema verschachtelte Loops: Versucht ein Script zu schreiben, das euch folgendes visuelles Ergebnis erstellt (siehe Bild). Versucht zunächst einmal ohne den Tipp unten zu analysieren, wie das Script ablaufen könnte.

    ![Grid](/Material/Bilder/Uebungen/2017/05/grid.png)

    * Tipp: Für das Script müsst ihr zunächst eine Reihe an Kreisen programmieren, die von oben nach unten läuft und immer röter wird. Dann müsst ihr diesen Loop in einen weiteren Loop packen, der euch mehrere dieser Reihen nebeneinander erstellt. Diese Reihen müssen immer blauer werden.

    * Versucht das Script so zu erweitern, dass ihr die Zahl der Kreise durch das Ändern einer Variable festlegen könnt.

4. (**Kreativaufgabe**) Versucht mit eurem Wissen über das bisher gelernte eine interessante Gestaltung bzw. ein interessantes Muster per Script zu erstellen. In eurem Script soll mindestens ein Text platziert werden. Speichert von diesem Design ein JPEG ab (Datei -> Exportieren -> Format JPEG -> Qualität Hoch | Auflösung(ppi): 72).

    * Benennt die exportierten JPEGs `04_Kreativaufgabe_EuerName.jpg` und ladet sie in [diesen Google Drive-Ordner](https://drive.google.com/drive/folders/1GdBTpg3Xufp2KlHHvsp9b3l3fKOEEICN?usp=sharing) hoch. Ladet euer Script bitte mit der Benennung `04_Kreativaufgabe_EuerName.jsx` in [diesen  GitHub-Ordner](https://github.com/typografie-haw-hamburg/Typografie-programmieren/tree/master/Uebungen/Loesungen) hoch (oben auf `Upload files` klicken, Script in das Fenster ziehen, unten mit `Commit changes` abspeichern).
