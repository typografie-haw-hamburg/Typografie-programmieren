
// Slide_Settings
      import controlP5.*;
      
      ControlP5 cp5;
      int myColor = color(255,0,255);
      
      Slider abc;
      
      // Create an empty array for the clicked values on the slider
      float [ ] values = new float [3];
      String [ ] emotions = {"Aktivität", "Größe", "Lautstärke"};

// Page-changing presets
      final static int MAX = 2, GAP = 50, DIM = 120, RAD = DIM >> 1;
      int page, cx, cy;
      
       
      Button back, next;
       
//Prepare JSON
      JSONObject json;

void setup() {
        size(800,600);
        noStroke();
        frameRate(50);
        noLoop();
        smooth();
        
        rectMode(CORNER);
        ellipseMode(CENTER);
        textAlign(CENTER, CENTER);
        
        stroke(0);
        strokeWeight(1.5);
        
        cx = width  >> 1;
        cy = height >> 1;
       
        back = new Button("BACK", GAP, height - Button.H - GAP);
        next = new Button("NEXT", width - Button.W - GAP, height - Button.H - GAP);
  
 // Slider-settings
        cp5 = new ControlP5(this);
        
      
        cp5.addSlider("1")
           .setPosition(120,430)
           .setWidth(500)
           .setRange(-5,5)
           .setValue(0)
           .setNumberOfTickMarks(11)
           .setSliderMode(Slider.FLEXIBLE)
           
//Settings for Click-Event
          
             .onPress(new CallbackListener() {
                 public void controlEvent (CallbackEvent theEvent) {
            float value = theEvent.getController ().getValue();
 //********************************************************************/           
            //how can I push the clicked value to the array? - not working with push oder add
            //values.add(value); 
//********************************************************************/         
            println("The value is: " + value);
          }
          
        });
//Back to JSON-Saving-Options        
        
//********************************How can I save the Array-values into new.json?
        //json = new JSONObject ();
        
        //json.setInt (values);
        //json.setString ("Aktivität", "Größe", "Lautstärke");
        
        //saveJSONObject (json,"data/new.json");
//******************************
}



void draw() {
        background(255);
       
        textSize(0050);
        fill(Button.TXTC);
        text("Wie fühlst du dich im Moment?", cx, 200);
        line(370,430,370,410);
       
        textSize(020);
        if (page > 0 )     back.display();
        if (page < MAX)   next.display();
      
      
       
        method("page" + page); // Java only!
        //pageSelector();        // For JS!
      }


// Page
void mousePressed() {
        if      (page > 0   && back.hasClicked())   --page;
       // if      (next.hasClicked())             
   /*************************************/    
       //Futureplan: if you click the "next"-Button, the clicked value should get pushed to the array,
       //How can I do this?
  /**************************************/
        else if (page < MAX && next.hasClicked())   ++page;
        
        redraw();
      }
//Text-settings on each Page
      void page0() {
        textSize(0015);
        text("Aktiv", 90, 432);
        text("Passiv", 650, 432);
        text("Neutral", 370, 400);
      }
       
      void page1() {
        textSize(0015);
        text("Klein", 90, 432);
        text("Groß", 650, 432);
        text("Neutral", 370, 400);
      }
       
      void page2() {
        textSize(0015);
        text("Laut", 90, 432);
        text("Leise", 650, 432);
        text("Neutral", 370, 400);
      }
       
void pageSelector() {
        switch(page) {
        case 0: 
          page0();
          break;
       
        case 1: 
          page1();
          break;
       
        case 2: 
          page2();
        }
}
//Button-Settings
class Button {
        final static int W = 60, H = 40;
        final static color BTNC = 255, TXTC = 0;
       
        final String label;
        final short x, y, xW, yH;
       
        Button(String txt, int xx, int yy) {
          label = txt;
       
          x = (short) xx;
          y = (short) yy;
       
          xW = (short) (xx + W);
          yH = (short) (yy + H);
        }
 
