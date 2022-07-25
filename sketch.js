var canvas;
var backgroundImage, p1_img, p2_img, b1, b1p1, database, game, music, player, form, bb, boi, a, brs, allPlayers
var gameState = 0
var playerCount = 0

function preload() {
  backgroundImage = loadImage("e.jpg");
  p1_img = loadImage("a_person.jpg");
  p2_img = loadImage("blue_bird.jpg");
  b1 = loadImage("boi.jpg");
  b1p1 = loadImage("ms.webp");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
