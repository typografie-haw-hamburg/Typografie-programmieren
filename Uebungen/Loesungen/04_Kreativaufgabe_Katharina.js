//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear (b.doc());

  var fabrics = ["acrylic", "aertex", "airdura", "airguard", "alpaca", "angora", "argyle", "baize", "ballistic nylon","ban-lon", "barathea", "barkcloth", "batiste", "bedford cord", "bengaline silk", "beta cloth", "bizarre silk", "bobbinet", "boiled wool", "bombazine", "brilliantine", "broadcloth", "brocade", "buckram", "bunting", "burlap", "c change", "calico", "cambric", "camlet","canvas","capilene","carbon fiber","cashmere","cedar bark","challis","chambray","char cloth","charmeuse","charvet","cheesecloth","chenille","chiffon","chiné","chino","chintz","cloqué","cloth of gold","coir","conductive",  "coolmax", "cordura", "corduroy", "cotton", "coutil", "crape", "crêpe", "cretonne", "crimplene", "damask", "darlexx", "dazzle", "denim", "dimity", "donegal tweed", "dornix", "dowlas", "drill", "drugget", "duck", "e-textiles", "eolienne", "felt", "fishnet", "flannel", "foulard", "fustian", "gabardine", "gannex", "gauze", "gazar", "georgette", "ghalamkar", "gingham", "gore-tex", "grenadine", "grenfell cloth", "grosgrain", "habutai", "haircloth", "harris tweed", "hemp", "herringbone", "himroo", "hodden", "houndstooth", "irish linen", "jamdani", "jersey", "jute", "kente cloth", "kerseymere", "kevlar", "khādī", "khaki drill", "lace", "lamé", "lampas", "lawn", "linen", "linsey-woolsey", "loden", "longcloth", "lumalive", "machine knitting", "mackinaw", "madapolam", "madras", "mesh", "microfiber", "milliskin", "mockado", "mohair", "moleskin", "moquette", "muslin", "nainsook", "nankeen", "needlerun net", "ninon", "nylon", "oilskin", "olefin", "organdy", "organza", "osnaburg", "ottoman", "oxford", "paduasoy", "paisley", "pashmina", "percale", "pin stripes", "piña", "plush", "polar fleece", "polyester", "pongee", "poplin", "rakematiz", "ramie", "rayadillo", "rayon", "rep", "rinzu", "ripstop", "russell cord", "saga nishiki", "samite", "sateen", "satin", "saye", "scarlet", "scrim", "sea silk", "seersucker", "serge", "shot silk", "shweshwe", "silk", "silnylon", "sisal", "songket", "spandex", "spider silk", "stub-tex", "stuff", "sympatex", "taffeta", "tais", "tartan", "tattersall", "terrycloth", "toile", "tucuyo", "tulle", "tweed", "twill", "ultrasuede", "vegetable flannel", "velour", "velours du kasaï", "velvet", "velveteen", "ventile", "vinyl coated polyester", "viyella", "voile", "wadmal", "whipcord", "wigan", "windstopper", "wool", "zephyr", "zibeline", "zorbeez"];

    for( var i = -0.8; i < 27; i++) {

    var redValue = i * 50;
    
    var x = 0 + i * 2;
    var y = 0 + i * 4;

      
      for( var j = 0; j < 11; j++) {
      var blueValue = j * 50

      b.fill( b.color( redValue, 0, blueValue));

      var fontSize = 16;
      b.textSize( fontSize);
      b.textFont('Neue Schrift_1');

      b.text( fabrics[ b.round( b.random( 0, fabrics.length - 1) ) ], j * 50, y * 8, 100, 50);

      
    }

  }



 }

b.go();