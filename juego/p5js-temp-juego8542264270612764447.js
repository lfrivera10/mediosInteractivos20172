// variables para las imagenes que utilizo en las transiciones y los titulo

var portada;
var instrucciones;
var nivel1;
var nivel2;
var nivel3;
var nivel4;
var nivel5;
var gano;
var perdio;

// array para guardar los numeros que permiten elegir de manera aleatoria las imagenes para los humanos y los zombies 
var opciones = [1,2,3];

// variables utilizadas para controlar la persecucion de los humanos
var busqueda = 5000;
var victima = 0;
var busquedaArriba = false;
var busquedaAbajo = false;
var busquedaDerecha = false;
var busquedaIzquierda = false;
var losActivados = 1;

// variables utilizadas para controlar el escape de los zombies
var escape = 0;
var agresor = 0;
var escapeArriba = false;
var escapeAbajo = false;
var escapeDerecha = false;
var escapeIzquierda = false;
var relajado = false;

var s = 0;
var d = 0;

// variables para controlar el flujo del juego de intro hasta el final 

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
   
   // se cargan las imagenes para las diferentes etapas del juego
   
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
   // se define el estatus como 0 que significa que esta en el intro
  estatus = 0;
   // canvas del tamaño de la pantalla
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
// fondo negro
  background(0, 0, 0);
// lo que sucede en el intro
  if (estatus == intro)
  {
   // solo se muestra la imagen de la portada
    image(portada,(width-height)/2,0,height,height);
   
  }
  // lo que sucede  cuando se esta jugando 
  else if (estatus == nivel)
{
// modela las trnasiciones entre niveles, son los avisos que permiten saber al usuario que ha avanzado de nivel
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
    // cuando se han superado 6 niveles inmediatamente se considera como victorioso
  estatus = victoria;
 }
   
   
}
  // lo que sucede en el juego como tal
  else if (estatus == juego) {
    
    // a cada una le digo dibujese, muevase

     // modela el movimiento y acciones de los humanos 
    for (var i=0; i < losK.length; i = i +1) {

       // se ven en la pantalla 
      losK[i].dibujarse();
       // recorre los zombies 
      for (var u=0; u < numParasitos; u = u +1) 
      {
// busca la distancia entre el humano seleccionado y cada uno de los zombies 
        var distCentro = dist(losK[i].x, losK[i].y, losParasitos[u].x, losParasitos[u].y);
         // elige al zombie mas cercano y los define como agresor 
        if (distCentro < escape )
        {
          escape = distCentro;
          agresor = u;
           // solo escapa si esta variable es true 
          relajado = true;
        }
      }
       //re calcula la distancia con el agresor
      var distEscape = dist(losK[i].x, losK[i].y, losParasitos[agresor].x, losParasitos[agresor].y);
       // calcula la direccion correcta para huir, proyectando movimiento en cada una de las direcciones y calculando si las distacia se hace mas pequeña o mas larga
      if (distEscape < 150) {
        if (dist(losK[i].x+5, losK[i].y, losParasitos[agresor].x, losParasitos[agresor].y)>= distEscape)
        {
           // booleano para definir si se debe o no mover en esa direccion 
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
      } 
       // si no tiene un zombie a menos de 150 pixeles relajado es false y por ende no se mueve 
       else
      {
         
        relajado = false;
      }
       // ordena movimiento 
      losK[i].moverse();
       // resetea las variables para la siguiente iteracion 
      escapeArriba = false;
      escapeAbajo = false;
      escapeDerecha = false;
      escapeIzquierda = false;
      escape = 5000;
      
    }
   //modela el movimiento de los zombies 
    for (var i=0; i < numParasitos; i = i +1) {
      losParasitos[i].dibujarse();
      
      //recorre los toques sobre la pantalla 
       for (var j = 1; j <= touches.length; j++) {
// si la distancia entre un toque y un zombie es menor a 20 pixeles lo mata 
    if (dist(touches[j].x, touches[j].y, losParasitos[i].x , losParasitos[i].y) < 20) 
    {
// ordena la muerte 
      losParasitos[i].morir();
      
    }
  }

      for (var u=0; u < losK.length; u = u +1) 
      {
        var distCentro = dist(losParasitos[i].x, losParasitos[i].y, losK[u].x, losK[u].y);
        if (distCentro < busqueda)
        {
           // define una victima a perseguir 
          busqueda = distCentro;
          victima = u;
        }
        if (distCentro<20 ) {
           //zombie mata humanos 
          losK[u].morir();
        }
      }
        // lleva a cabo el mismo proceso que con los humanos para modelar la persecucion 
       // escoge una victima 
       // proyecta movimientos en todas las direcciones
       // con booleanos define las direcciones correctas para reducir la distancia v
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
       // resetea las variables 
      losParasitos[i].moverse();
      busquedaArriba = false;
      busquedaAbajo = false;
      busquedaDerecha = false;
      busquedaIzquierda = false;
      busqueda = 5000;
    }
     // si la cantidad de zombies muertos es igual a la cantidad de zombies iniciales se pasa el nivel 
    if (ganancias == losActivados)
    {
       // aumenta el nivel de dificultad
      nivelActual ++;
       // resetea la variable 
      ganancias = 0;
       // te lleva al estatus de nivel 
      estatus = nivel;
       
       // si la cantidad de humanos muertos es igual a la cantidad de humanos inicial se pierde el juego 
      
    } else if (perdidas == numK)
    {// estatus de derrota 
      estatus = derrota;
    }
     // si se llega al nivel 5 se gana
    else if (nivel == 5)
  {
  estatus = victoria;
  }
  } 
  else if (estatus == victoria)
  {
    // si el estatus es victoria solo se muestra una imagen 
    image(gano,(width-height)/2,0,height,height);

  } else if (estatus == derrota)
  {
     // si el estatus es derrota solo se muestra esta imagen 
    image(perdio,(width-height)/2,0,height,height);
    }
  }
/// modela los humanos 
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

// si las variables definidas en la etapa de juego son true se mueve en esa direccion 
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
       // si relajado es false solo tiemblan en su lugar 
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
// cuando mueren el contador de perdidas aumenta y de esa manera se mide la derrota 
      perdidas ++
      print (numK,perdidas);
  }

  this.vivir = function() {
    this.viva=true;
    this.x = random(0, width);
    this.y = random(0, height);
  }
}
// modela los zombies 
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
     // cuenta las muertes de zombies y de esta manera se mide la vitoria 
      ganancias ++;
  }

  this.vivir = function() {
    this.viva=true;
    this.x = random(0, width);
    this.y = random(0, height);
  }
}
//modela la transicion entre todas las etapas menos la del juego 
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
