var moviesDb = [
	{
		title: "In Bruges",
		hasWatched: true,
		rating: 5
	},
	{
		title: "Frozen",
		hasWatched: true,
		rating: 4
	}

];
moviesDb.forEach(function(movie){
	var result = "You have ";
	if(movie.hasWatched){
		result += "watched ";
	} 
	else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\"";
	result += movie.rating + "stars";
	console.log(result);
});