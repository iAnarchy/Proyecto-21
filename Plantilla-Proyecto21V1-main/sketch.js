var bg,sleep, brush, gym, eat, bath, move;
var astronauta;

function preload(){
  //Cargar imágenes y animaciones 
  bg= loadImage("images/iss.png");
  bath = loadAnimation("images/bath1.png","images/bath1.png","images/bath2.png","images/bath2.png");
  brush = loadAnimation("images/brush.png");
  drink=loadAnimation("images/drink1.png","images/drink2.png");
  eat=loadAnimation("images/eat1.png","images/eat2.png");
  gym=loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
  move = loadAnimation("images/move.png","images/move.png","images/move1.png","images/move1.png");
  sleep = loadAnimation("images/sleep.png");
}

function setup() {
  createCanvas(400, 400);
  
  //Sprite astronauta
  astronauta = createSprite(300,230);
  astronauta.addAnimation ("sleeping",sleep); 
  astronauta.scale = 0.1;
  
}

function draw() {
  //fondo de pantalla para la rutina del astronauta
  background(bg);

  textSize(30);
  fill(255);
  text("Instrucciones:",10,100);
  
  //texto para mostrar instrucciones sobre cómo ejecutar el juego
  textSize(17);
  fill(255);
  text("Flecha hacía arriba: cepillarse",10,130);
  text("Flecha hacía abajo: ejercitarse",10,150);
  text("Flecha hacer la izquierda: comer",10,170);
  text("Flecha hacía la derecha: banarse",10,190);
  text("tecla m: moverse",10,210);
  // rebota del astronauta en los bordes
  edges= createEdgeSprites();
  astronauta.bounceOff(edges);
  
  //código para hacer que el astronauta se cepille
  if (keyDown(UP_ARROW)){
    astronauta.addAnimation("brushing",brush);
    astronauta.changeAnimation("brushing",brush);
    astronauta.y = 350;
    astronauta.velocityX = 0;
    astronauta.velocityY = 0;
  }
  if (keyDown(DOWN_ARROW)){
    astronauta.addAnimation("gyming",gym);
    astronauta.changeAnimation("gyming",gym);
    astronauta.y = 450;
    astronauta.velocityX = 0;
    astronauta.velocityY = 0;
  }
  if (keyDown(RIGHT_ARROW)){ 
    astronauta.addAnimation("bathy",bath); 
   astronauta.changeAnimation("bathy",bath); 
   astronauta.y = 450; 
   astronauta.velocityX = 0; 
   astronauta.velocityY = 0; 
  }
  if (keyDown(LEFT_ARROW)){
    astronauta.addAnimation("tea",eat);
    astronauta.changeAnimation("tea",eat);
    astronauta.y = 450;
    astronauta.velocityX = 0;
    astronauta.velocityY = 0;
  }
  if (keyDown("m")){
    astronauta.addAnimation("movi",move);
    astronauta.changeAnimation("movi",move);
    astronauta.velocityX = 1;
    astronauta.velocityY = 1;
  }
  
  drawSprites();
}