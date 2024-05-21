let bkg, star1, star2, starring, moonandcloud, font;

function preload() {
  bkg = loadImage ("Images/Background.svg");
  star1 = loadImage ("Images/Star 1.png");
  star2 = loadImage ("Images/Star 2.png");
  starring = loadImage ("Images/Starring.png");
  moonandcloud = loadImage ("Images/Moonandcloud.png");

  font = loadFont ("Kat Handwritten/KatHandwritten-Regular.ttf");
}

function setup() {
  createCanvas(800, 1200);
}

function draw() {
  background(225);
  image(bkg, 0, 0, 800, 1200)

  //Heading
  image(moonandcloud, 10, 0, 383,320)


  //Body
  image(starring, 0, 350,335, 676)

  


}
