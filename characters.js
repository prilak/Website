//var k = 0;
function Player(xPos, yPos){
	this.xPos = xPos;
	this.yPos = yPos;
	this.mapPlaceHolder = [];
	for(var i = 0; i < 20; i++){
		this.mapPlaceHolder[i] = new Array(20);
		for(var j = 0; j < 20; j++){
			this.mapPlaceHolder[i][j] = get(xPos+i,yPos+j);
			console.log(this.mapPlaceHolder[i][j]);
		}
	}
	rect(xPos, yPos, 20, 20);
	this.speed = 5;
	this.gravity = function(){
		//var j = 0;
		//while(j < 40){
			//for(var i = 0; i<20; i++){

			//}
			
			this.yPos += this.speed;
			rect(this.xPos, this.yPos, 20, 20);

//			this.speed+=1;
		//	j++;
		//}
	}

}