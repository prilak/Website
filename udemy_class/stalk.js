function printReverse(arr){
	var i = arr.length - 1;
	while(i>=0){
		console.log(arr[i]);
		i--;
	}
}	
function isUniform(arr){
	arr.forEach(function(val){
		if(val!==arr[0]){
			return false;
		}
	});
	return true;
}
function sumArray(arr){
	var sum = 0;
	arr.forEach(function(val){
		sum += val;
	});
	return sum;
}
function max(arr){
	max = arr[0];
	arr.forEach(function(val){
		if(max<val){
			max = val;
		}
	});
	return max;
}
printReverse(['d','c','b','a']);
var a = isUniform(['a','a','a']);
var b = isUniform(['a','a','b']);
var c = sumArray([1,2,3,4]);
var d = max([5,4,3,7,2,1]);