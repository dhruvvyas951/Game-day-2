  function spawnObstacles(){

    var Obstacle;
    
    if(frameCount%30 === 0){
    
    Obstacle = createSprite(random(300,650),0);
    Obstacle.addImage("obstacle",obstacle); 
    obstacleGroup.add(Obstacle);
    Obstacle.scale = 0.3;
    Obstacle.velocityY = 4;
    Obstacle.lifetime = 200;
    Obstacle.setCollider("circle",0,0,60);
    
      }
    }
    function spawncivilians1(){
      
      var civilian1;
    
    if(frameCount%710 === 0){
    
      civilian1 = createSprite(random(325,625),0);
      civilian1.addImage("Civilian1",Civilian1); 
      civilian1.scale = 0.4;
      civilian1.velocityY = 6;
      civilian1.lifetime = 130;
      civilian1.setCollider("rectangle",0,0,80,200);
      civilianGroup.add(civilian1);
      
        }
      }
    
    function spawncivilians2(){
      
      var civilian2;
    
    if(frameCount%500 === 0){
    
    
      civilian2 = createSprite(random(325,625),0);
      civilian2.addImage("Civilian2",Civilian2); 
      civilian2.scale = 0.4;
      civilian2.velocityY = 6;
      civilian2.lifetime = 130;
      civilian2.setCollider("rectangle",0,0,80,200);
      civilianGroup.add(civilian2);
      
      
        }
      }
    
      function spawncivilians3(){
      
        var civilian3;
      
      if(frameCount%200 === 0){
      
      
        civilian3 = createSprite(random(325,625),0);
        civilian3.addImage("Civilian3",Civilian3); 
        civilian3.scale = 0.4;
        civilian3.velocityY = 6;
        civilian3.lifetime = 130;
        civilian3.setCollider("rectangle",0,0,80,200);
        civilianGroup.add(civilian3);
        
        
          }
        }
    
        function spawncivilians4(){
      
          var civilian4;
        
        if(frameCount%100 === 0){
        
        
          civilian4 = createSprite(random(525,625),0);
          civilian4.addImage("Civilian4",Civilian4); 
          civilian4.scale = 0.4;
          civilian4.velocityY = 6;
          civilian4.lifetime = 130;
          civilian4.setCollider("rectangle",0,0,80,200);
          civilianGroup.add(civilian4);
          
          
            }
          }
    
          function spawncivilians5(){
      
            var civilian5;
          
          if(frameCount%70 === 0){
          
          
            civilian5 = createSprite(random(325,425),0);
            civilian5.addImage("Civilian5",Civilian5); 
            civilian5.scale = 0.4;
            civilian5.velocityY = 6;
            civilian5.lifetime = 130;
            civilian5.setCollider("rectangle",0,0,80,200);
            civilianGroup.add(civilian5);
            
            
              }
            }
        