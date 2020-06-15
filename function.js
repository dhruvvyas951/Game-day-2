//controls of car
function keyPressed(){

    if(keyCode === 65){
  
      player.velocityX = player.velocityX-2;
    }
  
    if(keyCode === 87){
  
      player.velocityY = player.velocityY-3;
    }
  
    if(keyCode === 83){
  
      player.velocityY =  player.velocityY+3;
    }
  
    if(keyCode === 68){
  
      player.velocityX = player.velocityX+2;
    }
  }