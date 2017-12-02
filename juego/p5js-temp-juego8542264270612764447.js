var portada;
var instrucciones;
var nivel1;
var nivel2;
var nivel3;
var nivel4;
var nivel5;
var gano;
var perdio;

var opciones = [1,2,3];

var busqueda = 5000;
var victima = 0;
var busquedaArriba = false;
var busquedaAbajo = false;
var busquedaDerecha = false;
var busquedaIzquierda = false;
var losActivados = 1;


var escape = 0;
var agresor = 0;
var escapeArriba = false;
var escapeAbajo = false;
var escapeDerecha = false;
var escapeIzquierda = false;
var relajado = false;

var s = 0;
var d = 0;


var intro = 0;
var juego = 1;
var victoria = 2;
var derrota = 3;
var estatus;
var ganancias = 0;
var perdidas = 0;
var nivel = 4;
var nivelActual = 0;


//cantidad de killers
var numK = 40;
var losK=[];
//cantidad de parasitos
var numParasitos =20 ;
var losParasitos = [];

function preload() {
   
   portada = loadImage("assets/portada.png");
   instrucciones = loadImage("assets/instrucciones.png");
   nivel1 = loadImage("assets/nivel1.png");
   nivel2 = loadImage("assets/nivel2.png");
   nivel3 = loadImage("assets/nivel3.png");
   nivel4 = loadImage("assets/nivel4.png");
   nivel5 = loadImage("assets/nivel5.png");
   gano = loadImage("assets/victoria.png");
   perdio = loadImage("assets/derrota.png");


}

function setup() {
  estatus = 0;
  createCanvas(windowWidth, windowHeight); 
  //creo las los killers
  for (var i=0; i<numK; i=i+1) {
    losK[i] = new killer();
  }
  // creo los parasitos
  for (var i=0; i<numParasitos; i=i+1) {
    losParasitos[i] = new parasito();
  }
}

function draw() {

  background(0, 0, 0);

  if (estatus == intro)
  {
   
    image(portada,(width-height)/2,0,height,height);
   
  }
  
  else if (estatus == nivel)
{

 if(nivelActual == 0)
 {
  image(instrucciones,(width-height)/2,0,height,height);
 
 }
 else if(nivelActual == 1)
 {
  image(nivel1,(width-height)/2,0,height,height);
 }
 else if(nivelActual == 2)
 {
  image(nivel2,(width-height)/2,0,height,height);
 }
 else if(nivelActual == 3)
 {
  image(nivel3,(width-height)/2,0,height,height);
 }
 else if(nivelActual == 4)
 {
  image(nivel4,(width-height)/2,0,height,height);
 }
 else if(nivelActual == 5)
 {
  image(nivel5,(width-height)/2,0,height,height);
 }
 else if(nivelActual == 6)
 {
  estatus = victoria;
 }
   
   
}
  
  else if (estatus == juego) {
    
    
  

    
    // a cada una le digo dibujese, muevase

    for (var i=0; i < losK.length; i = i +1) {
      
      

      // los k no hacen nada mas que moverse
      losK[i].dibujarse();
      for (var u=0; u < numParasitos; u = u +1) 
      {

        var distCentro = dist(losK[i].x, losK[i].y, losParasitos[u].x, losParasitos[u].y);
        if (distCentro < escape )
        {
          escape = distCentro;
          agresor = u;
          relajado = true;
        }
      }
      var distEscape = dist(losK[i].x, losK[i].y, losParasitos[agresor].x, losParasitos[agresor].y);
      if (distEscape < 150) {
        if (dist(losK[i].x+5, losK[i].y, losParasitos[agresor].x, losParasitos[agresor].y)>= distEscape)
        {
          escapeDerecha = true;
        } else 
        {
          escapeIzquierda = true;
        }
        if (dist(losK[i].x, losK[i].y-5, losParasitos[agresor].x, losParasitos[agresor].y)>= distEscape)
        {
          escapeArriba = true;
        } else {
          escapeAbajo = true;
        }
      } else
      {
        relajado = false;
      }
      losK[i].moverse();
      escapeArriba = false;
      escapeAbajo = false;
      escapeDerecha = false;
      escapeIzquierda = false;
      escape = 5000;
    }
    for (var i=0; i < numParasitos; i = i +1) {
      losParasitos[i].dibujarse();
      
      for (var j = 0; j < touches.length; j++) {
        
      var distMouse = dist(losParasitos[i].x, losParasitos[i].y, touches[j], touches[j])

        if (distMouse<1000000)
      {

        losParasitos[i].morir();
      }
      }

      for (var u=0; u < losK.length; u = u +1) 
      {

        var distCentro = dist(losParasitos[i].x, losParasitos[i].y, losK[u].x, losK[u].y);
        if (distCentro < busqueda)
        {
          busqueda = distCentro;
          victima = u;
        }
        if (distCentro<20 ) {
           //parasito consume killers
          losK[u].morir();
        }
      }
      var distBusqueda = dist(losParasitos[i].x, losParasitos[i].y, losK[victima].x, losK[victima].y);
      if (dist(losParasitos[i].x+5, losParasitos[i].y, losK[victima].x, losK[victima].y)< distBusqueda)
      {
        busquedaDerecha = true;
      }
      if (dist(losParasitos[i].x-5, losParasitos[i].y, losK[victima].x, losK[victima].y)< distBusqueda)
      {
        busquedaIzquierda = true;
      }
      if (dist(losParasitos[i].x, losParasitos[i].y-5, losK[victima].x, losK[victima].y)< distBusqueda)
      {
        busquedaArriba = true;
      }
      if (dist(losParasitos[i].x, losParasitos[i].y+5, losK[victima].x, losK[victima].y)< distBusqueda)
      {
        busquedaAbajo = true;
      }
      losParasitos[i].moverse();
      busquedaArriba = false;
      busquedaAbajo = false;
      busquedaDerecha = false;
      busquedaIzquierda = false;
      busqueda = 5000;
    }
    if (ganancias == losActivados)
    {
      nivelActual ++;
      ganancias = 0;
      estatus = nivel;
      
      
      
      
    } else if (perdidas == numK)
    {
      estatus = derrota;
    }
    else if (nivel == 5)
  {
  estatus = victoria;
  }
  } 
  else if (estatus == victoria)
  {
    
    image(gano,(width-height)/2,0,height,height);

  } else if (estatus == derrota)
  {
     
    image(perdio,(width-height)/2,0,height,height);
    }
  }

