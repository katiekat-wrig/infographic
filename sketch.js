let bkg, star1, star2, starring, moonandcloud, font;

function preload() {
  bkg = loadImage ("Images/Background.svg");
  star1 = loadImage ("Images/Star 1.png");
  star2 = loadImage ("Images/Star 2.png");
  starring = loadImage ("Images/Starring.png");
  moonandcloud = loadImage ("Images/Moonandcloud.png");

  font = loadFont ("Kat Handwritten/KatHandwritten-Regular.ttf");
  fontitc = loadFont ("Kat Handwritten/KatHandwritten-Italic.ttf");
  fontbld = loadFont("Kat Handwritten/KatHandwritten-Bold.ttf");
}

function setup() {
  createCanvas(800, 1250);
}

function draw() {
  background(225);
  image(bkg, 0, 0, 800, 1250)

  //Heading
  image(moonandcloud, 10, 0, 385, 320)
  text("The 4 Stages of Sleep", 250, 120);
  fill(199, 223, 239)
  textSize(50);
  textFont(font);

  push(); 
  strokeWeight(5);
  stroke(199, 223, 239)
  line(300, 145, 700, 145)
  pop();

   //Body
   image(starring, 0, 375,335, 676)

    //Blurb at left
    push();
    fill(199, 223, 239)
    textSize(23);
    textFont(fontbld);
 
    text("Sleep is not \n a uniform state \n of being. Instead, \nsleep is composed \n of several different \n stages that can be \n differentiated from \n one another by the \n patterns of brain wave \n activity that occur \n during each stage. \n \n Sleep can be divided \n into two different \n general phases: \n REM sleep and \n non-REM (NREM) \n sleep.", 10, 480);
   pop(); 
  
    //Stage 1
   text("Stage 1:", 50, 365);
   fill(199, 223, 239)
   textSize(50);
   textFont(font);

   push();
   fill(199, 223, 239)
   textSize(20);
   textFont(font);

   text("The transitional first stage in non-REM sleep. \n This is the period in which you're beginning to fall asleep. \n During this time, there is a slowdown in both the rates \n of respiration and heartbeat, as well as a marked \n decrease in both overall muscle tension and core body \n temperature. It is easy to wake someone from this stage. \n This stage lasts apx. 1-7 minutes, and if unninterrupted, \n can transition quickly into stage 2.", 250, 320);
  pop(); 

    //Stage 2
   text("Stage 2:", 350, 560);
   fill(199, 223, 239)
   textSize(50);
   textFont(font);

   push();
   fill(199, 223, 239)
   textSize(20);
   textFont(font);

   text("The second stage of non-REM sleep. \n In this stage, the body goes into a state \n of deep relaxation. Brain activity slows, \n but short bursts of activity help keep you \n asleep. This stage lasts apx. 10-25 minutes \n during the first sleep cycle, but can become \n longer during each cycle. On average, people \n tend to spend about half their sleep in this \n stage.", 375, 600);
  pop(); 

      //Stage 3
   text("Stage 3:", 350, 865);
   fill(199, 223, 239)
   textSize(50);
   textFont(font);

   push();
   fill(199, 223, 239)
   textSize(20);
   textFont(font);

   text("This is the third stage of non-REM sleep, also known \n as deep sleep. It is harder to wake someone from \n this stage. Muscle tone, pulse, and breathing rate \n decrease as the body relaxes even further. This \n stage lasts apx. 20-40 minutes, and get shorter \n each cycle.", 300, 905);
  pop(); 

    //REM Sleep
   text("REM Sleep:", 140, 1090);
   fill(199, 223, 239)
   textSize(50);
   textFont(font);

   push();
   fill(199, 223, 239)
   textSize(20);
   textFont(font);

   text("Often referred to as paradoxical sleep. This is the period of sleep where \ndreaming occurs, and is marked by rapid movements of the eyes. \nLasts apx. 10-60 minutes.", 50, 1125);
  pop(); 
  
}
