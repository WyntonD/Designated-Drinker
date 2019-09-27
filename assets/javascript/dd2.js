var config = {
    apiKey: "AIzaSyC3FQD-MCWfgEGbZZ_FCL1RpnJKgRRiGlg",
    authDomain: "designateddrinker-e35a3.firebaseapp.com",
    databaseURL: "https://designateddrinker-e35a3.firebaseio.com",
    projectId: "designateddrinker-e35a3",
    storageBucket: "",
    messagingSenderId: "545274280980",
    appId: "1:545274280980:web:93778394c39fcbf1"
  };

firebase.initializeApp(config);

var database = firebase.database();


$("#searchBtn").on("click", function(event) {
    event.preventDefault();
  
    // Grabs user input
    var drinkName =$("#drinkName").val().trim();
  
    // Creates local "temporary" object for holding employee data
    var newDrink = {
    drink: drinkName,
    };
  
    // Uploads employee data to the database
    database.ref().push(newDrink);
  
    // Logs everything to console
    console.log(newDrink.drink);
  
    alert("Drink successfully added");
  
    // Clears all of the text-boxes
    $("#drinkName").val("");
  });
  
  // 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var drinkName = childSnapshot.val().drink;
  
    // Employee Info
    console.log(drinkName);
  
    // Create the new row
    var newRow = $("<tr>").append(
      $("<td>").text(drinkName),  
    );
  
    // Append the new row to the table
    $("#drink-table > tbody").append(newRow);
  });
  