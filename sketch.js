let bkg, star1, star2, starring, moonandcloud, stage1, stage2, stage3, rem, font;
let hoverImage = null;

function preload() {
  bkg = loadImage("Images/Background.svg");
  star1 = loadImage("Images/Star 1.png");
  star2 = loadImage("Images/Star 2.png");
  starring = loadImage("Images/Starring.png");
  moonandcloud = loadImage("Images/Moonandcloud.png");
  stage1 = loadImage("Images/stage1.png");
  stage2 = loadImage("Images/stage2.png");
  stage3 = loadImage("Images/stage3.png");
  rem = loadImage("Images/rem.png");

  font = loadFont("Kat Handwritten/KatHandwritten-Regular.ttf");
  fontitc = loadFont("Kat Handwritten/KatHandwritten-Italic.ttf");
  fontbld = loadFont("Kat Handwritten/KatHandwritten-Bold.ttf");
}

function setup() {
  createCanvas(800, 1250);
  noLoop(); // Prevent draw from looping
}

function draw() {
  background(225);
  image(bkg, 0, 0, 800, 1250);

  // Heading
  image(moonandcloud, 10, 0, 385, 320);
  fill(199, 223, 239);
  textSize(50);
  textFont(font);
  text("The 4 Stages of Sleep", 250, 120);

  push();
  strokeWeight(5);
  stroke(199, 223, 239);
  line(300, 145, 700, 145);
  pop();

  // Body
  image(starring, 0, 375, 335, 676);

  // Blurb at left
  push();
  fill(199, 223, 239);
  textSize(23);
  textFont(fontbld);
  text("Sleep is not \n a uniform state \n of being. Instead, \nsleep is composed \n of several different \n stages that can be \n differentiated from \n one another by the \n patterns of brain wave \n activity that occur \n during each stage. \n \n Sleep can be divided \n into two different \n general phases: \n REM sleep and \n non-REM (NREM) \n sleep.", 10, 480);
  pop();

  // Stage 1
  fill(199, 223, 239);
  textSize(50);
  textFont(font);
  text("Stage 1:", 50, 365);

  push();
  fill(199, 223, 239);
  textSize(20);
  textFont(font);
  text("The transitional first stage in non-REM sleep. \n This is the period in which you're beginning to fall asleep. \n During this time, there is a slowdown in both the rates \n of respiration and heartbeat, as well as a marked \n decrease in both overall muscle tension and core body \n temperature. It is easy to wake someone from this stage. \n This stage lasts apx. 1-7 minutes, and if unninterrupted, \n can transition quickly into stage 2.", 250, 320);
  pop();

  // Stage 2
  fill(199, 223, 239);
  textSize(50);
  textFont(font);
  text("Stage 2:", 350, 560);

  push();
  fill(199, 223, 239);
  textSize(20);
  textFont(font);
  text("The second stage of non-REM sleep. \n In this stage, the body goes into a state \n of deep relaxation. Brain activity slows, \n but short bursts of activity help keep you \n asleep. This stage lasts apx. 10-25 minutes \n during the first sleep cycle, but can become \n longer during each cycle. On average, people \n tend to spend about half their sleep in this \n stage.", 375, 600);
  pop();

  // Stage 3
  fill(199, 223, 239);
  textSize(50);
  textFont(font);
  text("Stage 3:", 350, 865);

  push();
  fill(199, 223, 239);
  textSize(20);
  textFont(font);
  text("This is the third stage of non-REM sleep, also known \n as deep sleep. It is harder to wake someone from \n this stage. Muscle tone, pulse, and breathing rate \n decrease as the body relaxes even further. This \n stage lasts apx. 20-40 minutes, and get shorter \n each cycle.", 300, 905);
  pop();

  // REM Sleep
  fill(199, 223, 239);
  textSize(50);
  textFont(font);
  text("REM Sleep:", 140, 1090);

  push();
  fill(199, 223, 239);
  textSize(20);
  textFont(font);
  text("Often referred to as paradoxical sleep. This is the period of sleep where \ndreaming occurs, and is marked by rapid movements of the eyes. \nLasts apx. 10-60 minutes.", 50, 1125);
  pop();

  // Display hover image if set
  if (hoverImage) {
    let imgX = hoverImage.x;
    let imgY = hoverImage.y;

    // Ensure the image stays within the canvas boundaries
    if (imgX + hoverImage.img.width > width) {
      imgX = width - hoverImage.img.width;
    }
    if (imgY + hoverImage.img.height > height) {
      imgY = height - hoverImage.img.height;
    }

    image(hoverImage.img, imgX, imgY);
  }
}

function mouseMoved() {
  // Check if mouse is over "Stage 1" text
  if (mouseX > 50 && mouseX < 50 + textWidth("Stage 1:") && mouseY > 365 - 50 && mouseY < 365) {
    hoverImage = { img: stage1, x: 50, y: 400 };
  } 
  // Check if mouse is over "Stage 2" text
  else if (mouseX > 350 && mouseX < 350 + textWidth("Stage 2:") && mouseY > 560 - 50 && mouseY < 560) {
    hoverImage = { img: stage2, x: 350, y: 600 };
  } 
  // Check if mouse is over "Stage 3" text
  else if (mouseX > 350 && mouseX < 350 + textWidth("Stage 3:") && mouseY > 865 - 50 && mouseY < 865) {
    hoverImage = { img: stage3, x: 350, y: 905 };
  } 
  // Check if mouse is over "REM Sleep" text
  else if (mouseX > 140 && mouseX < 140 + textWidth("REM Sleep:") && mouseY > 1090 - 50 && mouseY < 1090) {
    hoverImage = { img: rem, x: 140, y: 1130 };
  } 
  else {
    hoverImage = null;
  }

  // Redraw the canvas to trigger the hover effect
  redraw();
}
