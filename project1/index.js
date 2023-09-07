const fs = require("fs");

fs.writeFile("./message.txt" , "Jai Shree Ram" , (err) => {
    if (err) throw err;
    console.log("The file has been saved");
});