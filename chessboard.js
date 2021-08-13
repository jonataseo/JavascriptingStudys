// A program that create a string which represents an 8x8 grid.
let spaceOrSharp = " ";
for(let currentRow = 0; currentRow < 8; currentRow++) {
    let rowString = "";
    for(let currentColumn = 0; currentColumn < 8; currentColumn++) {
        if(spaceOrSharp === " ")
            spaceOrSharp = "#";
        else
            spaceOrSharp = " ";
        rowString += spaceOrSharp;
    }
    console.log(rowString);
    if(spaceOrSharp === " ")
            spaceOrSharp = "#";
        else
            spaceOrSharp = " ";
}