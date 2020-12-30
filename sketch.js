var mario;
var dragon;
var gamestate="instructions";
var playbut;
var hammer;
var ran1;
var ran2;
var ran3 = 0;
var coiny = 0;
var scoreboard = 0;
var life = 30;
var hammerstate = "none";

function preload(){


    xladderimg = loadImage("IMAGES/ground.png");
    yladderimg = loadImage("IMAGES/ladders.png");

    dragonfire = loadAnimation("IMAGES/dragon1.png","IMAGES/dragon1.png","IMAGES/dragon2.jpg","IMAGES/dragon2.jpg","IMAGES/dragon3.png","IMAGES/dragon3.png");
    
    fireballimg = loadImage("IMAGES/fireball.png");

    marioladder = loadImage("IMAGES/mario_back-1.png");
    marioimg = loadImage("IMAGES/mario_front.png");
    mariohammer = loadImage("IMAGES/mario_hammer.png");
    mariohammerhitted = loadImage("IMAGES/mario_hammer_hit.png");
    mariofire = loadImage("IMAGES/mario_burning.jpg");

    obsimg = loadImage("IMAGES/rock.png");

    coinimg = loadImage("IMAGES/coin.png");

    hammerimg = loadImage("IMAGES/Hammer.png");

}

function setup(){

  createCanvas(windowWidth,windowHeight);

  fireballgroup = new Group();
  obsgroup = new Group();
  coingroup = new Group();
  yladdergroup = new Group();
  laddergroup = new Group();

  dragon = createSprite(140,120,50,50);
  dragon.addAnimation("dragon1",dragonfire);
  dragon.scale = 0.2

  //creating x ladders

  xladder0 = createSprite(250,180,10,10);
  xladder0.addImage(xladderimg);
  xladder0.scale = 0.1;

  xladder01 = createSprite(700,180,10,10);
  xladder01.addImage(xladderimg);
  xladder01.scale = 0.1;

  xladder02 = createSprite(1240,180,10,10);
  xladder02.addImage(xladderimg);
  xladder02.scale = 0.1;

  xladder03 = createSprite(1400,180,10,10);
  xladder03.addImage(xladderimg);
  xladder03.scale = 0.1;

  xladder1 = createSprite(250,330,10,10);
  xladder1.addImage(xladderimg);
  xladder1.scale = 0.1;

  xladder2 = createSprite(700,330,10,10);
  xladder2.addImage(xladderimg);
  xladder2.scale = 0.1;

  xladder3 = createSprite(1240,330,10,10);
  xladder3.addImage(xladderimg);
  xladder3.scale = 0.1;

  xladder4 = createSprite(1400,330,10,10);
  xladder4.addImage(xladderimg);
  xladder4.scale = 0.1;

  xladder5 = createSprite(285,480,10,10);
  xladder5.addImage(xladderimg);
  xladder5.scale = 0.1;

  xladder6 = createSprite(585,480,10,10);
  xladder6.addImage(xladderimg);
  xladder6.scale = 0.1;

  xladder7 = createSprite(1110,480,10,10);
  xladder7.addImage(xladderimg);
  xladder7.scale = 0.1;

  xladder8 = createSprite(1400,480,10,10);
  xladder8.addImage(xladderimg);
  xladder8.scale = 0.1;

  xladder9 = createSprite(200,630,10,10);
  xladder9.addImage(xladderimg);
  xladder9.scale = 0.1;

  xladder10 = createSprite(740,630,10,10);
  xladder10.addImage(xladderimg);
  xladder10.scale = 0.1;

  xladder11 = createSprite(1100,630,10,10);
  xladder11.addImage(xladderimg);
  xladder11.scale = 0.1;

  xladder12 = createSprite(1400,630,10,10);
  xladder12.addImage(xladderimg);
  xladder12.scale = 0.1;

  xladder13 = createSprite(200,780,10,10);
  xladder13.addImage(xladderimg);
  xladder13.scale = 0.1;

  xladder14 = createSprite(650,780,10,10);
  xladder14.addImage(xladderimg);
  xladder14.scale = 0.1;

  xladder15 = createSprite(1100,780,10,10);
  xladder15.addImage(xladderimg);
  xladder15.scale = 0.1;

  xladder16 = createSprite(1400,780,10,10);
  xladder16.addImage(xladderimg);
  xladder16.scale = 0.1;

// creating y ladders

  yladder1 = createSprite(840,414,10,10);
  yladder1.addImage(yladderimg);
  yladder1.scale = 0.3;
  yladdergroup.add(yladder1);

  yladder2 = createSprite(20,410,10,10);
  yladder2.addImage(yladderimg);
  yladder2.scale = 0.3;
  yladdergroup.add(yladder2);

  yladder3 = createSprite(460,565,10,10);
  yladder3.addImage(yladderimg);
  yladder3.scale = 0.3;
  yladdergroup.add(yladder3);

  yladder4 = createSprite(968,260,10,10);
  yladder4.addImage(yladderimg);
  yladder4.scale = 0.3;
  yladdergroup.add(yladder4);

  mario = createSprite(50,700);
  mario.addImage(marioimg);
  mario.scale = 0.3;

  hammer = createSprite(2000,260,50,50);
  hammer.addImage(hammerimg);
  hammer.scale = 0.4;

}

