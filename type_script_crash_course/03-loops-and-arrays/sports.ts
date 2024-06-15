let sportOne: string[] = ["Golf", "Circket", "Tennins", "Swimming"];

for (let i = 0; i < sportOne.length; i++) {
    console.log(sportOne[i]);
}

console.log("\n\n")

// Let's use the simplied for loop
for (let tempSport of sportOne) {


    if (tempSport == "Circket") {
        console.log(`${tempSport} << my favorite sport`);
    }
    else {
        console.log(tempSport);
    }
}