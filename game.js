function setup(){
    createCanvas(500, 500);
    pixelDensity(1);
}
function draw(){
    //Player
}
function gameMap(){
    background(200);
    loadPixels();
    //for(var i = 0; i<500; i++){
    //    for(var j = 0; j<width; j++){
    //        pixels[j + width * j] = color(255,0,0);
    //    }
    //} 
    var floorHeight = Math.floor(Math.random() * 20) + 400;
    for(var j = 0; j<width; j++){
        for(var i=0; i<height; i++){
            index = (j + width*i)*4;
            if(i>=floorHeight-4&&i<=floorHeight+4){
                pixels[index+0]= Math.floor(Math.random() * 20);
                pixels[index+1]= Math.floor(Math.random() * 20);
                pixels[index+2]= Math.floor(Math.random() * 20);
            }
            else if(i>=floorHeight-8&&i<=floorHeight+8){
                pixels[index+0]= 0;
                pixels[index+1]= 0;
                pixels[index+2]= 0;
                pixels[index+3]= Math.floor(Math.random() * 40)+180;

            }
            else {
                pixels[index+0]= 0;
                pixels[index+1]= 0;
                pixels[index+2]= Math.floor(Math.random() * 50)+150;
            }
            //pixels[index+3]= 0;
        }
    }
    updatePixels();
    var play = new Player(80, 80);
    /*for(var i = 0; i<10; i++){
        play.gravity();
    }*/
    //while(1){
        var game = setInterval(function(){play.gravity();},50);

        //while(1){

        //}    //play.gravity(5);
    //}
}