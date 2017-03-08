var table;

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable("data/daten.csv", "csv", "header");
  //the file can be remote
  //table = loadTable("http://p5js.org/reference/assets/mammals.csv",
  //                  "csv", "header");
}

function setup() {
  //count the columns
  print(table.getRowCount() + " total rows in table");
  print(table.getColumnCount() + " total columns in table");

  print(table.getColumn("name"));
  //["Goat", "Leopard", "Zebra"]

  //cycle through the table
  for (var r = 0; r < table.getRowCount(); r++)
    for (var c = 0; c < table.getColumnCount(); c++) {
      print(table.getString(r, c));
    }
}