
var r = 10;

//cantidad de cruces
var numCruces = 500;
var lasCruces=[];
//cantidad de guardianes
var numGuardianes =  1;
var losGuardianes=[];
var salto = 50;
//cantidad de killers
var numK = 20;
var losK=[];
//cantidad de parasitos
var numParasitos =5 ;
var losParasitos = [];
//cantidad de replicantes
var numReplicantes = 2;
var losReplicantes=[];

function setup() {
  createCanvas(500, 500);



  //creo las cruces
  for (var i=0; i<numCruces; i=i+1) {
    lasCruces[i] = new crucecita();
  }
  //creo las los killers
  for (var i=0; i<numK; i=i+1) {
    losK[i] = new killer();
  }
  // creo los parasitos
  for (var i=0; i<numParasitos; i=i+1) {
    losParasitos[i] = new parasito();
  }
  
  // creo los guardianes
  for (var i=0; i<numGuardianes; i=i+1) {
    losGuardianes[i] = new guardian();
  }
  
   // creo los guardianes
   for (var i=0; i<numReplicantes; i=i+1) {
    losReplicantes[i] = new replicante();
  }
  
   
}

function draw() {

  background(0, 0, 0);

  // a cada una le digo dibujese, muevase
  
    for (var i=0; i < numReplicantes; i = i +1) {
    losReplicantes[i].dibujarse();
    losReplicantes[i].moverse();
    
    for (var u=0; u < numCruces; u = u +1) 
    {
      
      var distCentro = dist(losReplicantes[i].x,losReplicantes[i].y,lasCruces[u].x,lasCruces[u].y);
      if (distCentro<20 ) {
        //consume cruces para crear killers
        lasCruces[u].morir();
         numK = numK+1;
        losK[losK.length] = new killer();

      }
    }
    
    
  }
  
  
  for (var i=0; i < numK; i = i +1) {
    
    // los k no hacen nada mas que moverse
    losK[i].dibujarse();
    losK[i].moverse();
    
  }
 
    for (var i=0; i < numGuardianes; i = i +1) {
      
    losGuardianes[i].dibujarse();
    // se teletransporta cada 50 iteraciones del if
    if(salto==50){
    losGuardianes[i].moverse();
    salto =0;}
    else{salto++;}
    
     for (var k=0; k < numCruces; k = k +1) 
    {
      // si toca una cruz crea una nueva cruz
      var distCentro = dist(losGuardianes[i].x,losGuardianes[i].y,lasCruces[k].x,lasCruces[k].y);
      if (distCentro<10 ) {
       
        
        numCruces = numCruces+1;
        lasCruces[lasCruces.length] = new crucecita();
       
        print('planta')

      }
    }
    
     for (var u=0; u < numK; u = u +1) 
    {
      // si toca una Killer crea una nuevo Killer
      var distCentro = dist(losGuardianes[i].x,losGuardianes[i].y,losK[u].x,losK[u].y);
      if (distCentro<20 ) {
       
        
        numK = numK+1;
        losK[losK.length] = new killer();
        print('crea')

      }
    }
    
    for (var t=0; t < numParasitos; t = t +1) 
    {
      // si toca un parasito mata un parasito
      var distCentro2 = dist(losGuardianes[i].x,losGuardianes[i].y,losParasitos[t].x,losParasitos[t].y);
      if (distCentro2<100 ) {
       
        losParasitos[t].morir();
        print('mata')

      }
    }
    
  }
   for (var i=0; i < numParasitos; i = i +1) {
    losParasitos[i].dibujarse();
    losParasitos[i].moverse();
    
    for (var u=0; u < numK; u = u +1) 
    {
      
      var distCentro = dist(losParasitos[i].x,losParasitos[i].y,losK[u].x,losK[u].y);
      if (distCentro<20 ) {
        //parasito consume killers
        losK[u].morir();
        numParasitos = numParasitos+1;
        losParasitos[losParasitos.length] = new parasito();

      }
    }
    
    
  }
  for (var i=0; i < numCruces; i = i +1) {
    lasCruces[i].dibujarse();
    lasCruces[i].moverse();
    //lasCruces[i].crecer();
    for (var u=0; u < numK; u = u +1) 
    {
        //killers consumen crucesitas
      var distCentro = dist(losK[u].x, losK[u].y, lasCruces[i].x, lasCruces[i].y);
      if (distCentro<10 ) {
      
        lasCruces[i].morir();
        losK[u].crecer();
      }
    }
  }
}

