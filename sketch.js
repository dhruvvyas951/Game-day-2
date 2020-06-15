//variables
var car,back;
var count = 0;
var obstacle;
var Black;
var Civilian1,Civilian2,Civilian3,Civilian4,Civilian5;
var civilianGroup;
var gameState = "Play";
var obstacleGroup;
var Play;
var Pause;

//this function will load all the images
function preload(){

  car = loadImage("images/aero.png");
  Civilian1 = loadImage("images/mclaren.png");
  Civilian2 = loadImage("images/mercedes AMG.png");
  Civilian3 = loadImage("images/cooper1.png");
  Civilian4 = loadImage("images/cooper2.png");
  Civilian5 = loadImage("images/cooper3.png");
  Black = loadImage("images/Gameover.png");
  back = loadImage("images/bridge.png");
  obstacle = loadImage("images/manhole.png");
  Play = loadImage("images/playButton.JPG");
  Pause = loadImage("images/pauseButton.JPG");
}

//this function is to set up all the commands
  function setup() {
    createCanvas(1000,800);

    //player
    player = createSprite(455,700,20,20);
    player.addImage("car",car);
    player.scale = 0.4;
    player.setCollider("rectangle",0,0,80,200);

    //background
    backgrnd = createSprite(500,400,1000,1000); 
    backgrnd.addImage("back",back);
    backgrnd.velocityY = 4;
    backgrnd.scale = 2;
    backgrnd.depth = 0;

    //makes a group of obstacles
    obstacleGroup = createGroup();
    civilianGroup = createGroup();
 
    //for car movement
    keyPressed();

    textSize(20);
}

//this function is to draw the sprites
  function draw() {
    background(255,255,255);

    if(gameState === 'Play'){

      //for score
      count = count + Math.round(World.frameRate/61);
       
      //move the ground
       if (backgrnd.y > 800){
        backgrnd.y = backgrnd.height/100; 
        }

        //to spwan Obstacles
        spawnObstacles();
        spawncivilians1();
        spawncivilians2();
        spawncivilians3();
        spawncivilians4();
        spawncivilians5();

        if(player.isTouching(obstacleGroup) || player.isTouching(civilianGroup)){

          gameState = "End"
        }

    }
    else if(gameState === "End"){

      backgrnd.velocityY = 0;
      obstacleGroup.setVelocityYEach (0);
      civilianGroup.setVelocityYEach(0);
      player.velocityY = 0;
      player.velocityX = 0;

      //black screen
      black = createSprite(500,400,1000,1000);
      black.addImage("black",Black);
      black.scale = 1;

      text("GAME OVER!",200,200);
      
    }

   drawSprites();

   //text("Your score = " + count + "KM",200,200);
      }

