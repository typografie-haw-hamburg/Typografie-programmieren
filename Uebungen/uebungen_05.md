# Übungen #5

Macht bitte folgende Übungen bis zum nächsten Mittwoch. Schaut euch zur Hilfe auch [die von mir hochgeladenen Scripts aus dem Kurs](https://github.com/typografie-haw-hamburg/Typografie-programmieren/tree/master/Kurs/05) an.

1. Sucht euch auf der GitHub-Seite [Corpora](https://github.com/dariusk/corpora), die im Kurs vorgestellt wurde, ein Datenset heraus, das einen Array erhält. Kopiert diesen Array in euer Script.

    * Schreibt zunächst ein Script, das euch einen Textrahmen mit einem zufälligen Eintrag aus dem Array anlegt.

    * Ändert das Script dann so, dass ihr für jeden Eintrag aus dem Array einen Textrahmen auf der Seite festlegt.

    * Versucht dann, das Script ein weiteres mal zu ändern, so dass nur Einträge, die mit einem bestimmten Buchstaben beginnen als Textrahmen angelegt werden (z.B. alle Einträge, die mit "A" beginnen.) Schaut euch dazu die Funktion [`b.startsWith()`](https://basiljs.github.io/#startswith) an und versucht herauszufinden, wie sie funktioniert.

2. Schreibt ein Script, bei dem ihr zunächst fünf Farben eurer Wahl festlegt und diese in einem Array abspeichert. Erstellt nun in eurem Script einige Formen (egal ob zufällig oder nicht) und weist diesen per Zufall eure fünf Farben zu.

3. Versucht ein Script zu schreiben, das euch folgendes visuelles Ergebnis erstellt (siehe Bild). Versucht zunächst einmal ohne den Tipp unten zu analysieren, wie das Script ablaufen könnte.

    ![Grid](/Material/Bilder/Uebungen/2017/05/grid.png)

    * Tipp: Für das Script müsst ihr zunächst eine Reihe an Kreisen programmieren, die von oben nach unten läuft und immer röter wird. Dann müsst ihr diesen Loop in einen weiteren Loop packen, der euch mehrere dieser Reihen nebeneinander erstellt. Diese Reihen müssen immer blauer werden.

    * Versucht das Script so zu erweitern, dass ihr die Zahl der Kreise durch das Ändern einer Variable festlegen könnt.

4. (**Kreativaufgabe**) Versucht mit eurem Wissen über das bisher gelernte eine interessante Gestaltung per Script zu erstellen. In eurem Script soll entweder ein Array benutzt werden oder zwei Loops ineinander verschachtelt werden. Speichert von diesem Design ein JPEG ab (Datei -> Exportieren -> Format JPEG -> Qualität Hoch | Auflösung(ppi): 72).

    * Benennt die exportierten JPEGs `05_Kreativaufgabe_EuerName.jpg` und ladet sie in [diesen Google Drive-Ordner](https://drive.google.com/drive/folders/0B6USBbEchpCkMDVaWWdJZHBTRDA) hoch. Ladet euer Script bitte mit der Benennung `05_Kreativaufgabe_EuerName.jsx` in [diesen  GitHub-Ordner](https://github.com/typografie-haw-hamburg/Typografie-programmieren/tree/master/Uebungen/Loesungen) hoch (oben auf `Upload files` klicken, Script in das Fenster ziehen, unten mit `Commit changes` abspeichern).
