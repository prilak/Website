var maps = [];
var characters = [];
var mapCount = 0;
function setup(){
    maps[mapCount] = new Map();
    createCanvas(500, 500);
    pixelDensity(1);
    maps[mapCount].build();
    characters[0] = new Player(Math.floor(Math.random() * 50)+150, 80);
    characters[1] = new Player(Math.floor(Math.random() * 50)+50, 40);
}
function enemyChase(i){
    
    var distance = Math.abs(characters[0].xPos - characters[i].xPos);

    if(distance <=4){}
    else if(characters[i].xPos<characters[0].xPos){
        characters[i].xPos++;
    }
    else if(characters[i].xPos>characters[0].xPos){
        characters[i].xPos--;
    }
    
}


function charactersAttack(){
    if(characters[0].attackInit>20&&characters[0].attackInit<25){
        for(var i = 1; i<characters.length; i++){
            var distance = characters[0].xPos - characters[i].xPos;
            if(((distance < 190)&&(distance > 0)&&(characters[0].xDir==-1))||((distance > -190)&&(distance < 0)&&(characters[0].xDir==1))){
                characters[i].health -= characters[0].damage;
                console.log(characters[i].health);
                if(characters[i].health<=0){
                 characters.splice(i,1); 
                }
            }
        }
    }
}
function draw(){
    maps[mapCount].update();
    characters[0].moveDir();
    for(var i = 0; i < characters.length; i++){
        enemyChase(i);
        characters[i].move();
        characters[i].attack();
    }
    charactersAttack();
   

}
function keyTyped(){

}
function keyPressed() {
    if(keyCode === UP_ARROW){
        characters[0].speedY = -10;
    }
    if(keyCode === CONTROL){
        characters[0].attackInit = 1;
    }
}
function gameMap(){
    

}