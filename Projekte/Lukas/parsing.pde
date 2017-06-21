String s[] = loadStrings("sugar_man.txt");
StringList zeilen = new StringList();

boolean textZeile1 = false;
boolean textZeile2 = false;
int temp = 0;
int temp2 = 0;
float start = 0;


// puts the Strings line by line into the StringList
for (int i=0; i<s.length; i++){
  zeilen.append(s[i]);
}


// removes all of the empty lines
for (int i=0; i<zeilen.size(); i++){
  if(zeilen.get(i).length() < 1){
    zeilen.remove(i);
  }
}

// combines the textlines to one !!!Doesn't work when there are numbers in the textline!!!
for (int i=0; i<zeilen.size()-1; i++){
  if(zeilen.get(i).charAt(0) == '0' || zeilen.get(i).charAt(0) == '1' || zeilen.get(i).charAt(0) == '2' || zeilen.get(i).charAt(0) == '3' || zeilen.get(i).charAt(0) == '4' || zeilen.get(i).charAt(0) == '5' || zeilen.get(i).charAt(0) == '6' || zeilen.get(i).charAt(0) == '7' || zeilen.get(i).charAt(0) == '8' || zeilen.get(i).charAt(0) == '9'){
  }else{
    textZeile1 = true;
  }
  if(zeilen.get(i+1).charAt(0) == '0' || zeilen.get(i+1).charAt(0) == '1' || zeilen.get(i+1).charAt(0) == '2' || zeilen.get(i+1).charAt(0) == '3' || zeilen.get(i+1).charAt(0) == '4' || zeilen.get(i+1).charAt(0) == '5' || zeilen.get(i+1).charAt(0) == '6' || zeilen.get(i+1).charAt(0) == '7' || zeilen.get(i+1).charAt(0) == '8' || zeilen.get(i+1).charAt(0) == '9'){
  }else{
    textZeile2 = true;
  }
  if(textZeile1 == true && textZeile2 == true){
    zeilen.set(i, zeilen.get(i) + " " + zeilen.get(i+1));
    zeilen.remove(i+1);
  }
    textZeile1 = false;
    textZeile2 = false;
}


// creates the table and adds all the rows to it
Table table= new Table();
table.addColumn("id");
table.addColumn("start");
table.addColumn("end");
table.addColumn("text");

for(int i=0; i<zeilen.size(); i=i+3){
TableRow newRow = table.addRow();
newRow.setString("id", zeilen.get(i));
newRow.setString("start", zeilen.get(i+1).substring(0,12));
newRow.setString("end", zeilen.get(i+1).substring(17));
newRow.setString("text", zeilen.get(i+2));
}


for(int i=0; i<table.getRowCount(); i++){
  if(int(table.getString(i, 1).substring(3,5))>0){
    temp = int(table.getString(i, 1).substring(3,5))*60;
  }
  if(int(table.getString(i, 1).substring(0,2))>0){
    temp2 = int(table.getString(i, 1).substring(0,2))*3600;

  }
  start = float(table.getString(i,1).substring(6,8)) + temp + temp2 + 0.008;
  table.setFloat(i,"start", start);
  println(start);
  temp = 0;
  temp2 = 0;
}

// saves the table as a .csv file
saveTable(table, "data/new.csv");



//for(int i = 0; i<zeilen.size(); i++){
//  println(zeilen.get(i));
//}