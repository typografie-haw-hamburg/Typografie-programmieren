// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  var artist = "Scooter";

  var urlAlbum = "https://itunes.apple.com/search?term=" + artist + "&entity=album"  ;
  var dataAlbum = JSON.parse(loadString(urlAlbum));
  inspect(dataAlbum.results[0]);

  for(var i = 0; i < 1; i++) {

    var result = dataAlbum.results[i];
    var dowAlbum = result.artworkUrl100.replace(/100x100bb\.jpg/,"700x700bb.jpg");

    // als zweites Argument, den Download-Namen angeben, dann wird es unter dem Namen im data-Ordner gespeichert (hier z.B. Scooter_1.jpg)
    var imgAlbum = download(dowAlbum, artist + "_" + (i + 1) + ".jpg");

    var x = 20;
    var y = 50;
    var picSizeX = 120;
    var picSizeY = 100;

    // beim image()-Befehl dann einfach wieder den Dateinamen in der gleichen Form angeben
    var cAlbum = image(artist + "_" + (i + 1 ) +  ".jpg" , x, y, picSizeX, picSizeY);
  }

}