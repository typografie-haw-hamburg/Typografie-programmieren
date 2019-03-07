// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear(doc());

  var tf = text("Bertha Pappenheim (* 27. Februar 1859 in Wien; † 28. Mai 1936 in Neu-Isenburg) war eine österreichisch-deutsche Frauenrechtlerin. Sie war Gründerin des Jüdischen Frauenbundes. Bekannt wurde sie darüber hinaus als Patientin Anna O. Die von Josef Breuer zusammen mit Sigmund Freud in den Studien über Hysterie veröffentlichte Fallgeschichte war für Freud Ausgangspunkt für die Entwicklung seiner Theorie der Hysterie und damit der Psychoanalyse.", 50, 50, 50, 50);

  // im Suchmuster muss vor jedes \ ein weiteres \ gesetzt werden. Wenn man nach einer Ziffer sucht, muss man also nicht \d eingeben, sondern \\d
  var results = findGrep(tf, "[\\d]");

  for (var i = 0; i < results.length; i++) {
    typo(results[i], "fillColor", color(255, 0, 0));
  }
}

function findGrep(container, input) {
  app.findGrepPreferences = NothingEnum.nothing;
  app.findGrepPreferences.findWhat = input;
  return container.findGrep();
}