//variables
var img;
var i = 0;
var j = 0;
noprotect()

function preload() {

//cargar imagen
  img = loadImage("cb.png");

}

function setup() {
  createCanvas(500, 400)
  background(255, 255, 255);
  //asignarle un tamaño a la imagen
  image(img, 0, 0, 200, 200);
}

function draw() {
 

//cargar pixeles
  img.loadPixels();
  img.updatePixels();
 

  var pix = img.get(i, j)

     	var r = pix[0]
    	var g= pix[1]
    	var b= pix[2]
      push();
  //filtro 1 encontrar el color mas pequeño y convertirlo en el unico
   if(r<g&&r<b)
   {
   	fill(r,0,0)
   }
  else if(g<b&&g<r)
  {
  	fill(0,g,0)
  }
  else 
  {
  	fill(0,0,b)
  }
	noStroke()
  ellipse(i+200,j,1,1)
  pop();
  
  push();
  //filtro 2 deformar la imagen con base en el tamaño
  var d=0;
  noStroke()
  fill(r,g,b)
  
   if(r<g&&r<b)
   {
     d=10;
   	ellipse(i+200+d,j+200,10,1)
    
   }
  else if(g<b&&g<r)
  {
     d=5;
  	ellipse(i+200+d,j+200,5,1)
   
  }
  else 
  {
    d=0;
  	ellipse(i+200+d,j+200,1,1)
    
  }
  
  pop();
  
  push();
  //construir el negativo de la imagen
  var r2= 255-r
  var g2=255-g
  var b2=255-b
  noStroke();
  fill(r2,g2,b2)
  ellipse(i,j+200,1,1)
       
  pop();
    //recorrer la imagen 
  if(j<img.height)
  {
  	i++
    if(i==img.width)
    {
    	i=0
      j++
    }
  }


  



}