var tempo;
var x = 0
var y = 0
var z = 0
var q = 0


function preload() {
  //cargar cancion 
  mySound = loadSound('1.mp3');

}

function setup() {
  //play a la cancion
  mySound.play();
  tempo = millis();
  createCanvas(400, 400)
  amplitude = new p5.Amplitude();
  inicio = millis();
}

function draw() {
  //cargar la herramiento de analisis
  tempo = millis();
  var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 400);
  //primeros 3 segundos
  
  if (tempo < 3000 + inicio) {
    background(255,255,255) 
    bezier(0, 400, 200, 200 + (size * 3), 200, 100 + (size * 3), 200, 80 + (size * 3));
    bezier(400, 400, 200, 200 + (size * 3), 200, 100 + (size * 3), 200, 80 + (size * 3));
		 
  }
  //primeros 5.5 segundos
  if (tempo > 3000 + inicio && tempo < 5500 + inicio) {
    x++
    ellipse(x, x, size, size)
    ellipse(200, 400 - x, size, size)
    ellipse(400 - x, x, size, size)

  }
  //primeros 6 segundos
  if (tempo > 5500 + inicio && tempo < 6000 + inicio) {
    noFill()
     
    ellipse(200, 200, size * 5, size * 2)
    ellipse(200, 200, size * 5, size * 5)
    ellipse(200, 200, size * 2, size * 2)
    ellipse(200, 200, size * 2, size * 5)


  }
  //primeros 8.5 segundos
  if (tempo > 6000 + inicio && tempo < 8500 + inicio) {
    x += 2
    fill(255,255,255)
    ellipse(x, x, size, size)
    ellipse(200, 400 - x, size, size)
    ellipse(400 - x, x, size, size)

  }
  //primeros 9.5 segundos

  if (tempo > 8500 + inicio && tempo < 9500 + inicio) {

    for (y = 0; y < 400; y += size) {
      line(y, 0, y, 400)
    }

  }
  //primeros 12 segundos

  if (tempo > 9500 + inicio && tempo < 12000 + inicio) {

    q += 3
    rect(0, q, 400, q)
    rect(0, 400 - q, 400, 400 - q)
    rect(q, 0, q, 400)
    rect(400 - q, 0, 400 - q, 400)
    rect(q, 0, 400, q)
    rect(0, q, q, 400)
    rect(q, 0, 400, q)
    rect(0, 400 - q, 400 - q, 400)

  }
  //primeros 13 segundos
  if (tempo > 12000 + inicio && tempo < 13000 + inicio) {


    z += 3
    fill(0, 0, 0)

    ellipse(200, 200, z, z)
    rect(0, 0, z, z)
    rect(400, 0, -z, z)
    rect(0, 400, z, -z)
    rect(400, 400, -z, -z)



  }
  //cambio de color de fondo
  if (tempo > 13000 + inicio) {

    background(0, 0, 0)

  }
  
  //primeros 15.5 segundos

  if (tempo > 13000 + inicio && tempo < 15500 + inicio) {

    if (tempo > 13000 + inicio) {

      background(0, 0, 0)

    }
    if (tempo > 13500 + inicio) {
      stroke(255, 255, 255)
      fill(255, 255, 255)
      var w = random(0, 300)
      var e = random(0, 300)
      line(200, 200, e, w)

    }
    if (tempo > 14000 + inicio) {

      stroke(255, 255, 255)
      fill(255, 255, 255)
      var r = random(0, 300)
      var t = random(0, 300)
      line(200, 200, r, t)

    }
    if (tempo > 14500 + inicio) {
      stroke(255, 255, 255)
      fill(255, 255, 255)

      line(200, 200, 400 - r, 400 - t)


    }
    if (tempo > 15000 + inicio) {


      line(200, 200, 400 - e, 400 - w)
    }
    
  }
  if (tempo > 15500 + inicio && tempo < 16000 + inicio) {
      mySound.stop()
      background(0, 0, 0)

    }

}
