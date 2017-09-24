var B1 = 0;
var B2 = 1;
var B3 = 2;
var B4 = 3;
var B5 = 4;
var B6 = 5;
var B7 = 6;
var B8 = 7;
var B9 = 8;
var B10 = 9;
var B11 = 9;
var R = 0;
var G = 0;
var B = 0;
var Alto = 0;
var Ancho = 0;
var D = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 255);


}

function draw() {
  stroke(0, 0, 0)
  var Alto = (windowHeight / 6)
  var Ancho = (windowWidth / 12)
 
  // primera columna
  fill(255, 0, 0)
  rect(0, 0, Ancho, Alto)
  fill(0, 255, 0)
  rect(0, 0 + (Alto * 1), Ancho, Alto)
  fill(0, 0, 255)
  rect(0, 0 + (Alto * 2), Ancho, Alto)
  fill(255, 255, 255)
  rect(0, 0 + (Alto * 3), Ancho, Alto)
  rect(0, 0 + (Alto * 4), Ancho, Alto)
  rect(0, 0 + (Alto * 5), Ancho, Alto)
  // segunda columna
  fill(255, 0, 0)
  rect(0 + Ancho, 0, Ancho, Alto)
  fill(0, 255, 0)
  rect(0 + Ancho, 0 + (Alto * 1), Ancho, Alto)
  fill(0, 0, 255)
  rect(0 + Ancho, 0 + (Alto * 2), Ancho, Alto)
  fill(255, 255, 255)
  rect(0 + Ancho, 0 + (Alto * 3), Ancho, Alto)
  rect(0 + Ancho, 0 + (Alto * 4), Ancho, Alto)
  rect(0 + Ancho, 0 + (Alto * 5), Ancho, Alto)
  // tercera columna
  rect(0 + (Ancho * 11), 0, Ancho, Alto)
  rect(0 + (Ancho * 11), 0 + (Alto * 1), Ancho, Alto)
  rect(0 + (Ancho * 11), 0 + (Alto * 2), Ancho, Alto)
  rect(0 + (Ancho * 11), 0 + (Alto * 3), Ancho, Alto)
  rect(0 + (Ancho * 11), 0 + (Alto * 4), Ancho, Alto)
  rect(0 + (Ancho * 11), 0 + (Alto * 5), Ancho, Alto)
  // nombre botones
  fill(0, 0, 0)
  textSize(35)
  // cambiar color 
  text("+", Ancho / 3, Alto / 1.5)
  text("+", Ancho / 3, Alto * 1.7)
  text("+", Ancho / 3, Alto * 2.7)

  text("-", Ancho * 1.4, Alto / 1.5)
  text("-", Ancho * 1.4, Alto * 1.7)
  text("-", Ancho * 1.4, Alto * 2.7)
  // borrar todo y borrar parcial 
  text("B", Ancho / 3, Alto * 3.7)
  text("N", Ancho * 1.3, Alto * 3.7)
  // formas 
  text("1", Ancho / 3, Alto * 4.6)
  text("2", Ancho * 1.3, Alto * 4.6)
  text("3", Ancho / 3, Alto * 5.6)
  text("4", Ancho * 1.3, Alto * 5.6)
  text("5", Ancho * 11.4, Alto / 1.5)
  text("6", Ancho * 11.4, Alto * 1.7)
  text("7", Ancho * 11.4, Alto * 2.7)
  text("8", Ancho * 11.4, Alto * 3.7)
  text("9", Ancho * 11.4, Alto * 4.7)
  text("10", Ancho * 11.2, Alto * 5.5)
  if (mouseIsPressed) {
    // cambio rojo
    if (mouseX > 0 && mouseX < Ancho && mouseY > 0 && mouseY < Alto) {
      R += 10;
    } else if (mouseX > Ancho && mouseX < (Ancho * 2) && mouseY > 0 && mouseY < Alto) {
      R -= 10;
    }
    // cambio verde
    else if (mouseX > 0 && mouseX < Ancho && mouseY > Alto && mouseY < (Alto * 2)) {
      G += 10;
    } else if (mouseX > Ancho && mouseX < (Ancho * 2) && mouseY > Alto && mouseY < (Alto * 2)) {
      G -= 10;
    }
    // cambio azul
    else if (mouseX > 0 && mouseX < Ancho && mouseY > (Alto * 2) && mouseY < (Alto * 3)) {
      B += 10;
    } else if (mouseX > Ancho && mouseX < (Ancho * 2) && mouseY > (Alto * 2) && mouseY < (Alto * 3)) {
      B -= 10;
    }
    // fondo blanco
    else if (mouseX > 0 && mouseX < Ancho && mouseY > (Alto * 3) && mouseY < (Alto * 4)) {
      background(255, 255, 255)
    }
    // fondo negro
    else if (mouseX > Ancho && mouseX < (Ancho * 2) && mouseY > (Alto * 3) && mouseY < (Alto * 4)) {
      background(0, 0, 0)
    }
    // figura 1
    else if (mouseX > 0 && mouseX < Ancho && mouseY > (Alto * 4) && mouseY < (Alto * 5)) {
      D = B1;
    }
    // figura 2
    else if (mouseX > Ancho && mouseX < (Ancho * 2) && mouseY > (Alto * 4) && mouseY < (Alto * 5)) {
      D = B2;
    }
    // figura 3
    else if (mouseX > 0 && mouseX < Ancho && mouseY > (Alto * 5) && mouseY < (Alto * 6)) {
      D = B3;
    }
    // figura 4
    else if (mouseX > Ancho && mouseX < (Ancho * 2) && mouseY > (Alto * 5) && mouseY < (Alto * 6)) {
      D = B4;
    }
    // figura 5
    else if (mouseX > (Ancho * 11) && mouseX < (Ancho * 12) && mouseY > 0 && mouseY < Alto) {
      D = B5;
    }
    // figura 6
    else if (mouseX > (Ancho * 11) && mouseX < (Ancho * 12) && mouseY > (Alto) && mouseY < (Alto * 2)) {
      D = B6;
    }
    // figura 7
    else if (mouseX > (Ancho * 11) && mouseX < (Ancho * 12) && mouseY > (Alto * 2) && mouseY < (Alto * 3)) {
      D = B7;
    }
    // figura 8
    else if (mouseX > (Ancho * 11) && mouseX < (Ancho * 12) && mouseY > (Alto * 3) && mouseY < (Alto * 4)) {
      D = B8;
    }
    // figura 9
    else if (mouseX > (Ancho * 11) && mouseX < (Ancho * 12) && mouseY > (Alto * 4) && mouseY < (Alto * 5)) {
      D = B9;
    }
    // figura 10
    else if (mouseX > (Ancho * 11) && mouseX < (Ancho * 12) && mouseY > (Alto * 5) && mouseY < (Alto * 6)) {
      D = B10;
    }
    // para dibujar
    else {
      fill(R, G, B)
      stroke(R, G, B)
      if (D == B1) {
        line(mouseX, mouseY, Ancho * 2, 0)
        line(mouseX, mouseY, Ancho * 2, windowWidth)
        line(mouseX, mouseY, Ancho * 11, 0)
        line(mouseX, mouseY, Ancho * 11, windowWidth)
      } else if (D == B2) {
        
        noFill()
        beginShape()
        vertex(mouseX, mouseY)
        vertex(mouseX,windowHeight - mouseY)
        vertex(windowWidth - mouseX, windowHeight - mouseY)
        vertex(windowWidth - mouseX,mouseY)
        endShape(CLOSE)
      } else if (D == B3) {
        var xy = Ancho * 4
        for (x = 0; x <= 100; x += 10) {
          xy += 20
          line(mouseX, mouseY, xy, 0)
        }
      } else if (D == B4) {

        var xy2 = Ancho * 4
        for (x = 0; x <= 100; x += 10) {
          xy2 += 20
          line(mouseX, mouseY, xy2, windowHeight)
        }

      } else if (D == B5) {
        for (x = 0; x <= 100; x += 10) {
          noFill()
          ellipse(mouseX, mouseY, x, x)
        }
      } else if (D == B6) {
        noFill()
        beginShape()
        vertex(windowWidth - mouseX, windowHeight - mouseY)
        vertex(windowWidth / 2, 0)
        vertex(windowWidth / 2, windowHeight)
        vertex(mouseX, mouseY)
        endShape(CLOSE)

      } else if (D == B7) {

        noFill()
        beginShape()
        vertex(windowWidth - mouseX, windowHeight - mouseY)
        vertex(Ancho * 2, (windowHeight / 2))
        vertex(Ancho * 11, (windowHeight / 2))
        vertex(mouseX, mouseY)
        endShape(CLOSE)

      } else if (D == B8) {

        fill(R, G, B)
        stroke(255 - R, 255 - G, 255 - B)

        arc(mouseX + 30, mouseY + 30, 30, 30, 0, HALF_PI);
        arc(mouseX - 30, mouseY - 30, 30, 30, PI, PI + HALF_PI);
        arc(mouseX + 30, mouseY - 30, 30, 30, HALF_PI + PI, PI + PI);
        arc(mouseX - 30, mouseY + 30, 30, 30, HALF_PI, PI);

        arc(mouseX, mouseY + 45, 30, 30, HALF_PI / 2, PI - (HALF_PI / 2));
        arc(mouseX, mouseY - 45, 30, 30, HALF_PI / 2 + PI, PI - (HALF_PI / 2) + PI);
        arc(mouseX - 45, mouseY, 30, 30, HALF_PI / 2 + HALF_PI, PI - (HALF_PI / 2) + HALF_PI);
        arc(mouseX + 45, mouseY, 30, 30, HALF_PI / 2 + HALF_PI + PI, PI - (HALF_PI / 2) + HALF_PI + PI);


      } else if (D == B9) {

        if (mouseX < (windowWidth / 2) && mouseY < (windowHeight / 2)) {
          quad(Ancho * 2, 0, mouseX, mouseY * 0.8, mouseX, mouseY, mouseX * 0.8, mouseY);
        } else if (mouseX > (windowWidth / 2) && mouseY > (windowHeight / 2)) {
          quad(Ancho * 11, windowHeight, mouseX, mouseY * 0.8, mouseX, mouseY, mouseX * 0.8, mouseY);
        } else if (mouseX > (windowWidth / 2) && mouseY < (windowHeight / 2)) {
          quad(Ancho * 11, 0, mouseX, mouseY * 0.8, mouseX, mouseY, mouseX * 0.8, mouseY);
        } else if (mouseX < (windowWidth / 2) && mouseY > (windowHeight / 2)) {
          quad(Ancho * 2, windowHeight, mouseX, mouseY * 0.8, mouseX, mouseY, mouseX * 0.8, mouseY);
        }

      } else if (D == B10) 
      {
				noFill()
        beginShape()
        vertex(mouseX, mouseY)
        vertex(windowWidth/2,windowHeight/2)
        vertex(mouseX,windowHeight - mouseY)
        vertex(windowWidth/2,windowHeight/2)
        vertex(windowWidth - mouseX, windowHeight - mouseY)
        vertex(windowWidth/2,windowHeight/2)
        vertex(windowWidth - mouseX,mouseY)
        vertex(windowWidth/2,windowHeight/2)
        endShape(CLOSE)
      }
    }


  }

}