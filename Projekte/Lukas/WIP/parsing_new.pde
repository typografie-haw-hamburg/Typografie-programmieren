int zeilenCounter = 0;
int hours = 0;
int minutes = 0;
int seconds = 0;
int round;
int start;
int correction = 1;


void setup(){
	String s[] = loadStrings("moonrise_subs.txt");
	StringList zeilen = new StringList();

	// writes every line in a StringList
	for (int i=0; i<s.length; i++){
  		zeilen.append(s[i]);
	}

	// combines the text lines
	for (int i=0; i<zeilen.size(); i++){
		zeilenCounter++;

		if(zeilen.get(i).length() == 0){

			if(zeilenCounter == 5){
				zeilen.set(i-2, zeilen.get(i-2) + " " + zeilen.get(i-1));
				zeilen.remove(i-1);
				i--;
			}


			zeilenCounter = 0;
		}
	}

	// creates the table to save the parsed subtitle
	Table table= new Table();
	table.addColumn("start");
	table.addColumn("text");
	table.addColumn("start_int");

	for (int i = 0; i < zeilen.size(); i=i+4) {
		TableRow newRow = table.addRow();
		newRow.setString("start", zeilen.get(i+1).substring(0,12));
		newRow.setString("text", zeilen.get(i+2));
	}

	// parses the information into the table and converts
	for(int i=0; i<table.getRowCount(); i++){
		hours = int(table.getString(i,0).substring(0,2));
		minutes = int(table.getString(i,0).substring(3,5));
		seconds = int(table.getString(i,0).substring(6,8));
		round = round(int(table.getString(i,0).substring(9,12))/1000.0);
		// println("hours: "+hours);
		// println("minutes: "+minutes);
		// println("seconds: "+seconds);
		// println("round: "+round);

		table.setInt(i, "start_int", seconds + minutes*60 + hours*3600 + round + correction);
		println(table.getInt(i, 2));
	}

	// removes the unnecessary start String column
	table.removeColumn("start");

	// saves the table as a csv file
	saveTable(table, "data/subtitles_moonrise.csv");


}
