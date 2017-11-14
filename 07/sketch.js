var x = 0;
var y =-100;
var m = 0;
var n =-100;
var v = 0;
var b =-50;
var f = 0;
var  g=-100;
var w = 0;
var e =-100;
var t = 0;
function setup() { 
  createCanvas(400, 400);





  frameRate(5)
  background(0,0,0);

} 

function draw() { 
  


  saveCanvas("flipbook.jpg")
  
  stroke(255,255,255)
  translate(200,200);  
 noFill();
 strokeWeight(2) ;
  ellipse(0,0,50,50);
  ellipse(0,-50,50,50);
  ellipse(0,-100,50,50);
  if(t ==0)
  {
    if(x!= -42)
    {
      x-=2
      y+=3.571
    }
    else
    {
      t++  
      w=x
      e=y
    }
  
  }
  if(t ==1)
  {
    
    if(x!= 42)
    {
      x+=4
      
    }
    else
    {
      t++  
      w=x
      e=y
    }
  
  }
  if(t ==2)
  {
    if(x!= 0)
    {
      x-=2
      y-=3.571
    }
    else
    {
      t++  
      w=x
      e=y
    }
  }
    if(t ==3)
  {
    if(x!= 0)
    {
      x-=2
      y-=3.571
    }
    else
    {
      t++  
      w=x
      e=y
    }
  
  }
	if(t ==4)
  {
    if(y< 0)
    {
      
      y+=4.761
    }
    else
    {
      t++  
      w=x
      e=y
    }
  
  }
 line(w,e,x,y)
	
	if(f>-86)
	{
		g+=1.1905
		f-=2.05
	}
	
	line(0,-100,f,g)
	
	if(v>-42)
	{
		v-=1
		b+=0.6
	}
	
	line(0,-50,v,b)
  

  if(m<42)
	{
		m+=1;
    n+=2.976
	}
	
	line(0,-100,m,n)
  line(0,-100,-m,n)
  
  push()
  
rotate(1.0472)    
ellipse(0,0,50,50);
  ellipse(0,-50,50,50);
  ellipse(0,-100,50,50);
	line(w,e,x,y)
	line(0,-100,f,g)
	line(0,-50,v,b)
  	line(0,-100,m,n)
  line(0,-100,-m,n)
  pop()
  push()
	
	push()
  
rotate(1.0472*2)    
ellipse(0,0,50,50);
  ellipse(0,-50,50,50);
  ellipse(0,-100,50,50);
	line(w,e,x,y)
	line(0,-100,f,g)
	line(0,-50,v,b)
  	line(0,-100,m,n)
  line(0,-100,-m,n)
  pop()
	
  push()
	rotate(1.0472*3)    
ellipse(0,0,50,50);
  ellipse(0,-50,50,50);
  ellipse(0,-100,50,50);
	line(w,e,x,y)
	line(0,-100,f,g)
	line(0,-50,v,b)
  	line(0,-100,m,n)
  line(0,-100,-m,n)
  pop()
  push()
	
	  push()
	rotate(1.0472*4)    
ellipse(0,0,50,50);
  ellipse(0,-50,50,50);
  ellipse(0,-100,50,50);
	line(w,e,x,y)
	line(0,-100,f,g)
	line(0,-50,v,b)
  	line(0,-100,m,n)
  line(0,-100,-m,n)
  pop()
  push()
  
  rotate(1.0472*5)    
  ellipse(0,0,50,50);
  ellipse(0,-50,50,50);
  ellipse(0,-100,50,50);
	line(w,e,x,y)
	line(0,-100,f,g)
	line(0,-50,v,b)
  	line(0,-100,m,n)
  line(0,-100,-m,n)
  pop()
	fill(255,255,255)
  strokeWeight(0)
	textSize(20)
	//text("Destiny", -33,150)


}