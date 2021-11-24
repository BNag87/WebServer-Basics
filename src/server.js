const express = require("express");
const app = express();


app.use("/static", express.static("public"))
//[↑ ↑ ↑] - this will 'use' whatever is passed to it (extension on port 5000)
//("") is the path
//grabs a folder from parent folder, as long as static is declared

//keeps app open and takes 2 arguments. listening on port, callback function
//function runs if it successfully listens
//port is 3306
//backend apps run on port 5000
app.listen(5000, () => {
    console.log("Yaya! Listening on port 5000!");
});

//HTML isn't launched from here. 