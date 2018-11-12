// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear(doc());

  var mySeconds = second();
  var myMinutes = minute();
  var myHours = hour();

  var mySecondsX = map(mySeconds, 0, 59, 0, width);
  var myMinutesX = map(myMinutes, 0, 59, 0, width);
  var myHoursX = map(myHours, 0, 23, 0, width);

  fill(255);

  line(myHoursX, 0, myHoursX, height);
  ellipse(myHoursX, height / 4 * 1, 20, 20);
  line(myMinutesX, 0, myMinutesX, height);
  ellipse(myMinutesX, height / 4 * 2, 20, 20);
  line(mySecondsX, 0, mySecondsX, height);
  ellipse(mySecondsX, height / 4 * 3, 20, 20);

}