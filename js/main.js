var x = 0;
var speed = 2;
var rectDraw = false;
var circleDraw = true;
var redSlider, greenSlider, blueSlider, sizeSlider;

function setup() {
  createCanvas(window.innerHeight, window.innerWidth);
	background(255);
	sizeSlider = createSlider(0,100,10);
	redSlider = createSlider(0,255,0);
	blueSlider = createSlider(0,255,0);
	greenSlider = createSlider(0,255,0);
	strokeChoice = createSlider(0,1,0);
	rectChoice = createSlider(0,1,0);

	redSlider.position(10,25);
	blueSlider.position(10,45);
	greenSlider.position(10,65);
	sizeSlider.position(100 + redSlider.width,25);
	strokeChoice.position(100 + blueSlider.width,45);
	rectChoice.position(100 + greenSlider.width,65);
}


function draw() {
	fill(255);
	noStroke();
	rect(0,0,700,99);

	stroke(0);
	line(0,100,window.innerWidth,100);
	var isStroke = "no stroke";
	var shape = "rect";
	if(strokeChoice.value() == 1){
		isStroke = "stroke";
	}
	if(rectChoice.value() == 0) {
		shape = "circle";
	}

	fill(0);
	text("red: " + redSlider.value(), 30 + redSlider.width, 40);
  text("green: " + greenSlider.value(), 30 + greenSlider.width, 60);
  text("blue: " + blueSlider.value(), 30 + blueSlider.width, 80);
	text("size: " + sizeSlider.value(), 140 +sizeSlider.width+ redSlider.width, 40);
	text(isStroke, 140 + strokeChoice.width + blueSlider.width, 60);
	text(shape, 140 + rectChoice.width + greenSlider.width, 80);
	if(mouseIsPressed){
		if(strokeChoice.value() == 0){
			noStroke();
		}
		if(mouseY > 110) {
			fill(redSlider.value(),greenSlider.value(),blueSlider.value());
			if(rectChoice.value() == 1) {
				rect(mouseX, mouseY,  sizeSlider.value(), sizeSlider.value());
			} else {
				ellipse(mouseX, mouseY,  sizeSlider.value(), sizeSlider.value());
			}
		}
	}
}
