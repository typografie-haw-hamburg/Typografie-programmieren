// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

// BASICS

  // Close current document
      b.close(false);

  // Create Document variable
      var myDocument = app.documents.add();

  // Set to Single Pages
      var myDocumentPreferences = myDocument.documentPreferences
          myDocumentPreferences.facingPages = false;
          myDocumentPreferences.pageWidth = 203;
          myDocumentPreferences.pageHeight = 330;

  // Adjust Baseline Grid
      var myGridPreferences = myDocument.gridPreferences;
            b.units(b.PT);
          myGridPreferences.baselineDivision = 15;
            b.units(b.MM);
          myGridPreferences.baselineStart = 12;
          myGridPreferences.baselineGridShown = true;

  //Get a reference to the first master spread
      var myMasterSpread = myDocument.masterSpreads.item(0);

  //Get a reference to the margin preferences of the first page in the master spread; set up page margins and columns
      var myMarginPreferences = myMasterSpread.pages.item(0).marginPreferences;
          myMarginPreferences.left = 12;
          myMarginPreferences.top = 12;
          myMarginPreferences.right = 12;
          myMarginPreferences.bottom = 12;
          myMarginPreferences.columnCount = 12;
          myMarginPreferences.columnGutter = 0;

  // Document Variables
      var w = b.width; // Seitenbreite
      var h = b.height; // Seitenhöhe
      var w2 = b.width/2; // Seitenbreite/2
      var h2 = b.height/2; // Seitenhöhe/2

  // Your Textframe Size
      var myW = 186; // Textframe Width (mm)
      var myH = 271.6; // Textframe (mm)
      var myT = 12; // Top Margin (mm)
      var myL = 12; // Left Margin (mm)

  // Save default document font family & size in variable
      // b.colorMode(b.CMYK);
      var myFont = app.fonts.itemByName("M+ 1m\tthin");
      var my2ndFont = app.fonts.itemByName("M+ 1m\tregular");
      var myFontSize = 12; // Font Size Choice (pt)
      var myFontLeading = 15;

  // Set the font, font size and leading for the entire document
      b.textFont(myFont);
      b.textSize(myFontSize);
      b.textLeading(myFontLeading);

  // Add one page
      b.addPage();

  // Jump to Page 2
      b.page(2);

  // Your public cloud folder path
      var myURL = "http://dl.dropboxusercontent.com/u/13995836/Systemimmanent/";
      var myTxt = ".txt";

  // Import "Index" file
      var myIndex = b.loadString(myURL + "00 # Index" + myTxt);

  // Create "Index" textframe
      var myIndexTf = b.text(myIndex, myT, myL, myW, myH);

  // Add two pages
      b.addPage();
      b.addPage();

  // Import various files
      var myTest = b.loadString(myURL + "Test%20Datei" + myTxt);

      var my1_1_a = b.loadString(myURL + "1.1.a # Auszug. StilSystemMethoden" + myTxt);

      var my1_2_a = b.loadString(myURL + "1.2.a # Konzept. Plakataufgabe" + myTxt);

  // Create main textframes
      // Master.txt for testing purposes
      var myOldTf = b.text(myTest, myT, myL, myW, myH);

      // Entire content below
      //var myOldTf = b.text(myKurs + myPlakat + myKonzeptGrob + myExpose + myKonzeptFein + myQuotes, myT, myL, myW, myH);
      var myStory = myOldTf.parentStory;

  // Create prop variables for paragraph styles
      var myDefaultProps = {
        fillColor: b.color(0, 0, 0),
        appliedFont: myFont,
        pointSize: myFontSize,
        leading: 15,
      };

      var myDefaultStyle = b.paragraphStyle("Default", myDefaultProps);

      var mySymbolProps = {
        basedOn: "Default",
        appliedFont: my2ndFont,
      };
      var myH1Props = {
        basedOn: "Default",
        fillColor: b.color(0, 255, 0),
      };
      var myH2Props = {
        basedOn: "Default",
        fillColor: b.color(0, 255, 255),
      };
      var myH3Props = {
        basedOn: "Default",
        fillColor: b.color(0, 0, 255),
      };

  // Connect the prop variables to a paragraph style and save it in a variable

      var mySymbolStyle = b.characterStyle("*#- Symbols", mySymbolProps);
      var myH1Style = b.paragraphStyle("# h1", myH1Props);
      var myH2Style = b.paragraphStyle("## h2", myH2Props);
      var myH3Style = b.paragraphStyle("### h3", myH3Props);

  // Create paragraph style group
      var myNewPSG = b.doc().paragraphStyleGroups.add();
          myNewPSG.name = "Bla";

  // Move paragraph styles in group (caution: reversed sorting!)
      myH2Style.move(LocationOptions.UNKNOWN, myNewPSG);
      myH1Style.move(LocationOptions.UNKNOWN, myNewPSG);

      b.applyParagraphStyle(myStory, "Default");

  // "Add more pages as long as the content frame is overflowing"
      while (myOldTf.overflows == true) {
        b.addPage();
        var myNewTf = b.text("", myT, myL, myW, myH);
        b.linkTextFrames(myOldTf, myNewTf);
        myOldTf = myNewTf;
      }

  // Jump to Page 4
      b.page(4);

  // Save paragraphs into variable
      var myParas = b.paragraphs(myStory);

  // Save characters into variable
      var myCharas = b.characters(myStory);

  // "If the paragraph starts with X, apply paragraph style Y"
      for (var i = 0; i < myParas.length; i++) {
        if (b.startsWith(myParas[i].contents, "###") == true) {
        b.applyParagraphStyle(myParas[i], "### h3");
        continue;
        }
        if (b.startsWith(myParas[i].contents, "##") == true) {
          b.applyParagraphStyle(myParas[i], "## h2");
          continue;
        }
        if (b.startsWith(myParas[i].contents, "#") == true) {
          b.applyParagraphStyle(myParas[i], "# h1");
        }
      }


  // Apply character styles for symbols
      for (var i = 0; i < myCharas.length; i++) {
        if (myCharas[i].contents == "#") {
          b.applyCharacterStyle(myCharas[i], "*#- Symbols");
        }
      }

  // Remove empty line breaks
      app.findGrepPreferences=app.changeGrepPreferences=null;
      app.findGrepPreferences.findWhat="(?<=\r)\r+";
      app.changeGrepPreferences.changeTo="";
      app.activeDocument.changeGrep();

  // Find out the last page
      var myLastPage = b.pageCount();

  // Jump to last page and set Textframe containing "1"
      b.page(myLastPage-1);
      var myPageNumber = b.text ("1", 198, 285, 12, 12);
      b.applyParagraphStyle(myPageNumber, "Default");

  // Save InDesign File
     myDocument.save(File(Folder.desktop + "/Systemimmanent_Scripted_" + b.timestamp() + ".indd"));

  // Export as PDF

          with(app.pdfExportPreferences){
      //Basic PDF output options.
          pageRange = PageRange.allPages;
          acrobatCompatibility = AcrobatCompatibility.acrobat6;
          exportGuidesAndGrids = false;
          exportLayers = false;
          exportNonPrintingObjects = false;
          exportReaderSpreads = false;
          generateThumbnails = false;
          try{
            ignoreSpreadOverrides = false;
          }
          catch(e){}
          includeBookmarks = true;
          includeHyperlinks = true;
          includeICCProfiles = true;
          includeSlugWithPDF = false;
          includeStructure = false;
          interactiveElementsOption = InteractiveElementsOptions.doNotInclude;
      //Setting subsetFontsBelow to zero disallows font subsetting;
      //set subsetFontsBelow to some other value to use font subsetting.
          subsetFontsBelow = 0;
      //Bitmap compression/sampling/quality options.
          colorBitmapCompression = BitmapCompression.zip;
          colorBitmapQuality = CompressionQuality.eightBit;
          colorBitmapSampling = Sampling.none;
      //thresholdToCompressColor is not needed in this example.
      //colorBitmapSamplingDPI is not needed when colorBitmapSampling is set to none.
          grayscaleBitmapCompression = BitmapCompression.zip;
          grayscaleBitmapQuality = CompressionQuality.eightBit;
          grayscaleBitmapSampling = Sampling.none;
      //thresholdToCompressGray is not needed in this example.
      //grayscaleBitmapSamplingDPI is not needed when grayscaleBitmapSampling is set to none.
          monochromeBitmapCompression = BitmapCompression.zip;
          monochromeBitmapSampling = Sampling.none;
      //thresholdToCompressMonochrome is not needed in this example.
      //monochromeBitmapSamplingDPI is not needed when monochromeBitmapSampling is set to none.
      //Other compression options.
          compressionType = PDFCompressionType.compressNone;
          compressTextAndLineArt = true;
          cropImagesToFrames = true;
          optimizePDF = true;
      //Printers marks and prepress options.
      //Get the bleed amounts from the document's bleed.
          var myDocumentPreferences = myDocument.documentPreferences;
          bleedBottom = myDocumentPreferences.documentBleedBottomOffset;
          bleedTop = myDocumentPreferences.documentBleedTopOffset;
          bleedInside = myDocumentPreferences.documentBleedInsideOrLeftOffset;
          bleedOutside = myDocumentPreferences.documentBleedOutsideOrRightOffset;
      //If any bleed area is greater than zero, then include bleed marks.
          if(bleedBottom && bleedTop && bleedInside && bleedInside){
            bleedMarks = true;
          }
          else{
            bleedMarks = false;
          }
          colorBars = false;
          colorTileSize = 128;
          grayTileSize = 128;
          cropMarks = false;
          omitBitmaps = false;
          omitEPS = false;
          omitPDF = false;
          pageInformationMarks = false;
          pageMarksOffset = "12 pt";
          pdfColorSpace = PDFColorSpace.unchangedColorSpace;
          //Default mark type.
          pdfMarkType = 1147563124;
          printerMarkWeight = PDFMarkWeight.p125pt;
          registrationMarks = false;
          try{
            simulateOverprint = false;
          }
          catch(e){}
          useDocumentBleedWithPDF = true;
          //Set viewPDF to true to open the PDF in Acrobat or Adobe Reader.
          viewPDF = false;
        }
      //Now export the document. You'll have to fill in your own file path.
          myDocument.exportFile(
            ExportFormat.pdfType,
            File(Folder.desktop + "/Systemimmanent_Scripted_" + b.timestamp() + ".pdf"), false
          );


}
b.go();
