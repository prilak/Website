function isEven(num){
	if(num%2===0){
		alert("even");
		return true;
	}
	else{
		alert("odd");
		return false;
	}
}
function factorial(num){
	ans = 1;
	while(num > 1){
		ans *= num;
		num -= 1;
	}
	alert(ans);
}
isEven(5);
isEven(8);
factorial(4);
factorial(3);