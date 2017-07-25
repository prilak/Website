var mapArray = [];
var play = [];
function mapBuild(){
    loadPixels();
    var floorHeight = Math.floor(Math.random() * 20) + 400;
    for(var j = 0; j<width; j++){
        mapArray[j] = new Array(width);
        for(var i=0; i<height; i++){
            mapArray[j][i] = new Array(4);
            index = (j + width*i)*4;
            if(i>=floorHeight-4&&i<=floorHeight+4){
                pixels[index+0]= 0;
                pixels[index+1]= 0;
                pixels[index+2]= 0;
                pixels[index+3]= Math.floor(Math.random() * 40)+120;;

                mapArray[j][i]=[pixels[index+0],pixels[index+1],pixels[index+2],pixels[index+3]];

            }
            else if(i>=floorHeight-8&&i<=floorHeight+8){
                pixels[index+0]= 0;
                pixels[index+1]= 0;
                pixels[index+2]= 0;
                pixels[index+3]= Math.floor(Math.random() * 40)+180;
                mapArray[j][i]=[pixels[index+0],pixels[index+1],pixels[index+2],pixels[index+3]];


            }
            else {
                pixels[index+0]= 0;
                pixels[index+1]= 0;
                pixels[index+2]= Math.floor(Math.random() * 50)+150;
                pixels[index+3]= 255;
                mapArray[j][i]=[pixels[index+0],pixels[index+1],pixels[index+2],pixels[index+3]];

            }
        }
    }
    updatePixels();
}
function setup(){
    createCanvas(500, 500);
    pixelDensity(1);
    mapBuild();
    play[0] = new Player(Math.floor(Math.random() * 50)+150, 80);
    play[1] = new Player(Math.floor(Math.random() * 50)+50, 40);
}
function enemyChase(i){
    
    var distance = Math.abs(play[0].xPos - play[i].xPos);

    if(distance <=4){}
    else if(play[i].xPos<play[0].xPos){
        play[i].xPos++;
    }
    else if(play[i].xPos>play[0].xPos){
        play[i].xPos--;
    }
    
}
function playerMove(){
    if(keyIsDown(LEFT_ARROW)){
        play[0].speedX = -2;
        play[0].xDir = -1;
    }
    if(keyIsDown(RIGHT_ARROW)){
        play[0].speedX = 2;
        play[0].xDir = 1;
    }
}
function mapUpdate(){
    loadPixels();
    for(var j = 0; j<width; j++){
        for(var i = 0; i<height; i++){
            index = (j + width*i)*4;
            pixels[index+0] = mapArray[j][i][0];
            pixels[index+1] = mapArray[j][i][1];
            pixels[index+2] = mapArray[j][i][2];
            pixels[index+3] = mapArray[j][i][3];

        }
    }
    updatePixels();
}
function charactersAttack(){
    if(play[0].attackInit>20&&play[0].attackInit<25){
        for(var i = 1; i<play.length; i++){
            var distance = Math.abs(play[0].xPos - play[i].xPos);
            if(distance < 190){
                play[i].health -= play[0].damage;
                console.log(play[i].health);
                if(play[i].health<=0){
                 play.splice(i,1); 
                }
            }
        }
    }
}
function draw(){
    mapUpdate();
    playerMove();
    for(var i = 0; i < play.length; i++){
        enemyChase(i);
        play[i].move();
        play[i].attack();
    }
    charactersAttack();
   

}
function keyTyped(){

}
function keyPressed() {
    if(keyCode === UP_ARROW){
        play[0].speedY = -10;
    }
    if(keyCode === CONTROL){
        play[0].attackInit = 1;
    }
}
function gameMap(){
    

}