function crucecita() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.tamano = 10;
  this.viva = true;

  this.dibujarse = function() {

    if (this.viva ==true) {
      stroke(0,255,0)
      fill(0,255,0)
      line(this.x, this.y-this.tamano, this.x, this.y+this.tamano);
      line(this.x-this.tamano, this.y, this.x+this.tamano, this.y);
    }
  }

  this.moverse=function() {
    this.x = this.x + random (-1, 1);
    this.y = this.y + random (-1, 1);
  }

  this.crecer = function() {
    this.tamano = this.tamano + random(0.3, 0, 6);
  }

  this.morir = function() {
    this.viva=false;
      this.x = -2000
    this.y = -2000
  }
}
function killer() {
  this.viva = true;

  this.x = random(0, width);
  this.y = random(0, height);
  this.tamano = 5;
  
  

  this.dibujarse = function() {

    if (this.viva ==true) {
     fill(144,67,106)
     stroke(0,0,0)
      triangle(this.x, this.y+this.tamano, this.x-this.tamano, this.y-this.tamano, this.x+this.tamano, this.y-this.tamano);
    }
  }

  this.moverse=function() {
    this.x = this.x + random (-5, 5);
    this.y = this.y + random (-5, 5);
  }

  this.crecer = function() {
    this.tamano = this.tamano + random(0.3, 0, 6);
  }

  this.morir = function() {
    this.viva=false;
    this.x = -1500
    this.y = -1500
  }
}

function parasito() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.tamano = 10;
  this.viva = true;

  this.dibujarse = function() {

    if (this.viva ==true) {
      stroke(255,0,0)
      fill(255,0,0)
      line(this.x, this.y-this.tamano, this.x, this.y+this.tamano);
      line(this.x-this.tamano, this.y, this.x+this.tamano, this.y);
      line(this.x-this.tamano,this.y-this.tamano,this.x+this.tamano,this.y+this.tamano);
      line(this.x+this.tamano,this.y-this.tamano,this.x-this.tamano,this.y+this.tamano);
    }
  }

  this.moverse=function() {
    this.x = this.x + random (-5, 5);
    this.y = this.y + random (-5, 5);
  }

  this.crecer = function() {
    this.tamano = this.tamano + random(0.3, 0, 6);
  }

  this.morir = function() {
    this.viva=false;
      this.x = -1000
    this.y = -1000
  }
}

function guardian() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.tamano = 15;
  this.viva = true;

  this.dibujarse = function() {

    if (this.viva ==true) {
      stroke(237,184,56)
      fill(237,184,56)
      triangle(this.x, this.y+this.tamano, this.x-this.tamano, this.y-this.tamano, this.x+this.tamano, this.y-this.tamano);
      triangle(this.x, this.y-this.tamano,this.x-this.tamano, this.y+this.tamano,this.x+this.tamano, this.y+this.tamano);
    }
  }

  this.moverse=function() {
    this.x = random (0, width);
    this.y = random (0, height);
  }

  this.crecer = function() {
    this.tamano = this.tamano + random(0.3, 0, 6);
  }

  this.morir = function() {
    this.viva=false;
      this.x = -500
    this.y = -500
  }}
  
  function replicante() {
  

  this.y = 255;
  this.x = 255;

  this.tamano = 20;
  this.viva = true;
  
  





  this.dibujarse = function() {

    if (this.viva ==true) {
      stroke(27,45,187)
      fill(27,45,187)
      arc(this.x, this.y, this.tamano-10, this.tamano-10, HALF_PI);
      noFill();
      arc(this.x, this.y, this.tamano, this.tamano, HALF_PI, PI);
      arc(this.x, this.y, this.tamano+10, this.tamano+10, PI, PI+QUARTER_PI);
      arc(this.x, this.y, this.tamano+20, this.tamano+20, PI+QUARTER_PI, TWO_PI);
     
    }
  }

  this.moverse=function() {
    
 
    this.x = this.x + random (-5, 5);
    this.y = this.y + random (-5, 5);
 
  }

  this.crecer = function() {
    this.tamano = this.tamano + random(0.3, 0, 6);
  }

  this.morir = function() {
    this.viva=false;
      this.x = -500
    this.y = -500
  }
  
}