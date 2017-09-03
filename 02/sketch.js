
var alto = 167
var ancho = 54
function setup() { 
  createCanvas(650, 1000);
  background(208,200,170);
} 

function draw() 
{ 
	// patron rectangulos negros verticales
  for (x=0;x<6;x+=2)
  {
    noStroke()
    fill(0,0,0)
		rect(0,alto*x,ancho*12,alto)
  }
  // patron lineas blancas
  stroke(255,255,255)
  strokeWeight(1)
	
  line(0,alto/2,ancho*12,alto/2)
  for(x=0;x<12;x++)
  {
  	 line(ancho/2+(ancho*x),0,ancho/2+(ancho*x),alto)
  }
  
  line(0,alto/2+(alto*4),ancho*12,alto/2+(alto*4))
  for(x=0;x<12;x++)
  {
  	 line(ancho/2+(ancho*x),(alto*4),ancho/2+(ancho*x),alto*5)
  }
  
  //patron lineas rojas
  
  stroke(168,68,52)
	

  line(0,alto/2+(alto*2),ancho*12,alto/2+(alto*2))
  for(x=0;x<12;x++)
  {
  	 line(ancho/2+(ancho*x),(alto*2),ancho/2+(ancho*x),alto*3)
  }
  
  line(0,alto/2+(alto*3),ancho*12,alto/2+(alto*3))
  for(x=0;x<12;x++)
  {
  	 line(ancho/2+(ancho*x),(alto*3),ancho/2+(ancho*x),alto*4)
  }
  
  //patron lineas negras
  
   stroke(0,0,0)
	

  line(0,alto/2+(alto),ancho*12,alto/2+(alto))
  for(x=0;x<12;x++)
  {
  	 line(ancho/2+(ancho*x),(alto),ancho/2+(ancho*x),alto*2)
  }
  
  line(0,alto/2+(alto*5),ancho*12,alto/2+(alto*5))
  for(x=0;x<12;x++)
  {
  	 line(ancho/2+(ancho*x),(alto*5),ancho/2+(ancho*x),alto*6)
  }
  
  // patrones rectangulos rojos y transparentes 1 
  noStroke()
  fill(168,68,52)
  for(x=0;x<12;x+=2)
  {
  rect(ancho,alto/12*x,ancho,alto/12)
  }
   
  fill(208,200,170)
  for(x=0;x<12;x+=2)
  {
  rect(ancho,alto/12*x+(alto/12),ancho,alto/12)
  }
  
   // patrones rectangulos rojos y transparentes 2 
  noStroke()
  fill(168,68,52)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*6,alto/12*x,ancho,alto/12)
  }
   
  fill(208,200,170)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*6,alto/12*x+(alto/12),ancho,alto/12)
  }

  // patrones rectangulos rojos y transparentes 3 
  noStroke()
  fill(168,68,52)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*8,alto/12*x,ancho,alto/12)
  }
   
  fill(208,200,170)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*8,alto/12*x+(alto/12),ancho,alto/12)
  }
  
   // patrones rectangulos rojos y transparentes 4 
  noStroke()
  fill(168,68,52)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*11,alto/12*x,ancho,alto/12)
  }
   
  fill(208,200,170)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*11,alto/12*x+(alto/12),ancho,alto/12)
  }
  
   // patrones rectangulos negros y cafes 1 
  noStroke()
  fill(76,57,46)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*2,alto/12*x,ancho,alto/12)
  }
   
  fill(184,175,144)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*2,alto/12*x+(alto/12),ancho,alto/12)
  }
  // patrones rectangulos negros y cafes 2 
  noStroke()
  fill(76,57,46)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*4,alto/12*x,ancho,alto/12)
  }
   
  fill(184,175,144)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*4,alto/12*x+(alto/12),ancho,alto/12)
  }
  // patrones rectangulos negros y cafes 3 
  noStroke()
  fill(76,57,46)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*7,alto/12*x,ancho,alto/12)
  }
   
  fill(184,175,144)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*7,alto/12*x+(alto/12),ancho,alto/12)
  }
  // patrones rectangulos negros y cafes 4 
  noStroke()
  fill(76,57,46)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*10,alto/12*x,ancho,alto/12)
  }
   
  fill(184,175,144)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*10,alto/12*x+(alto/12),ancho,alto/12)
  }
  
  // patrones rectangulos rojos y transparentes 5 
  noStroke()
  fill(168,68,52)
  for(x=0;x<12;x+=2)
  {
  rect(0,alto/12*x+(alto),ancho,alto/12)
  }
   
  fill(208,200,170)
  for(x=0;x<12;x+=2)
  {
  rect(0,alto/12*x+(alto/12)+(alto),ancho,alto/12)
  }
  
    // patrones rectangulos rojos y transparentes 6 
  noStroke()
  fill(168,68,52)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*3,alto/12*x+(alto),ancho,alto/12)
  }
   
  fill(208,200,170)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*3,alto/12*x+(alto/12)+(alto),ancho,alto/12)
  }
  // patrones rectangulos rojos y transparentes 7 
  noStroke()
  fill(168,68,52)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*5,alto/12*x+(alto),ancho,alto/12)
  }
   
  fill(208,200,170)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*5,alto/12*x+(alto/12)+(alto),ancho,alto/12)
  }
  // patrones rectangulos rojos y transparentes 8 
  noStroke()
  fill(168,68,52)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*9,alto/12*x+(alto),ancho,alto/12)
  }
   
  fill(208,200,170)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*9,alto/12*x+(alto/12)+(alto),ancho,alto/12)
  }
  // patrones rectangulos negros y cafes 5 
  noStroke()
  fill(76,57,46)
  for(x=0;x<12;x+=2)
  {
  rect(ancho,alto/12*x+(alto),ancho,alto/12)
  }
   
  fill(184,175,144)
  for(x=0;x<12;x+=2)
  {
  rect(ancho,alto/12*x+(alto/12)+(alto),ancho,alto/12)
  }
  // patrones rectangulos negros y cafes 6 
  noStroke()
  fill(76,57,46)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*6,alto/12*x+(alto),ancho,alto/12)
  }
   
  fill(184,175,144)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*6,alto/12*x+(alto/12)+(alto),ancho,alto/12)
  }
   // patrones rectangulos negros y cafes 7 
  noStroke()
  fill(76,57,46)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*8,alto/12*x+(alto),ancho,alto/12)
  }
   
  fill(184,175,144)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*8,alto/12*x+(alto/12)+(alto),ancho,alto/12)
  }
     // patrones rectangulos negros y cafes 8 
  noStroke()
  fill(76,57,46)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*11,alto/12*x+(alto),ancho,alto/12)
  }
   
  fill(184,175,144)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*11,alto/12*x+(alto/12)+(alto),ancho,alto/12)
  }
  
  // patrones rectangulos rojos y transparentes 9 
  noStroke()
  fill(168,68,52)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*2,alto/12*x+(alto*2),ancho,alto/12)
  }
   
  fill(208,200,170)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*2,alto/12*x+(alto/12)+(alto*2),ancho,alto/12)
  }
  // patrones rectangulos rojos y transparentes 10 
  noStroke()
  fill(168,68,52)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*4,alto/12*x+(alto*2),ancho,alto/12)
  }
   
  fill(208,200,170)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*4,alto/12*x+(alto/12)+(alto*2),ancho,alto/12)
  }
  // patrones rectangulos rojos y transparentes 11 
  noStroke()
  fill(168,68,52)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*7,alto/12*x+(alto*2),ancho,alto/12)
  }
   
  fill(208,200,170)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*7,alto/12*x+(alto/12)+(alto*2),ancho,alto/12)
  }
  // patrones rectangulos rojos y transparentes 12 
  noStroke()
  fill(168,68,52)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*10,alto/12*x+(alto*2),ancho,alto/12)
  }
   
  fill(208,200,170)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*10,alto/12*x+(alto/12)+(alto*2),ancho,alto/12)
  }
   // patrones rectangulos negros y cafes 9 
  noStroke()
  fill(184,175,144)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*0,alto/12*x+(alto*2),ancho,alto/12)
  }
   
  fill(76,57,46)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*0,alto/12*x+(alto/12)+(alto*2),ancho,alto/12)
  }
     // patrones rectangulos negros y cafes 10 
  noStroke()
  fill(184,175,144)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*3,alto/12*x+(alto*2),ancho,alto/12)
  }
   
  fill(76,57,46)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*3,alto/12*x+(alto/12)+(alto*2),ancho,alto/12)
  }
	// patrones rectangulos negros y cafes 11 
  noStroke()
  fill(184,175,144)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*5,alto/12*x+(alto*2),ancho,alto/12)
  }
   
  fill(76,57,46)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*5,alto/12*x+(alto/12)+(alto*2),ancho,alto/12)
  }
  // patrones rectangulos negros y cafes 12 
  noStroke()
  fill(184,175,144)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*9,alto/12*x+(alto*2),ancho,alto/12)
  }
   
  fill(76,57,46)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*9,alto/12*x+(alto/12)+(alto*2),ancho,alto/12)
  }
  // patrones rectangulos rojos y transparentes 13 
  noStroke()
  fill(168,68,52)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*2,alto/12*x+(alto*3),ancho,alto/12)
  }
   
  fill(208,200,170)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*2,alto/12*x+(alto/12)+(alto*3),ancho,alto/12)
  }
  // patrones rectangulos rojos y transparentes 14 
  noStroke()
  fill(168,68,52)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*4,alto/12*x+(alto*3),ancho,alto/12)
  }
   
  fill(208,200,170)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*4,alto/12*x+(alto/12)+(alto*3),ancho,alto/12)
  }
  // patrones rectangulos rojos y transparentes 15 
  noStroke()
  fill(168,68,52)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*7,alto/12*x+(alto*3),ancho,alto/12)
  }
   
  fill(208,200,170)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*7,alto/12*x+(alto/12)+(alto*3),ancho,alto/12)
  }
  // patrones rectangulos rojos y transparentes 16 
  noStroke()
  fill(168,68,52)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*10,alto/12*x+(alto*3),ancho,alto/12)
  }
   
  fill(208,200,170)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*10,alto/12*x+(alto/12)+(alto*3),ancho,alto/12)
  }
    // patrones rectangulos negros y cafes 13 
  noStroke()
  fill(184,175,144)
  for(x=0;x<12;x+=2)
  {
  rect(ancho,alto/12*x+(alto*3),ancho,alto/12)
  }
   
  fill(76,57,46)
  for(x=0;x<12;x+=2)
  {
  rect(ancho,alto/12*x+(alto/12)+(alto*3),ancho,alto/12)
  }
     // patrones rectangulos negros y cafes 14 
  noStroke()
  fill(184,175,144)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*6,alto/12*x+(alto*3),ancho,alto/12)
  }
   
  fill(76,57,46)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*6,alto/12*x+(alto/12)+(alto*3),ancho,alto/12)
  }
      // patrones rectangulos negros y cafes 15 
  noStroke()
  fill(184,175,144)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*8,alto/12*x+(alto*3),ancho,alto/12)
  }
   
  fill(76,57,46)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*8,alto/12*x+(alto/12)+(alto*3),ancho,alto/12)
  }
     // patrones rectangulos negros y cafes 16 
  noStroke()
  fill(184,175,144)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*11,alto/12*x+(alto*3),ancho,alto/12)
  }
   
  fill(76,57,46)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*11,alto/12*x+(alto/12)+(alto*3),ancho,alto/12)
  }
   // patrones rectangulos rojos y transparentes 17 
  noStroke()
  fill(168,68,52)
  for(x=0;x<12;x+=2)
  {
  rect(ancho,alto/12*x+(alto*4),ancho,alto/12)
  }
   
  fill(208,200,170)
  for(x=0;x<12;x+=2)
  {
  rect(ancho,alto/12*x+(alto/12)+(alto*4),ancho,alto/12)
  }
  // patrones rectangulos rojos y transparentes 18 
  noStroke()
  fill(168,68,52)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*6,alto/12*x+(alto*4),ancho,alto/12)
  }
   
  fill(208,200,170)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*6,alto/12*x+(alto/12)+(alto*4),ancho,alto/12)
  }
  // patrones rectangulos rojos y transparentes 19 
  noStroke()
  fill(168,68,52)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*8,alto/12*x+(alto*4),ancho,alto/12)
  }
   
  fill(208,200,170)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*8,alto/12*x+(alto/12)+(alto*4),ancho,alto/12)
  }
   // patrones rectangulos rojos y transparentes 20 
  noStroke()
  fill(168,68,52)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*11,alto/12*x+(alto*4),ancho,alto/12)
  }
   
  fill(208,200,170)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*11,alto/12*x+(alto/12)+(alto*4),ancho,alto/12)
  }
  
       // patrones rectangulos negros y cafes 17 
  noStroke()
  fill(184,175,144)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*0,alto/12*x+(alto*4),ancho,alto/12)
  }
   
  fill(76,57,46)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*0,alto/12*x+(alto/12)+(alto*4),ancho,alto/12)
  }
       // patrones rectangulos negros y cafes 18 
  noStroke()
  fill(184,175,144)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*3,alto/12*x+(alto*4),ancho,alto/12)
  }
   
  fill(76,57,46)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*3,alto/12*x+(alto/12)+(alto*4),ancho,alto/12)
  }
       // patrones rectangulos negros y cafes 19 
  noStroke()
  fill(184,175,144)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*5,alto/12*x+(alto*4),ancho,alto/12)
  }
   
  fill(76,57,46)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*5,alto/12*x+(alto/12)+(alto*4),ancho,alto/12)
  }
       // patrones rectangulos negros y cafes 20 
  noStroke()
  fill(184,175,144)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*9,alto/12*x+(alto*4),ancho,alto/12)
  }
   
  fill(76,57,46)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*9,alto/12*x+(alto/12)+(alto*4),ancho,alto/12)
  }
  // patrones rectangulos rojos y transparentes 21 
  noStroke()
  fill(168,68,52)
  for(x=0;x<12;x+=2)
  {
  rect(0,alto/12*x+(alto*5),ancho,alto/12)
  }
   
  fill(208,200,170)
  for(x=0;x<12;x+=2)
  {
  rect(0,alto/12*x+(alto/12)+(alto*5),ancho,alto/12)
  }
  // patrones rectangulos rojos y transparentes 22 
  noStroke()
  fill(168,68,52)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*3,alto/12*x+(alto*5),ancho,alto/12)
  }
   
  fill(208,200,170)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*3,alto/12*x+(alto/12)+(alto*5),ancho,alto/12)
  }
   // patrones rectangulos rojos y transparentes 23 
  noStroke()
  fill(168,68,52)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*5,alto/12*x+(alto*5),ancho,alto/12)
  }
   
  fill(208,200,170)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*5,alto/12*x+(alto/12)+(alto*5),ancho,alto/12)
  }
   // patrones rectangulos rojos y transparentes 24 
  noStroke()
  fill(168,68,52)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*9,alto/12*x+(alto*5),ancho,alto/12)
  }
   
  fill(208,200,170)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*9,alto/12*x+(alto/12)+(alto*5),ancho,alto/12)
  }
  // patrones rectangulos negros y cafes 21 
  noStroke()
  fill(184,175,144)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*2,alto/12*x+(alto*5),ancho,alto/12)
  }
   
  fill(76,57,46)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*2,alto/12*x+(alto/12)+(alto*5),ancho,alto/12)
  }
  
 // patrones rectangulos negros y cafes 22 
  noStroke()
  fill(184,175,144)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*4,alto/12*x+(alto*5),ancho,alto/12)
  }
   
  fill(76,57,46)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*4,alto/12*x+(alto/12)+(alto*5),ancho,alto/12)
  }
  // patrones rectangulos negros y cafes 23 
  noStroke()
  fill(184,175,144)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*7,alto/12*x+(alto*5),ancho,alto/12)
  }
   
  fill(76,57,46)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*7,alto/12*x+(alto/12)+(alto*5),ancho,alto/12)
  }
  
  // patrones rectangulos negros y cafes 24 
  noStroke()
  fill(184,175,144)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*10,alto/12*x+(alto*5),ancho,alto/12)
  }
   
  fill(76,57,46)
  for(x=0;x<12;x+=2)
  {
  rect(ancho*10,alto/12*x+(alto/12)+(alto*5),ancho,alto/12)
  }
  
}