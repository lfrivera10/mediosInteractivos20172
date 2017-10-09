var song;
var analisis;
var im;
var im2;
var x= 0;
var y= 0;
function preload()
{

  im = loadImage('in-your-face-middlefingers-fuck-you-caps-hats-baseball-cap.jpg ')
  
}

function setup() { 
  createCanvas(1000, 1000);
 //  background(im);
 
} 

function draw() { 


 
  im.loadPixels();
  var pix = im.get(x,y)
//   var r = pix[0]
//   var g= pix[1]
//   var b= pix[2]
  
//   pix[0]= 255-r;
//   pix[1]= 255-g;
//   pix[2]= 255-b;
//   im.set(x,y,pix)
//   im.updatePixels();
 

fill(pix[0],pix[1],pix[2],pix[3])
  strokeWeight(0)
  ellipse(x,y,5,5);
  
  x+=5
  if(x>im.width)
  {
  	x=0;
    y+=5
  }
}