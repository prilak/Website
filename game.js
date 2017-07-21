var mapArray = [];

function mapBuild(){
    loadPixels();
    var floorHeight = Math.floor(Math.random() * 20) + 400;
    for(var j = 0; j<width; j++){
        mapArray[j] = new Array(width);
        for(var i=0; i<height; i++){
            mapArray[j][i] = new Array(4);
            index = (j + width*i)*4;
            if(i>=floorHeight-4&&i<=floorHeight+4){
                pixels[index+0]= Math.floor(Math.random() * 20);
                pixels[index+1]= Math.floor(Math.random() * 20);
                pixels[index+2]= Math.floor(Math.random() * 20);
                mapArray[j][i]=[pixels[index+0],pixels[index+1],pixels[index+2],255];

            }
            else if(i>=floorHeight-8&&i<=floorHeight+8){
                pixels[index+0]= 0;
                pixels[index+1]= 0;
                pixels[index+2]= 0;
                pixels[index+3]= Math.floor(Math.random() * 40)+180;
                mapArray[j][i]=[pixels[index+0],pixels[index+1],pixels[index+2],255];


            }
            else {
                pixels[index+0]= 0;
                pixels[index+1]= 0;
                pixels[index+2]= Math.floor(Math.random() * 50)+150;
                mapArray[j][i]=[pixels[index+0],pixels[index+1],pixels[index+2],255];

            }
        }
    }
    updatePixels();
}
function setup(){
    createCanvas(500, 500);
    pixelDensity(1);
    mapBuild();
}
function draw(){
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
    var play = new Player(Math.floor(Math.random() * 50)+150, 80);

    //play.gravity();
    var a = alert("wait");
}
function gameMap(){
//    background(200);
    //for(var i = 0; i<500; i++){
    //    for(var j = 0; j<width; j++){
    //        pixels[j + width * j] = color(255,0,0);
    //    }
    //} 
    
    
//    var play = new Player(80, 80);
    /*for(var i = 0; i<10; i++){
        play.gravity();
    }*/
    //while(1){
        //var game = setInterval(function(){play.gravity();},50);
        //play.gravity();
        //while(1){

        //}    //play.gravity(5);
    //}
}