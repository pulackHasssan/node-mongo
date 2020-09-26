const express = require("express");


const app = express();


app.get("/", (req, res)=> {
    res.send('I know how to open node file...')
});

app.listen(2000, ()=> console.log("app listening to port 2000 successfully.") );