// primeros 16 segundos

var bajos = 4000;
var ancho = 400;
var alto = 300;
var contador = 1;
var tempo = 0;
var tempo2 = 400;
var song;

var y = 0
var mov = true;

function preLoad() {
  song = loadSound('Gojira.mp3');

}


function setup() {


  createCanvas(400, 800);

}

function draw() {
  background(0, 0, 0);

  tiempo = millis();


  // rectangulos bajo


  if (millis() < 16000) {

    if (tiempo > bajos && contador != 3) {

      alto += 300;
      bajos += 650;
      contador++;
    } else if (tiempo > bajos) {
      alto += 300;
      bajos += 1300;
      contador++;
      mov = false;

    }


    if (contador == 5) {
      alto = 300;
      contador = 1;
      y = 0
      mov = true
    }


    strokeWeight(0);
    fill(255, 0, 0);

    if (tiempo < 2850)

    {
      fill(0, 0, 0);
    }
    rect(0, 800 - alto, 800, alto);



  }
  // tempo 
  fill(122, 122, 122)

  rect(0, 0, 100, 800)
  rect(300, 0, 100, 800)


  if (tiempo > tempo) {
    rect(0, 0, 200, 800)
    tempo += 800
  }
  if (tiempo > tempo2) {
    rect(200, 0, 200, 800)
    tempo2 += 800
  }

  if (!mov) {

    y -= 12
  }
  fill(123, 214, 105, 150)
  ellipse(200, 400, y, y)


}