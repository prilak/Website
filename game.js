function mapCreate(){
    var map = new Array(100);
    var hMap = document.getElementById("map");
    var hMapCtx = hMap.getContext("2d");
    for(var i=0;i<100;i++){
        map[i] = new Array(100);
        for(var j=0;j<100;j++){
            map[i][j] = 's';//sky
            hMapCtx.rect(4*i,4*j,4,4);
            hMapCtx.stroke();
        }
    }
    alert(map[0][1]);
}