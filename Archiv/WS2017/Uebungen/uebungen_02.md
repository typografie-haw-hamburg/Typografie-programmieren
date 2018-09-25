# Übungen #2

Macht bitte folgende Übungen bis zum nächsten Mittwoch. Wenn etwas nicht klappt, versucht zunächst selbst herauszufinden, woran es liegen könnte. Schaut euch dazu, [die von mir hochgeladenen Scripts aus dem Kurs](https://github.com/typografie-haw-hamburg/Typografie-programmieren/tree/master/Kurs/02) an oder die Beispielscripts aus dem `examples`-Ordner. Alternativ könnt ihr euch untereinander helfen, zum Beispiel auch in der [Facebook-Gruppe «Typografie Programmieren»](https://www.facebook.com/groups/1760227230910812/).

* Schreibt ein Script, das die Höhe und die Breite eurer Seite zufällig festlegt (zur Erinnerung: mit `b.size()` könnt ihr die Größe der Seite anpassen). Die Größen der Seite sollt ihr dann im zweiten Schritt in der Konsole ausgeben, in der Form "Die Höhe der Seite beträgt XXX mm.", "Die Breite der Seite beträgt XXX mm.". Ihr könnt den Text auch mit der Funktion `b.text()` auf der Seite ausgeben lassen. Findet heraus, wie.

* Schreibt ein Script, das ein zufällig geformtes Dreieck auf einer Seite platziert.

* Schreibt ein Script, das mit einer Schleife Linien zufällig auf einer Seite verteilt, d.h. die Anfangs- und Endpunkte der Linien werden in jeder Schleifenrunde zufällig ausgewürfelt.

  * Ändert das Script so, dass an den Enden der Linien jeweils ein Kreis gezeichnet wird. Die Größe der Kreise könnt ihr euch aussuchen, sie kann auch zufällig variieren.

  * Versucht das Script so abzuändern, dass die nächste Linie immer vom Ende der vorherigen Linie losgezeichnet wird.

* `b.gradient()` ist eine Funktion in basil, die wir noch nicht kennengelernt haben und die einen Verlauf festlegt. Öffnet das Script `gradient.jsx`, das ihr bei den Beispielscripts im Ordner `color` findet. Analysiert dieses Script und versucht nachzuvollziehen, wie `b.gradient()` funktioniert. Dann schreibt ein Script, das einen Kreis zeichnet und mit einem Verlauf zwischen zwei zufälligen Farben füllt.

* Versucht mit eurem Wissen über Schleifen, die Zufallsfunktion und die bisher kennengelernten basil.js-Befehle eine interessante Gestaltung bzw. ein interessantes Muster zu erstellen, das mit jedem Ausführen des (unveränderten) Scripts neu aussieht. Speichert von diesem Design *drei* Varianten als JPEG ab (Datei -> Exportieren -> Format JPEG -> Qualität Hoch | Auflösung(ppi): 72).

  * Benennt die exportierten JPEGs `02_Kreativaufgabe_EuerName_A.jpg` und ladet sie in [diesen Google Drive-Ordner](https://drive.google.com/drive/folders/0B6USBbEchpCkMDVaWWdJZHBTRDA) hoch. Ladet euer Script bitte mit der Benennung `02_Kreativaufgabe_EuerName.jsx` in [diesen  GitHub-Ordner](https://github.com/typografie-haw-hamburg/Typografie-programmieren/tree/master/Uebungen/Loesungen) hoch (oben auf `Upload files` klicken, Script in das Fenster ziehen, unten mit `Commit changes` abspeichern).
