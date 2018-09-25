var table;

function preload() {
  table = loadTable("data/weather.csv","csv","header")
}

function setup() {
  var rows = table.getRows();

  for (var i = 0; i < rows.length; i++) {
    print(table.getNum(i, 0));
  }
}
