var apiKey= "AIzaSyC3FQD-MCWfgEGbZZ_FCL1RpnJKgRRiGlg";




database.ref().push(drinkName);

var newRow = $("<tr>").append(
    $("<td>").text(drinkName),
    $("<td>").text(Ingredients),
    );