function draw(){

    ran1 = random(10,200);
    ran1 = Math.round(ran1/2*10);
    
    if(gamestate == "instructions"){
        background("lightgreen");

        textSize(30);
        fill("yellow");
        stroke("green");
        text("CLIMB UP",displayWidth/2-100,30);
        
        textSize(20);
        fill("black");
        text("INSTRUCTIONS -",200,150)
        text("1. Press the arrow keys to climb the ladder ",200,200);
        text("2. Stay away from rocks and fireballs",200,250);
        text("3. Kill the dragon to win the game ",200,300);
        text("4. Press enter to play the game",200,350);

        if(keyDown("enter")){
            gamestate = "play";
        }

    }

    if(gamestate == "play"){
        background("black");
        spawnfireball(); 
        spawncoins();
        spawnobs(); 

        fill("yellow");
        textSize(25);
        text("SCORE : " + scoreboard, displayWidth-300, 120);
        text("HEALTH : " + life, displayWidth-290, 90);
        //console.log(hammerstate);

        
        if(mario.isTouching(obsgroup) && hammerstate != "hit"){
            life = life-1;
            obsgroup.destroyEach();
            console.log(hammerstate);
        }

        if(mario.isTouching(obsgroup) && hammerstate == "hit"){
            obsgroup.destroyEach();
        }

        if(mario.isTouching(dragon) && hammerstate == "hit"){
            dragon.x = -200;
            gamestate = "endwin";
        }

        if(mario.isTouching(fireballgroup)){
            life = life-5;
            fireballgroup.destroyEach();
        }

        if(life < 0){
            gamestate = "end";
        }

        if(keyWentDown("space") && hammerstate == "hold"){
            mario.addImage(mariohammerhitted);
            hammerstate = "hit";
            mario.scale = 0.07;
           
        }

        if(keyWentUp("space") && hammerstate == "hit"){
            mario.addImage(mariohammer);
            hammerstate = "hold";
            mario.scale = 0.5;
        }

        if(mario.isTouching(hammer) && hammerstate == "none"){
            mario.addImage(mariohammer);
            mario.scale = 0.5;
            hammer.x = 2000;
            hammerstate = "hold";

        }

        ran2 = Math.round(random(1,3));

        if(ran2 == 1){
            coiny = 290
        }
    
        if(ran2 == 2){
            coiny = 440
        }

        if(ran2 == 3){
            coiny = 590
        }
        
        if(mario.isTouching(coingroup)){
            coingroup.destroyEach();
            scoreboard = scoreboard + Math.round(random(100,200))
        }

        if(frameCount== 300){
            hammer.x = 300;
            hammer.y = 290;

        }
        //console.log(scoreboard);


        if(keyWentDown("left")){
            mario.velocityX = -10;
        }
        if(keyWentUp("left")){ 
            mario.velocityX = 0;
        }

        if(keyWentDown("right")){
            mario.velocityX = 10;
        }

        if(keyWentUp("right")){
            mario.velocityX = 0;
        }

            if(keyWentDown("up") && mario.isTouching(yladdergroup)){
                mario.y = mario.y-50;
            }

            
            if(keyWentDown("down")  && mario.isTouching(yladdergroup)){
                mario.y = mario.y+50;
               // mario.scale = 0.2;
            }

        
            


        drawSprites();
    }

    if(gamestate == "end"){
        textSize(30);
        fill("red")
        text("YOU LOSE",600,400);
        life = 0;
    }

    if(gamestate == "endwin"){
        textSize(30);
        fill("yellow")
        text("YOU WON",600,400);
        fireballgroup.destroyEach();
        obsgroup.destroyEach();
    }

}

function spawnfireball(){
    if(frameCount % 120 == 0){
        var fireball = createSprite(140,100);
        fireball.scale = 0.1;
        fireball.addImage(fireballimg);
        fireball.velocityX = random(3,20);
        fireball.velocityY = random(3,20);
        fireballgroup.add(fireball);
    }
}

function spawncoins(){
    if(frameCount % 300 == 0){
        
        var coin = createSprite(random(100,1200),coiny,20,20);
        coin.addImage(coinimg);
        coin.scale = 0.1;
        coin.lifetime = 400;
        coingroup.add(coin);

    }
}

function spawnobs(){
    if(frameCount % ran1 == 0){
        var obstacle = createSprite(1650,300,20,20);
        obstacle.addImage(obsimg);
        obstacle.scale = 0.05;
        obstacle.velocityX = -4
        obstacle.shapeColor = "blue";
       // obstacle.lifetime = 200;
      //  fireball.scale = 0.1;
      //  fireball.addImage(fireballimg);
        obsgroup.add(obstacle);
    }
}

/*
   if hammerstate hit obs not destroying
   arrangement of ladders
   */





