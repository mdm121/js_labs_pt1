let friends = ["Robert", "Taryn", "Timon", "Alicia", "Akeia"];
let lines;
let count = 98;

for (let i = 0; i < friends.length; i++) {
    console.log(friends[i].toUpperCase() + ":");

    for (lines = 99; lines > 2; lines--) {
        console.log(lines + " lines of code in the file, " + lines + " lines of code;  " + friends[i] + " strikes one out, clears it all out, " + count-- + " lines of code in the file.");
    };
    
    if (lines == 2) {
        console.log(lines + " lines of code in the file, " + lines + " lines of code; " + friends[i] + " strikes one out, clears it all out, 1 line of code in the file.");
    }

    console.log("1 line of code in the file, 1 line of code; "
    + friends[i] + " strikes one out, clears it all out, no more lines of code in the file.");

    count = 98;
};