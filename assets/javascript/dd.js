 
var openBrewApi = c26133f883msh91f4998356d4396p19e1a0jsn3e67fad764aa;
 
var cocktailApi = c26133f883msh91f4998356d4396p19e1a0jsn3e67fad764aa;
 
var unirest = require("unirest");

var req = unirest("GET", "https://the-cocktail-db.p.rapidapi.com/filter.php");

req.query({
	"i": "Gin"
});

req.headers({
	"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
	"x-rapidapi-key": "c26133f883msh91f4998356d4396p19e1a0jsn3e67fad764aa"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});



 $("#btnBeer").on("click", function(){
    console.log("Beer button clicked");

 });

 $("#btnWine").on("click", function(){
    console.log("Wine button clicked");

 });

 $("#btnCocktail").on("click", function(){
    console.log("Cocktail button clicked");


 });