  void display() {
    fill(BTNC);
    rect(x, y, W, H);
 
    fill(TXTC);
    text(label, x + W/2, y + H/2);
  }
 
 //What happens here? – defintion of "hasClicked" and ?
   boolean hasClicked() {
    return mouseX > x & mouseX < xW & mouseY > y & mouseY < yH;
  }
}










/**
* ControlP5 Slider
*
*
* find a list of public methods available for the Slider Controller
* at the bottom of this sketch.
*
* by Andreas Schlegel, 2012
* www.sojamo.de/libraries/controlp5
*
*/

/*
a list of all methods available for the Slider Controller
use ControlP5.printPublicMethodsFor(Slider.class);
to print the following list into the console.

You can find further details about class Slider in the javadoc.

Format:
ClassName : returnType methodName(parameter type)

controlP5.Slider : ArrayList getTickMarks() 
controlP5.Slider : Slider setColorTickMark(int) 
controlP5.Slider : Slider setHandleSize(int) 
controlP5.Slider : Slider setHeight(int) 
controlP5.Slider : Slider setMax(float) 
controlP5.Slider : Slider setMin(float) 
controlP5.Slider : Slider setNumberOfTickMarks(int) 
controlP5.Slider : Slider setRange(float, float) 
controlP5.Slider : Slider setScrollSensitivity(float) 
controlP5.Slider : Slider setSize(int, int) 
controlP5.Slider : Slider setSliderMode(int) 
controlP5.Slider : Slider setTriggerEvent(int) 
controlP5.Slider : Slider setValue(float) 
controlP5.Slider : Slider setWidth(int) 
controlP5.Slider : Slider showTickMarks(boolean) 
controlP5.Slider : Slider shuffle() 
controlP5.Slider : Slider snapToTickMarks(boolean) 
controlP5.Slider : Slider update() 
controlP5.Slider : TickMark getTickMark(int) 
controlP5.Slider : float getValue() 
controlP5.Slider : float getValuePosition() 
controlP5.Slider : int getDirection() 
controlP5.Slider : int getHandleSize() 
controlP5.Slider : int getNumberOfTickMarks() 
controlP5.Slider : int getSliderMode() 
controlP5.Slider : int getTriggerEvent() 
controlP5.Controller : CColor getColor() 
controlP5.Controller : ControlBehavior getBehavior() 
controlP5.Controller : ControlWindow getControlWindow() 
controlP5.Controller : ControlWindow getWindow() 
controlP5.Controller : ControllerProperty getProperty(String) 
controlP5.Controller : ControllerProperty getProperty(String, String) 
controlP5.Controller : Label getCaptionLabel() 
controlP5.Controller : Label getValueLabel() 
controlP5.Controller : List getControllerPlugList() 
controlP5.Controller : PImage setImage(PImage) 
controlP5.Controller : PImage setImage(PImage, int) 
controlP5.Controller : PVector getAbsolutePosition() 
controlP5.Controller : PVector getPosition() 
controlP5.Controller : Slider addCallback(CallbackListener) 
controlP5.Controller : Slider addListener(ControlListener) 
controlP5.Controller : Slider bringToFront() 
controlP5.Controller : Slider bringToFront(ControllerInterface) 
controlP5.Controller : Slider hide() 
controlP5.Controller : Slider linebreak() 
controlP5.Controller : Slider listen(boolean) 
controlP5.Controller : Slider lock() 
controlP5.Controller : Slider plugTo(Object) 
controlP5.Controller : Slider plugTo(Object, String) 
controlP5.Controller : Slider plugTo(Object[]) 
controlP5.Controller : Slider plugTo(Object[], String) 
controlP5.Controller : Slider registerProperty(String) 
controlP5.Controller : Slider registerProperty(String, String) 
controlP5.Controller : Slider registerTooltip(String) 
controlP5.Controller : Slider removeBehavior() 
controlP5.Controller : Slider removeCallback() 
controlP5.Controller : Slider removeCallback(CallbackListener) 
controlP5.Controller : Slider removeListener(ControlListener) 
controlP5.Controller : Slider removeProperty(String) 
controlP5.Controller : Slider removeProperty(String, String) 
controlP5.Controller : Slider setArrayValue(float[]) 
controlP5.Controller : Slider setArrayValue(int, float) 
controlP5.Controller : Slider setBehavior(ControlBehavior) 
controlP5.Controller : Slider setBroadcast(boolean) 
controlP5.Controller : Slider setCaptionLabel(String) 
controlP5.Controller : Slider setColor(CColor) 
controlP5.Controller : Slider setColorActive(int) 
controlP5.Controller : Slider setColorBackground(int) 
controlP5.Controller : Slider setColorCaptionLabel(int) 
controlP5.Controller : Slider setColorForeground(int) 
controlP5.Controller : Slider setColorValueLabel(int) 
controlP5.Controller : Slider setDecimalPrecision(int) 
controlP5.Controller : Slider setDefaultValue(float) 
controlP5.Controller : Slider setHeight(int) 
controlP5.Controller : Slider setId(int) 
controlP5.Controller : Slider setImages(PImage, PImage, PImage) 
controlP5.Controller : Slider setImages(PImage, PImage, PImage, PImage) 
controlP5.Controller : Slider setLabelVisible(boolean) 
controlP5.Controller : Slider setLock(boolean) 
controlP5.Controller : Slider setMax(float) 
controlP5.Controller : Slider setMin(float) 
controlP5.Controller : Slider setMouseOver(boolean) 
controlP5.Controller : Slider setMoveable(boolean) 
controlP5.Controller : Slider setPosition(PVector) 
controlP5.Controller : Slider setPosition(float, float) 
controlP5.Controller : Slider setSize(PImage) 
controlP5.Controller : Slider setSize(int, int) 
controlP5.Controller : Slider setStringValue(String) 
controlP5.Controller : Slider setUpdate(boolean) 
controlP5.Controller : Slider setValueLabel(String) 
controlP5.Controller : Slider setView(ControllerView) 
controlP5.Controller : Slider setVisible(boolean) 
controlP5.Controller : Slider setWidth(int) 
controlP5.Controller : Slider show() 
controlP5.Controller : Slider unlock() 
controlP5.Controller : Slider unplugFrom(Object) 
controlP5.Controller : Slider unplugFrom(Object[]) 
controlP5.Controller : Slider unregisterTooltip() 
controlP5.Controller : Slider update() 
controlP5.Controller : Slider updateSize() 
controlP5.Controller : String getAddress() 
controlP5.Controller : String getInfo() 
controlP5.Controller : String getName() 
controlP5.Controller : String getStringValue() 
controlP5.Controller : String toString() 
controlP5.Controller : Tab getTab() 
controlP5.Controller : boolean isActive() 
controlP5.Controller : boolean isBroadcast() 
controlP5.Controller : boolean isInside() 
controlP5.Controller : boolean isLabelVisible() 
controlP5.Controller : boolean isListening() 
controlP5.Controller : boolean isLock() 
controlP5.Controller : boolean isMouseOver() 
controlP5.Controller : boolean isMousePressed() 
controlP5.Controller : boolean isMoveable() 
controlP5.Controller : boolean isUpdate() 
controlP5.Controller : boolean isVisible() 
controlP5.Controller : float getArrayValue(int) 
controlP5.Controller : float getDefaultValue() 
controlP5.Controller : float getMax() 
controlP5.Controller : float getMin() 
controlP5.Controller : float getValue() 
controlP5.Controller : float[] getArrayValue() 
controlP5.Controller : int getDecimalPrecision() 
controlP5.Controller : int getHeight() 
controlP5.Controller : int getId() 
controlP5.Controller : int getWidth() 
controlP5.Controller : int listenerSize() 
controlP5.Controller : void remove() 
controlP5.Controller : void setView(ControllerView, int) 
java.lang.Object : String toString() 
java.lang.Object : boolean equals(Object) 


*/