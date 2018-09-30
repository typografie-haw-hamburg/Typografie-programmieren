# Übungen #1

Macht bitte von folgenden Übungen so viele wie möglich. Wenn etwas nicht klappt, versucht zunächst selbst herauszufinden, woran es liegen könnte. Falls das nicht gelingt, schreibt euch das Problem auf und fragt beim nächsten Seminar nach.

* Schreibt ein Script, das zwei Rechtecke der Größe 50 x 50 mm genau nebeneinander zeichnet.

  * Erweitert dieses Script so, dass ihr mit einer Variablen die Größe beider Rechtecke einstellen könnt. Die Rechtecke sollen natürlich trotzdem noch genau nebeneinanderliegen. Zur Erinnerung, eine Variable legt man folgendermaßen fest: `var size = 50;`

* Schreibt ein Script, das das «Haus vom Nikolaus» zeichnet:

  ![Das Haus vom Nikolaus](http://www.stupidedia.org/images/thumb/c/cc/Haus_vom_Nikolaus.png/180px-Haus_vom_Nikolaus.png?filetimestamp=20090325141521)

  * Tipp: Sucht euch dazu eine Koordinate aus, auf der eine Ecke des Hauses liegt (z.B. die Ecke links unten). Die Koordinaten dieser Ecke speichert ihr zunächst in den Variablen `x` und `y`. Jetzt könnt ihr die anderen Elemente relativ zu diesem Mittelpunkt platzieren.

  * Versucht dieses Script so zu erweitern, dass ihr mit einer weiteren Variable ganz einfach die Größe des Hauses ändern könnt.

* Schreibt ein Script, das einen Schneemann aus einfachen Formen zeichnet.

  * Sucht euch selbst aus, wie euer Schneemann aussieht.

  * Wenn ihr dem Schneemann Farben geben wollt (weiß, schwarz, orange), könnt ihr das mit dem Befehl `fill(255, 0, 0)` tun. In die Klammern kommen natürlich die RGB-Werte der entsprechenden Farbe.

  * Optional: Um drei Punkte zu einem Dreieck zu verbinden (für die Nase), könnt ihr folgende Befehlfolge ausprobieren:
    ```js
    beginShape(CLOSE);
      vertex(10, 10);
      vertex(40, 20);
      vertex(10, 30);
    endShape();
    ```
    Passt die Koordinaten so an, dass sie für eure Zwecke funktionieren.
