function mapCreate(){
    var map = new Array(100);
    for(var i=0;i<100;i++){
        map[i] = new Array(100);
        for(var j=0;j<100;j++){
            map[i][j] = 's';//sky
        }
    }
    alert(map[0][1]);
}