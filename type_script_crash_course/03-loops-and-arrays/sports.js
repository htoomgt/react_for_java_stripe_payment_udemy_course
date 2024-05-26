var sportOne = ["Golf", "Circket", "Tennins", "Swimming"];
for (var i = 0; i < sportOne.length; i++) {
    console.log(sportOne[i]);
}
console.log("\n\n");
// Let's use the simplied for loop
for (var _i = 0, sportOne_1 = sportOne; _i < sportOne_1.length; _i++) {
    var tempSport = sportOne_1[_i];
    if (tempSport == "Circket") {
        console.log("".concat(tempSport, " << my favorite sport"));
    }
    else {
        console.log(tempSport);
    }
}
