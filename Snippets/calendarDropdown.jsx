// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  // fragt das Datum ab
  var userDate = getDate();

  // das Ergebnis hat je eine Eigentschaft .day und .month, die dann ganz normal in Variablen gespeichert werden können
  var userDay = userDate.day;
  var userMonth = userDate.month;

  // mit dem abgerufenen Datum kann man dann weiterarbeiten
  // z.B.
  alert("Ausgewähltes Datum:\rTag: " + userDay + "\rMonat: " + userMonth);

}

function getDate (){

  var days = [];
  for (var i = 0; i < 31; i++) {
    days.push((i + 1) + ".");
  }

  var w = new Window ("dialog", "Datum");

  var t = w.add("statictext", undefined, "Bitte das gewünschte Datum eingeben.");

  var dropdownGroup = w.add("group");
  var dayDropdown = dropdownGroup.add("dropdownlist", undefined, days);
  dayDropdown.selection = 0;
  var monthDropdown = dropdownGroup.add("dropdownlist", undefined, ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]);
  monthDropdown.selection = 0;

  var buttonGroup = w.add("group");
  // buttonGroup.add("button", undefined, "Abbrechen", {name: "cancel"});
  buttonGroup.add("button", undefined, "OK");

  if(w.show () == 1) {
    return {
      day: dayDropdown.selection.index + 1,
      month: monthDropdown.selection.index + 1
    };
  }

  return false;
}