function killer() {
  this.viva = true;
  this.z = random(opciones);
  this.x = random(0, width);
  this.y = random(0, height);
  this.tamano = 50;
 this.imagen = loadImage("assets/h"+this.z+".png");


  this.dibujarse = function() {

    if (this.viva ==true) {
              image(this.imagen,this.x,this.y,this.tamano,this.tamano);
    }
  }

  this.moverse=function() {


    if (relajado) { 

      if (escapeArriba && (this.y-5)>=0) {

        this.y = this.y-3
      }
      if (escapeAbajo && (this.y+5)<=height)
      {
        this.y = this.y+3
      }
      if (escapeDerecha&& (this.x+5)<=width)
      {
        this.x = this.x+3
      }
      if (escapeIzquierda&& (this.x-5)>=0)
      {
        this.x = this.x-3
      }
    } else 
    {
      s =  random (-3, 3);
      d =  random (-3, 3);

      if (this.x + s < width && this.x + s >0)
      {
        this.x = this.x + s;
      }
      if (this.y + d < height && this.y + d >0)
      {
        this.y = this.y + d;
      }
    }
  }

  this.crecer = function() {
    this.tamano = this.tamano + random(0.3, 0, 6);
  }

  this.morir = function() {
    this.viva=false;
    this.x = 2000
      this.y = 2000

      perdidas ++
      print (numK,perdidas);
  }

  this.vivir = function() {
    this.viva=true;
    this.x = random(0, width);
    this.y = random(0, height);
  }
}

function parasito() {
  this.z = random(opciones);
  this.x = -2000;
  this.y = -2000;
  this.tamano = 50;
  this.viva = false;
  this.imagen = loadImage("assets/z"+this.z+".png");
  

  this.dibujarse = function() {

    if (this.viva ==true) {
  
        image(this.imagen,this.x,this.y,this.tamano,this.tamano);
    }
  }

  this.moverse = function() {
    
     if (this.viva ==true){
    
    if (busquedaArriba && (this.y-5)>=0) {

      this.y = this.y-5
    }
    if (busquedaAbajo && (this.y+5)<=height)
    {
      this.y = this.y+5
    }
    if (busquedaDerecha&& (this.x+5)<=width)
    {
      this.x = this.x+5
    }
    if (busquedaIzquierda&& (this.x-5)>=0)
    {
      this.x = this.x-5
    }
  }
  }

  this.crecer = function() {
    this.tamano = this.tamano + random(0.3, 0, 6);
  }

  this.morir = function() {
    this.viva=false;
    this.x = -1000
      this.y = -1000
      ganancias ++;
  }

  this.vivir = function() {
    this.viva=true;
    this.x = random(0, width);
    this.y = random(0, height);
  }
}

function touchEnded() {
  if (estatus == intro) 
  {
    estatus = nivel;
  } 
 else if (estatus == nivel){
 if(nivelActual == 0)
 {

      estatus =  juego;
      for (var i=0; i < losActivados; i = i +1)
  {
    losParasitos[i].vivir();
  }

 }
 else if(nivelActual == 1)
 {
  
      losActivados +=4;
      for (var i=0; i < losActivados; i = i +1)
  {
    losParasitos[i].vivir();
  }
      estatus =  juego;
      
    
  
 }
 else if(nivelActual == 2)
 {
  
      losActivados +=5;
      for (var i=0; i < losActivados; i = i +1)
  {
    losParasitos[i].vivir();
  }
      estatus =  juego;
      
    
 }
 else if(nivelActual == 3)
 {
  
      for (var i=0; i < losActivados; i = i +1)
  {
    losParasitos[i].vivir();
  }
      estatus =  juego;
      
    
 }
 else if(nivelActual == 4)
 {
  
      losActivados +=5;
      for (var i=0; i < losActivados; i = i +1)
  {
    losParasitos[i].vivir();
  }
      estatus =  juego;
      
    
 }
 else if(nivelActual == 5)
 {
  
      losActivados +=5;
      for (var i=0; i < losActivados; i = i +1)
  {
    losParasitos[i].vivir();
  }
      estatus =  juego;
      
    
 }
  }
  else if(estatus == victoria)
{

    for (var i=0; i < numParasitos; i = i +1) {
      losParasitos[i].morir();
    }
    for (var i=0; i < numK; i = i +1) {
      losK[i].vivir();
    }
       perdidas = 0;
    ganancias = 0;
    nivelActual = 0;
    losActivados = 1;
  
    
    estatus =  intro;
}
else if (estatus == derrota)
{

    for (var i=0; i < numParasitos; i = i +1) {
      losParasitos[i].morir();
    }
    for (var i=0; i < numK; i = i +1) {
      losK[i].vivir();
    }
    perdidas = 0;
    ganancias = 0;
    nivelActual = 0;
    losActivados = 1;
    
    estatus =  intro;
  
}



}
