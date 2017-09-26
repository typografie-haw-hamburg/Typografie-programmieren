color getAverageColor(PImage img){
  img.loadPixels();
  int r=0, g=0, b=0;
  for(int i=0; i<img.pixels.length; i++){
    color c = img.pixels[i];
    r += c>>16&0xFF;
    g += c>>8&0xFF;
    b += c&0xFF;
  }
  r /= img.pixels.length;
  g /= img.pixels.length;
  b /= img.pixels.length;
  return color(r,g,b);
}

void fillHashMap (HashMap hm, Table table, int key, int value ){
  for (int i=0; i<table.getRowCount(); i++){
    hm.put(int(table.getRow(i).getString(key)), table.getRow(i).getString(value));
  }
}

void keyPressed() {
  keyPresses++;
  if(keyPresses == 4){
    keyPresses = 0;
  }
  println("keyPresses: "+keyPresses);
}

class Kaestchen{

  float xPos;
  float yPos;
  float breite;
  float hoehe;
  color fillColor;

  Kaestchen(float tempxPos, float tempyPos, float tempbreite, float temphoehe, color tempfillColor){
    xPos = tempxPos;
    yPos = tempyPos;
    breite = tempbreite;
    hoehe = temphoehe;
    fillColor = tempfillColor;
  }

  void display(){
    fill(fillColor);
    rect(xPos, yPos, breite, hoehe);
  }
}

String modifySubtitle(String s, int max){
  String output = "";
  String[] words = splitTokens(s, " /,<>");
  StringList editedWords = new StringList();
  int removersAmount;

  for (int i = 0; i < words.length; ++i) {
    editedWords.set(i, words[i]);
  }

  if(max > editedWords.size()){
    max = editedWords.size();
  }

  removersAmount = int(random(max));

  for (int i = 0; i < removersAmount; ++i) {
    editedWords.remove(int(random(editedWords.size())));
  }

  for (int i = 0; i < editedWords.size(); ++i) {
    output += editedWords.get(i) + " ";
  }

  return output;
}

class Sub{
  String content;
  public void set(String newVal){
    if(!newVal.equals(content)) {
      content = newVal;
      println(content);
      subList.add(content);

      if(displayState1){
        if(displayState2){
          if(displayState3){
            if(displayState4){

            }else{
              displayState4 = true;
              displayDurSub4 = int(random(1,6));
              displayX4 = int(random(30, 400));
              displayY4 = int(random(30, 700));
              timeFreeze4 = int(millis()/1000);
              displaySub4 = subList.get(subCounter);
            }
          }else{
            displayState3 = true;
            displayDurSub3 = int(random(1,6));
            displayX3 = int(random(30, 400));
            displayY3 = int(random(30, 700));
            timeFreeze3 = int(millis()/1000);
            displaySub3 = subList.get(subCounter);
          }
        }else{
          displayState2 = true;
          displayDurSub2 = int(random(1,6));
          displayX2 = int(random(30, 400));
          displayY2 = int(random(30, 700));
          timeFreeze2 = int(millis()/1000);
          displaySub2 = subList.get(subCounter);
        }
      }else{
        displayState1 = true;
        displayDurSub1 = int(random(1,6));
        displayX1 = int(random(30, 400));
        displayY1 = int(random(30, 700));
        timeFreeze1 = int(millis()/1000);
        displaySub1 = subList.get(subCounter);
      }

      subCounter++;
    }
  }
}
