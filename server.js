const express = require("express");
const path = require("path");
const router = require("./server/routes");
const app = express();


app.use(express.static(path.join(__dirname, "/public/dist/public")));

router(app);
app.all("*", (req,res)=>res.sendFile(path.join(__dirname, "/public/dist/public/index.html")));

app.listen(8000, ()=>console.log('Now serving on localhost8000'));