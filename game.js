function setup(){
    createCanvas(1000, 1000);
}
function draw(){
    background(200);
    loadPixels();
    //for(var i = 0; i<500; i++){
    //    for(var j = 0; j<width; j++){
    //        pixels[j + width * j] = color(255,0,0);
    //    }
    //} 
    var floorHeight = Math.floor(Math.random() * 20) + 800;
    for(var j = 0; j<height; j++){
        for(var i=0; i<width; i++){
            index = (j + width*i)*4;
            if(j>=floorHeight-4&&j<=floorHeight+4){
                pixels[index+0]= 0;
                pixels[index+1]= 0;
                pixels[index+2]= 0;
            }
            else {
                pixels[index+0]= 0;
                pixels[index+1]= 0;
                pixels[index+2]= 255;
            }
            //pixels[index+3]= 0;
        }
    }
    updatePixels();
}