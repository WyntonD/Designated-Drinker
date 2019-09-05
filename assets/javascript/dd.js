var Config = {
    apiKey: "AIzaSyC3FQD-MCWfgEGbZZ_FCL1RpnJKgRRiGlg",
    authDomain: "designateddrinker-e35a3.firebaseapp.com",
    databaseURL: "https://designateddrinker-e35a3.firebaseio.com",
    projectId: "designateddrinker-e35a3",
    storageBucket: "",
    messagingSenderId: "545274280980",
    appId: "1:545274280980:web:93778394c39fcbf1"
  };
  // Initialize Firebase
  firebase.initializeApp(Config);
  // Reference database service
  var database = firebase.database();
 
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

