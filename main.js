let bg1;
let waterbg;
let firebg;
let grassbg;

let dragon1;
let dragon2;
let dragon3;

let rectLength = 200;
let rectWidth = 300;

let button1;
let button2;
let button3;
let fireMapButton;
let grassMapButton;
let waterMapButton;

let starterText;
let font1;

let positionSprite;
let exclamation;

let trainer;

let screen = 0; // 0: startup screen, 1: WaterMapScreen, 2: FireMapScreen, 3: GrassMapScreen
let selectedDragon = null;
let fadeStartTime = null;
let textOpacity = 255;

function preload() {
	bg1 = loadImage('background-YfE67HVrj-transformed.jpeg');
	waterbg = loadImage('waterfall.png');
	firebg = loadImage('volcano (1).png');
	grassbg = loadImage('grassbg (1).png');

	dragon1 = loadImage('fire type.webp');
	dragon2 = loadImage('grass dragon.webp');
	dragon3 = loadImage('water type.webp');

	starterText = loadImage('917243e509b07dda19439613ecbf2e42.png');
	positionSprite = loadImage('Mobile - Dynamons - Map (1).png');
	font1 = loadFont('Pokemon Solid.ttf');

	exclamation = loadImage('Mobile - Dynamons - Map (3).png');
	trainer = loadImage('Mobile - Dynamons - Map (5).png');
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	button1 = createButton('Choose');
	button1.position(windowWidth / 4 + 70, windowHeight / 2 - rectLength / 2 + 270);
	button1.mousePressed(() => chooseDragon('Fire'));

	button2 = createButton('Choose');
	button2.position(windowWidth / 2 - 80 + 70, windowHeight / 2 - rectLength / 2 - 50 + 320);
	button2.mousePressed(() => chooseDragon('Water'));

	button3 = createButton('Choose');
	button3.position(windowWidth / 1.5 + 70, windowHeight / 2 - rectLength / 2 - 50 + 320);
	button3.mousePressed(() => chooseDragon('Grass'));
}

function draw() {
	if (screen === 0) {
		startupScreen();
	} else if (screen === 1) {
		WaterMapScreen();
	} else if (screen === 2) {
		FireMapScreen();
	} else if (screen === 3) {
		GrassMapScreen();
	}
}

function startupScreen() {
	background(bg1);

	fill('red');
	rect(windowWidth / 4, windowHeight / 2 - rectLength / 2 - 50, rectLength, rectWidth, 20);
	dragon1.resize(rectLength, rectWidth);
	image(dragon1, windowWidth / 4, windowHeight / 2 - rectLength / 2 - 50);

	fill('blue');
	rect(windowWidth / 2 - 80, windowHeight / 2 - rectLength / 2 - 50, rectLength, rectWidth, 20);
	dragon3.resize(rectLength, rectWidth);
	image(dragon3, windowWidth / 2 - 80, windowHeight / 2 - rectLength / 2 - 50);

	fill('green');
	rect(windowWidth / 1.5, windowHeight / 2 - rectLength / 2 - 50, rectLength, rectWidth, 20);
	dragon2.resize(rectLength, rectWidth);
	image(dragon2, windowWidth / 1.5, windowHeight / 2 - rectLength / 2 - 50);

	image(starterText, windowWidth / 2 - 175, windowHeight / 2 - 325, 400, 100);
}

function chooseDragon(type) {
	selectedDragon = type;
	fadeStartTime = millis();
	button1.remove();
	button2.remove();
	button3.remove();
	screen = 1;
}

function WaterMapScreen() {
	background(waterbg);
	fill(0, textOpacity);
	textSize(32);
	textAlign(CENTER);
	textFont(font1);
	text("You selected: " + selectedDragon + " Dragon", windowWidth / 2, windowHeight / 2 - 100);

	if (fadeStartTime !== null) {
		let elapsed = millis() - fadeStartTime;
		if (elapsed < 3000) {
			textOpacity = map(elapsed, 0, 3000, 255, 0);
		} else {
			fadeStartTime = null;
			textOpacity = 0;
		}
	}

	//Remove button in this map 
	if (fireMapButton) fireMapButton.remove();
	if (grassMapButton) grassMapButton.remove();
	if (waterMapButton) waterMapButton.remove();


	// Position sprites dynamically based on screen size
	let xOffsets = [0.1, 0.2, 0.35, 0.5, 0.65, 0.8, 0.9];
	let yOffsets = [1, 2, 2, 2.5, 3, 4, 3.5];

	for (let i = 0; i < xOffsets.length; i++) {
		image(positionSprite, windowWidth * xOffsets[i], windowHeight * yOffsets[i]);
	}

	// Only "Go to Volcano" button on Water Map
	fireMapButton = createButton('Go to Volcano →');
	fireMapButton.position(windowWidth - 150, windowHeight - 50);
	fireMapButton.mousePressed(switchToFireMap);

}

function switchToFireMap() {
	screen = 2;
}

function FireMapScreen() {
	background(firebg);
	fill(255);
	textSize(32);
	textAlign(CENTER);
	textFont(font1);

	// Remove buttons in this map
	if (fireMapButton) fireMapButton.remove();
	if (grassMapButton) grassMapButton.remove();
	if (waterMapButton) waterMapButton.remove();


	// Only "Go to Waterfall" and "Go to Jungle" buttons in Fire Map
	waterMapButton = createButton('← Go to Waterfall');
	waterMapButton.position(50, windowHeight - 50);
	waterMapButton.mousePressed(switchToWaterMap);

	grassMapButton = createButton('Go to Jungle →');
	grassMapButton.position(windowWidth - 150, windowHeight - 50);
	grassMapButton.mousePressed(switchToGrassMap);
}

function switchToWaterMap() {
	screen = 1;
}

function GrassMapScreen() {
	background(grassbg);
	grassbg.resize(windowWidth / 2, windowHeight / 2);

//Remove button in this map
	if (fireMapButton) fireMapButton.remove();
	if (grassMapButton) grassMapButton.remove();
	if (waterMapButton) waterMapButton.remove();


	// Only "Go to Volcano" button in Grass Map
	fireMapButton = createButton('← Go to Volcano');
	fireMapButton.position(50, windowHeight - 50);
	fireMapButton.mousePressed(switchToFireMap);

}

function switchToGrassMap() {
	screen = 3;
}
