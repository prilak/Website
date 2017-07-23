//var k = 0;
function Player(xPos, yPos){
	this.xPos = xPos;
	this.yPos = yPos;
	this.mapPlaceHolder = [];
	/*for(var i = 0; i < 20; i++){
		this.mapPlaceHolder[i] = new Array(20);
		for(var j = 0; j < 20; j++){
			this.mapPlaceHolder[i][j] = get(xPos+i,yPos+j);
			console.log(this.mapPlaceHolder[i][j]);
		}
	}*/
	rect(xPos, yPos, 20, 20);
	this.speed = 5;
	this.gravity = function(){
		
			for(var i = 0; i < 20; i++){
				var xCheck = this.xPos + 20 + i; 
				for(var j = 0; j < this.speed; j++){
					var yCheck = this.yPos + 20 + j;
					
					if(mapArray[xCheck][yCheck][3]>=120&&mapArray[xCheck][yCheck][3]<=160){
						this.speed = j;
					}
				}
			}
			this.yPos += this.speed;
			var x = rect(this.xPos, this.yPos, 20, 20);
		    //loadPixels();
			/*for(var i = 0; i < 20; i++){
				for(var j = 0; j < 20; i++){
            		index = (i+this.xPos + width*(j+this.yPos))*4;
	            		console.log(pixels[index+2]);
						console.log(get(i+this.xPos,j+this.yPos));

            		pixels[index+0] = this.mapPlaceHolder[i][j][0];
            		pixels[index+1] = this.mapPlaceHolder[i][j][1];
            		pixels[index+2] = this.mapPlaceHolder[i][j][2];
            		pixels[index+3] = this.mapPlaceHolder[i][j][3];
            		console.log(pixels[index+2]);
				}				
			}*/
		//    updatePixels();
			//console.log(x);
//			this.speed+=1;
		//	j++;
		//}
	}

}